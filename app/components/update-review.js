import Ember from 'ember';

export default Ember.Component.extend({
  updateReviewForm: false,
  actions: {
    updateReviewForm() {
      this.set('updateReviewForm', true);
    },
    update(review) {
      var params = {
        user: this.get('user'),
        movie: this.get('movie'),
        director: this.get('director'),
        genre: this.get('genre'),
        user_review: this.get('user_review'),
        image: this.get('image'),
      };
      this.set('updateReviewForm', false);
      this.sendAction('update', review, params);
    }
  }
});
