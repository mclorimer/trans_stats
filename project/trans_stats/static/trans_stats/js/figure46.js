var barChartData = {
    labels: ["Crossdressers", "Non-Binary", "Trans men", "Trans women"],
    datasets:
    [
        {
            label: '18 to 24',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [8, 61, 43, 24]
        },
        {
            label: '25 to 44',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [29, 35, 47, 46]
        },
        {
            label: '45 to 64',
            backgroundColor: "rgb(0,100,0)",
            borderColor: "rgb(0,100,0)",
            borderWidth: 1,
            data: [43, 4, 9, 26]
        },
        {
            label: '65 and over',
            backgroundColor: "rgb(255,69,0)",
            borderColor: "rgb(0,100,0)",
            borderWidth: 1,
            data: [20, 1, 1, 5]
        }
    ]

};

var ctx = document.getElementById("figure4.6");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'top'},
            title: {
                display: true,
                text: "Figure 4.6: Gender identity by current age"
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