$(document).ready(function(){





var buyerData = {
		labels: ["January", "February", "March", "April", "May", "June"],
		datasets: [
				  {
				  	fillColor: "rgba(200,194,132,0.4)",
				  	strokecolor: "#ACC26D",
				  	pointColor: "#fff",
				  	pointStrokeColor: "#9DB86D",
				  	data: [203,156,99,25,305,247]


}]
}
var buyers = document.getElementById('buyers').getContext('2d');

new Chart (buyers).Line(buyerData);






})	