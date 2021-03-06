import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('review');
  },

  actions: {
    saveReview3(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    },

    update(review, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined) {
        review.set(key,params[key]);
      }
    });
    review.save();
    this.transitionTo('index');
  },

    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    }
  }
});
