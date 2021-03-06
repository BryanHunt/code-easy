import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('code-method', 'CodeMethodComponent', {
  // specify the other units that are required for this test
  needs: ['helper:expander-button', 'component:code-function-signature', 'component:code-block']
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
