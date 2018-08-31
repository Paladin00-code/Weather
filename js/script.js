new Vue({
	el: '#app',
	data: {
		city: 'York',
		summary: 'My Current Weather for BWT',
		temperature: '',
		humidity: '',
		windSpeed: '',
		pressure: '',
		description: '',
		image: '10n'
	},
	

	methods: {
    getData: function() {

      this.loading = true;

      axios
        .get("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: this.city,
            units: "metric",
            appid: "4060d7e8ac95a19d8f6ccf33d8466024"
          }
        })
        .then(response => {
					var data=response.data;
					console.log(data);
					this.temperature=data.main.temp+' C°';
					this.humidity='humidity '+data.main.humidity+' %';
					this.windSpeed='windSpeed'+data.wind.speed+' m/h';
					this.pressure='pressure '+data.main.pressure+' hpa';
					this.description=data.weather[0].description;
					this.image='http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';				

        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    }
  }
});
