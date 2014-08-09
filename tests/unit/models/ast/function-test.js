import { test, moduleForModel } from 'ember-qunit';

moduleForModel('ast/function', 'Ast/Function', {
  // Specify the other units that are required for this test.
  needs: ['model:ast/type', 'model:ast/parameter', 'model:ast/block', 'model:ast/statement']
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
});
