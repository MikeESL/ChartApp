$(document).ready(function(){

// jQuery datePicker -------------------------------- //

		$(".dateInput").datepicker({dateFormat:'yy-mm-dd'});

// end datePicker -------------------------------------//
// Input & Graph Build Event ------------------------------------- //
$("#stockDataForm").submit(function(e){
				e.preventDefault();
				var tickerData = $("#tickerInput").val();
				var beginData = $("#beginInput").val();
				var endData = $("#endInput").val();
		// Yahoo REST query generated from YQL command: select * from yahoo.finance.historicaldata where symbol = "tickerSymbol" and startDate = "yyyy-mm-dd" and endDate = "yyyy-mm-dd" ---- //
		// create dynamic URL from user input event for AJAX ---------------------- //
				var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22"+ tickerData + "%22%20and%20startDate%20%3D%20%22" + beginData + "%22%20and%20endDate%20%3D%20%22" + endData + "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
		
			$.ajax({
				url: url,
				type: 'GET',
				dataType: "json",
				error: function (jqXHR, status, error){
					alert("GET request failed");
			},
				success: function(response){
					var xaxisArr = [];
					var dataPointsArr = [];
					$.each(response.query.results.quote, function(i, quote){
						xaxisArr.unshift(quote.Date);
						dataPointsArr.unshift(quote.Close);


					var stockData = {
						labels: xaxisArr,
						datasets: [{
									fillColor: "#6db33f",
									strokecolor: "#ACC26D",
									pointColor: "#fff",
									pointStrokeColor: "#34302d",
									pointDot: false,
									data: dataPointsArr 
			}]};
			

			var ctx = $("#lineChart")[0].getContext('2d');

			var myStockLineChart = new Chart(ctx).Line(stockData);

			
			});  
		}		

  });



 });


}); 









