import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  movie: DS.attr(),
  director: DS.attr(),
  genre: DS.attr(),
  user_review: DS.attr(),
  image: DS.attr()
});
