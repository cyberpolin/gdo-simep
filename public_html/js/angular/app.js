(function(){
	var app = angular.module('pozos', [])

	app.controller('pozosCtrl', ['$http', function($http){
		var pozo =this;
		pozo.products = [];
		$http.get('data/pozos.json').success(function(data){
			pozo.products = data;
		});
		this.products = pozo.products;

		this.selectActivo = function(data){
						$('#graficaActivo').html('');
			Morris.Donut({
			    element: 'graficaActivo',
			    data: data
			}).on('click', function(i, row){
  console.log(i, row.value);
});

		};
		this.selectPozo = function(data){
			$('#graficaActivo').html('');
			Morris.Line({
			  element: 'graficaActivo',
			  data: [
				    { y: '2006', a: Math.random(), b: Math.random() },
				    { y: '2007', a: Math.random(),  b: Math.random() },
				    { y: '2008', a: Math.random(),  b: Math.random() },
				    { y: '2009', a: Math.random(),  b: Math.random() },
				    { y: '2010', a: Math.random(),  b: Math.random() },
				    { y: '2011', a: Math.random(),  b: Math.random() },
				    { y: '2012', a: Math.random(), b: Math.random() }
				  ],
			  xkey: 'y',
			  ykeys: ['a', 'b'],
			  labels: ["Gas", "Aceite"]
			});
		};


	}]);
})();