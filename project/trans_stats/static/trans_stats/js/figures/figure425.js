var barChartData = {
    labels: [["Did not complete", "high school"], ["High school diploma", "or GED"], ["Some college (no degree)/", "Associate's degree"], "Associate's degree", "Bachelor's degree or higher", ["Graduate or professional", "degree"]],
    datasets:
    [
        {
            label: '% in USTS',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [2, 8, 26, 12, 32, 21]
        },
        {
            label: '% in U.S. adult population (ACS)',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [13, 28, 21, 8, 19, 12]
        }
    ]

};

var ctx = document.getElementById("figure4.25");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'top'},
            title: {
                display: true,
                text: "Figure 4.25: Educational attainment (ACS categories), ages 25 and older"
            },
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
                        return tooltipLabel + ': ' + ' (' + tooltipData + '%)';
                    }
                }
            },
            scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function(value){return value+ "%"},
                    max: 35
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    stepSize: 1,
                    min: 0,
                    autoSkip: false
                }
            }]
        }
        }
    })