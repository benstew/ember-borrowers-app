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
    }
  }

});
