import { test, moduleForModel } from 'ember-qunit';

moduleForModel('ast/class', 'AstClass', {
  // Specify the other units that are required for this test.
  needs: ['model:ast/method']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
