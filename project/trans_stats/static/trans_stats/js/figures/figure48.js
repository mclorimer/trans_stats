var barChartData = {
    labels: ["Crossdressers", "Non-Binary", "Trans men", "Trans women"],
    datasets:
    [
        {
            label: 'They have transitioned',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [6, 43, 82, 68]
        },
        {
            label: 'They want to transition someday',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [28, 21, 16, 29]
        },
        {
            label: 'They are not sure if they want to transition',
            backgroundColor: "rgb(0,100,0)",
            borderColor: "rgb(0,100,0)",
            borderWidth: 1,
            data: [43, 31, 2, 3]
        },
        {
            label: 'They do not want to transition',
            backgroundColor: "rgb(255,69,0)",
            borderColor: "rgb(255,69,0)",
            borderWidth: 1,
            data: [23, 5, 1, 1]
        }
    ]

};

var ctx = document.getElementById("figure4.8");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'top'},
            title: {
                display: true,
                text: "Figure 4.8: Transition status of respondents GENDER IDENTITY(%)"
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