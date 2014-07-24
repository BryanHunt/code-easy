import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('semantic-version', 'SemanticVersion', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function() {
  var model = this.subject();
  ok(model);
});

test('is computes fullVersion correctly', function() {
  var model = this.subject();
  
  Ember.run(function() {
    model.set('majorVersion', 1);
    model.set('minorVersion', 2);
    model.set('maintVersion', 3);    
  });

  equal(model.get('fullVersion'), "1.2.3");
});