var ctx = document.getElementById("figure4.17");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["White", "American Indian", "Asian", "Black", "Latino/a", "Middle Eastern", "Multiracial"],
        datasets: [{
            label: '% of Respondents',
            data: [62.2, 0.7, 5.1, 12.6, 16.6, 0.4, 2.5],
            backgroundColor: [
                'rgb(176,196,222),',
                'rgb(95,158,160)',
                'rgb(0,0,139)',
                'rgb(138,43,226)',
                'rgb(0,0,255)',
                'rgb(240,248,255)',
                'rgb(30,144,255)'

            ],
            borderColor: [
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)'
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