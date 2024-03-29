var FilmDetailsView = Backbone.View.extend({
	el: '#film-details-container',

	template: _.template($('#film-details-template').html()),

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});

// http://stackoverflow.com/questions/2090551/parse-query-string-in-javascript
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

var filmId = getQueryVariable('id');
var film = new Film({ id: filmId });
film.fetch();
var filmDetailsView = new FilmDetailsView({ model: film });