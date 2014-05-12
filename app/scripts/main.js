$(document).ready(function(){

// jQuery datePicker -------------------------------- //

		$(".dateInput").datepicker({dateFormat:'yy-mm-dd'});

// end datePicker -------------------------------------//
// Input Event ------------------------------------- //
$("#stockDataForm").submit(function(e){
				e.preventDefault();
				var tickerData = $("#tickerInput").val();
				var beginData = $("#beginInput").val();
				var endData = $("#endInput").val();
		// Yahoo REST query generated from YQL command: select * from yahoo.finance.historicaldata where symbol = "tickerSymbol" and startDate = "yyyy-mm-dd" and endDate = "yyyy-mm-dd" ---- //
		// create dynamic URL from user input event for AJAX ---------------------- //
				var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22"+ tickerData + "%22%20and%20startDate%20%3D%20%22" + beginData + "%22%20and%20endDate%20%3D%20%22" + endData + "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

		// GET request ------------------------- //
		
			$.ajax( {
				url: url,
				type: 'GET',
				dataType: "json",
				error: function (jqXHR, status, error){
					alert("GET request failed");
				},
				success: function(response){
					var quotes = response.query.results.quote;
					var quotArr = [];
					var dataArr = [];
					for(var i=0; i<quotes.length; i++) {

						quotArr.unshift(quotes[i].Date);
						dataArr.unshift(quotes[i].Close);


					}
					console.log("quotArr " + quotArr );
					console.log("dataArr " + dataArr );
					// var stockData = {
					// labels: [], 
					// datasets: [
					// 		  {
					// 		  	fillColor: "rgba(200,194,132,0.4)",
					// 		  	strokecolor: "#ACC26D",
					// 		  	pointColor: "#fff",
					// 		  	pointStrokeColor: "#9DB86D",
					// 		  	data: [] //labels and data must have same number of elements, generate data from JSON


					// 	}]
					// };

					var stockData = {};
					stockData.labels = quotArr;
					stockData.datasets = [
						{
							fillColor: "rgba(200,194,132,0.4)",
							strokecolor: "#ACC26D",
							pointColor: "#fff",
							pointStrokeColor: "#9DB86D", 
							data: dataArr 
						}];

					// stockData.datasets.fillColor = "rgba(200,194,132,0.4)";
					// stockData.datasets.strokecolor = "#ACC26D";
					// stockData.datasets.pointColor = "#fff";
					// stockData.datasets.pointStrokeColor = "#9DB86D";

					// $.each(response.query.results.quote, function(i, quote){
						// xaxisArray.unshift(quote.Date);
						// console.log(quote.Date);
						// console.log(quote.Close);
						// stockData.labels.unshift(quote.Date);
						// stockData.datasets.data.unshift(quote.Close);
						
					// }); 
					// Line Chart Basics --------------------------------- //
			

			var ctx = $("#lineChart")[0].getContext('2d');

			var myStockLineChart = new Chart(ctx).Line(stockData);

			// End Chart Basics ----------------------------- //
				}  
			}); 
		
		// End GET Request ------------------------ //		

});












});









