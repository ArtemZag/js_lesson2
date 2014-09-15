var Film = Backbone.Model.extend({
	url: function() {
		if (this.id == undefined)
			return '/api/films';
		else
			return '/api/films/' + this.id;
	},
	defaults:{
		year: 2014,
		name: '',
		id: undefined
	}
});