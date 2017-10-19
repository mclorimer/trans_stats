var barChartData = {
    labels: ["No Income", "$1 to $9,999", "$10,000 to $24,000", "$25,000 to $49,999", "$50,000 to $99,999", "$100,000 or more"],
    datasets:
    [
        {
            label: '% in USTS (supplimental weight)',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [4, 12, 22, 24, 23, 15]
        },
        {
            label: '% in U.S. adult population (CPS)',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [1, 4, 12, 21, 31, 31]
        }
    ]

};

var ctx = document.getElementById("figure4.22");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'top'},
            title: {
                display: true,
                text: "Figure 4.22: Household income in 2014"
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
                    max: 30
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