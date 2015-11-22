import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('friend');
  },
    actions: {
    save() {
      console.log('+-- save action bubbled up to friends new route');
        return true; 
    },
    cancel() {
      console.log('+-- save action bubbled up to friends new route');
        return true; 
    },
    activate() {
      console.log('----- activate hook called -----');
    },
    deactivate() {
      console.log('----- deactivate hook called -----');
    },
    resetController: function (controller, isExiting, transition) { 
      if (isExiting) {
        console.log('----- resetController hook called -----');
      } 
    },
  }
});