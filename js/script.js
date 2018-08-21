new Vue({
	el: '#app',
	data: {
		city: 'London',
	    summary: 'My Current Weather',
	    temperature: '',
	    humidity: '',
	    windSpeed: '',
	    image: ''

	},
	methods: {
		getData: function() {
			var self=this;
			var urlweather = 'https://samples.openweathermap.org/data/2.5/weather?q='+self.city+'&appid=b6907d289e10d714a6e88b30761fae22';

			this.$https.get(urlweather).then(function(response){
	            var obj = response.content.toJSON();
	            this.summary = obj.currently.summary;
	            this.humidity = 'humidity: '+obj.currently.humidity.toString()+'%';
	            this.windSpeed = 'wind: '+obj.currently.windSpeed.toString()+' mph';
	            this.temperature = Math.round(obj.currently.temperature).toString() + '°';
	            this.image(obj.currently.icon.toString());
        	})
		}
	}
});
