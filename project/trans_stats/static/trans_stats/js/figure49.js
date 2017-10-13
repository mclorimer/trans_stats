var barChartData = {
    labels: ["Overall", "Non-Binary", "Trans men", "Trans women"],
    datasets:
    [
        {
            label: 'Under 18',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [15, 24, 17, 7]
        },
        {
            label: '18 to 24',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [43, 56, 47, 30]
        },
        {
            label: '25 to 34',
            backgroundColor: "rgb(0,100,0)",
            borderColor: "rgb(0,100,0)",
            borderWidth: 1,
            data: [24, 16, 24, 28]
        },
        {
            label: '35 and over',
            backgroundColor: "rgb(255,69,0)",
            borderColor: "rgb(255,69,0)",
            borderWidth: 1,
            data: [18, 4, 12, 34]
        }
    ]

};

var ctx = document.getElementById("figure4.9");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'top'},
            title: {
                display: true,
                text: "Figure 4.9 Age began transitioning GENDER IDENTITY (%)"
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
            }
        }
    })