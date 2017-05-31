import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview1() {
      var params = {
        user: this.get('user') ? this.get('user'): "",
        movie: this.get('movie') ? this.get('movie'): "",
        director: this.get('director') ? this.get('director'): "" ,
        genre: this.get('genre') ? this.get('genre'): "",
        user_review: this.get('user_review') ? this.get('user_review'): "",
        image: this.get('image') ? this.get('image'): "",
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
