/**
 * 
 */

package net.springfieldusa.codeeasy.rest.ast;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriInfo;

import org.bson.types.ObjectId;
import org.eclipselabs.emongo.MongoDatabaseProvider;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;

/**
 * @author bhunt
 *
 */
@Component(service = TypeResource.class)
@Path("/ast/types")
@Consumes("application/json")
@Produces("application/json")
public class TypeResource
{
	private static final String AST_TYPES = "ast_types";
	private MongoDatabaseProvider mongoDatabaseProvider;

	@Activate
	public void activate()
	{
		System.out.println("DataComponent is active");
	}

	@POST
	public Response addData(String json)
	{
		DBCollection collection = getCollection();
		DBObject data = unwrap(json);
		collection.insert(data);
		return Response.ok(wrapObject(data).toString(), MediaType.APPLICATION_JSON).build();
	}

	@DELETE
	@Path("/{id}")
	public Response deleteData(@PathParam("id") String objectId)
	{
		DBCollection collection = getCollection();

		DBObject id = new BasicDBObject();

		try
		{
			id.put("_id", new ObjectId(objectId));
		}
		catch (Exception e)
		{
			return Response.status(Status.NOT_FOUND).build();
		}

		collection.remove(id);

		return Response.ok().build();
	}

	@GET
	public Response getData(@Context UriInfo uriInfo)
	{
		DBCollection collection = getCollection();

		DBObject query = (DBObject) JSON.parse(uriInfo.getRequestUri().getQuery());
		DBCursor cursor = collection.find(query);

		StringBuilder data = new StringBuilder("[");
		boolean firstOne = true;

		while (cursor.hasNext())
		{
			if (firstOne)
				firstOne = false;
			else
				data.append(',');

			data.append(cursor.next().toString());
		}

		data.append("]");
		return Response.ok(data.toString(), MediaType.APPLICATION_JSON).build();
	}

	@GET
	@Path("/{id}")
	public Response getData(@PathParam("id") String objectId)
	{
		DBCollection collection = getCollection();

		DBObject id = new BasicDBObject();

		try
		{
			id.put("_id", new ObjectId(objectId));
		}
		catch (Exception e)
		{
			return Response.status(Status.NOT_FOUND).build();
		}

		DBObject object = collection.findOne(id);

		if (object == null)
			return Response.status(Status.NOT_FOUND).build();

		return Response.ok(object.toString(), MediaType.APPLICATION_JSON).build();
	}

	@PUT
	public Response updateData(String json)
	{
		DBCollection collection = getCollection();
		DBObject data = (DBObject) JSON.parse(json);
		collection.save(data);
		return Response.ok(data.toString(), MediaType.APPLICATION_JSON).build();
	}

	@Reference(unbind = "-")
	public void bindMongoDatabaseProvider(MongoDatabaseProvider mongoDatabaseProvider)
	{
		this.mongoDatabaseProvider = mongoDatabaseProvider;
	}

	protected DBObject unwrap(String json)
	{
		DBObject data = (DBObject) JSON.parse(json);
		return (DBObject) data.get("type");
	}

	protected DBObject wrapObject(DBObject data)
	{
		return new BasicDBObject("type", data);
	}

	protected DBObject wrapObjects(DBObject data)
	{
		return new BasicDBObject("types", data);
	}

	private DBCollection getCollection()
	{
		return mongoDatabaseProvider.getDB().getCollection(AST_TYPES);
	}
}
