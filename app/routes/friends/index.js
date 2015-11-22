import Ember from 'ember';

export default Ember.Route.extend({ 
  model() {
    return this.store.findAll('friend'); 
  }
});


// Abstracted away with delete functionality on the friends route
// export default Ember.Route.extend({ 
//   model() {
//     return this.store.findAll('friend'); 
//   },
//   actions: { 
//     delete(friend) {
//       friend.destroyRecord();
//       return false; 
//     }
//   } 
// });