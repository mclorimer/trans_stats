var ctx = document.getElementById("figure4.18a");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["18 to 24", "25 to 44", "46 t0 64", "65 and over"],
        datasets: [{
            label: '% of Respondents',
            data: [42, 42, 14, 2],
            backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
				'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    	pieceLabel: {render: "label"},
    	tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    var allData = data.datasets[tooltipItem.datasetIndex].data;
                    var tooltipLabel = data.labels[tooltipItem.index];
                    var tooltipData = allData[tooltipItem.index];
                    var total = 0;
                    for (var i in allData) {
                        total += allData[i];
                    }
                    var tooltipPercentage = Math.round((tooltipData / total) * 100);
                    return tooltipLabel + ': ' + ' (' + tooltipPercentage + '%)';
                }
            }
    	}
    }
});