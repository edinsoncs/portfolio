(function(){

	var app = angular.module('portfolio', []);

	app.controller('perfil', function(){

		this.cv = {

			name: 'edinson',
			email: 'edinson@hotmail.com',
			phone: '1506030496',
			birthday: '25 de junio',
			city: 'Buenos Aires',
			from: 'Peruano'
		};
	});

})();
