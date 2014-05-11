$(document).ready(function(){

// User input events ---------------------------- //

			$("#tickerForm").submit(function(e){
					e.preventDefault();
					var tickerData = $(".tickerInput").val();
					console.log(tickerData);
			});
			$("#beginForm").submit(function(e){
					e.preventDefault();
					var beginData = $(".beginInput").val();
					console.log(beginData);
			});
			$("#endForm").submit (function(e){
					e.preventDefault();
					var endData = $(".endInput").val();
					console.log(endData);
			});
// End user inputs ---------------- -------- //
// Yahoo REST query generated from YQL command: select * from yahoo.finance.historicaldata where symbol = "tickerSymbol" and startDate = "yyyy-mm-dd" and endDate = "yyyy-mm-dd" ---- //
// create dynamic URL from user input events for AJAX ---------------------- //

var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22"+ tickerData + "%22%20and%20%20%3D%20%22" + beginData + "%22%20and%20endDate%20%3D%20%22" + endData + "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="
console.log(url);










// Line Chart Basics --------------------------------- //
var stockData = {
		labels: [ "time1", "time2", "time3", "time4", "time5", "time6"], 
		datasets: [
				  {
				  	fillColor: "rgba(200,194,132,0.4)",
				  	strokecolor: "#ACC26D",
				  	pointColor: "#fff",
				  	pointStrokeColor: "#9DB86D",
				  	data: [100,175,325,25,400,115] //labels and data must have same number of elements, generate data from JSON


}]
}

var stockGraph = $("#lineChart")[0].getContext('2d');

new Chart (stockGraph).Line(stockData);

// End Chart Basics ----------------------------- //


});








