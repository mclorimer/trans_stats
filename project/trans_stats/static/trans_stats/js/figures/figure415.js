var barChartData = {
    labels: ["Overall", "Non-Binary", "Trans men", "Trans women"],
    datasets:
    [
        {
            label: 'Always or most of the time',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [11, 6, 9, 19]
        },
        {
            label: 'Sometimes',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [32, 32, 20, 35]
        },
        {
            label: 'Rarely or never',
            backgroundColor: "rgb(0,100,0)",
            borderColor: "rgb(0,100,0)",
            borderWidth: 1,
            data: [57, 62, 61, 47]
        }
    ]

};

var ctx = document.getElementById("figure4.15");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'top'},
            title: {
                display: true,
                text: ["Figure 4.15 How often people could tell they were transgender without being told", "GENDER IDENTITY (%)"]
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
                        max: 70
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