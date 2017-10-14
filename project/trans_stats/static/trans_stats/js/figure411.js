var ctx = document.getElementById("figure4.11");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Assumptions about their gender identity vary", "Non-trans men", "Non-trans women", "Trans man", "Trans woman", "Non-binary", "Others cannot tell their gender"],
        datasets: [{
            label: '% of Respondents',
            data: [19, 17, 58, 2, 1, 1, 2],
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