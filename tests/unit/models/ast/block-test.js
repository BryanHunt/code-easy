import { test, moduleForModel } from 'ember-qunit';

moduleForModel('ast/block', 'AstBlock', {
  // Specify the other units that are required for this test.
  needs: ['model:ast/statement']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
