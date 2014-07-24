import { test, moduleForModel } from 'ember-qunit';

moduleForModel('ast/parameter', 'Ast/Parameter', {
  // Specify the other units that are required for this test.
  needs: ['model:ast/type']
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
});
