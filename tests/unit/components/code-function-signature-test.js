import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('code-function-signature', 'CodeFunctionSignatureComponent', {
  // specify the other units that are required for this test
  needs: ['component:item-select', 'helper:expander-button']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component.state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component.state, 'inDOM');
});
