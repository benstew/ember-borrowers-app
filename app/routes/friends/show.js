import Ember from 'ember';

export default Ember.Route.extend({ });


// Abstracted away with delete action on friends route
// import Ember from 'ember';

// export default Ember.Route.extend({ 
//   actions: { 
//     delete(friend) {
//       friend.destroyRecord().then(() => {
//         this.transitionTo('friends.index');
//       });
//     }
//   } 
// });