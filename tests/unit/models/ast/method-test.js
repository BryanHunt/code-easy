import { test, moduleForModel } from 'ember-qunit';

moduleForModel('ast/method', 'AstMethod', {
  // Specify the other units that are required for this test.
  needs: ['model:ast/visibility', 'model:ast/parameter', 'model:ast/type', 'model:ast/block']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
