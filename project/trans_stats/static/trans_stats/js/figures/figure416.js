var barChartData = {
    labels: [
        ["Immediate family they grew", "up with (such as parents and siblings)"], 
        ["Extended family (such as", "aunts, uncles, and cousins)"], 
        ['Lesbian, gay, bisexual,', 'or transgender (LGBT) friends'],
        'Straight, non-transgender (non-LGBT) friends',
        'Current bosses, managers, or supervisors',
        'Current coworkers',
        'Current classmates',
        'Current healthcare providers'
    ],
    datasets:
    [
        {
            label: 'All know that they are transgender',
            backgroundColor: "rgb(30,144,255)",
            borderColor: "rgb(30,144,255)",
            borderWidth: 1,
            data: [53, 23, 62, 32, 35, 23, 15, 40]
        },
        {
            label: 'Most know that they are transgender',
            backgroundColor: "rgb(220,20,60)",
            borderColor: "rgb(220,20,60)",
            borderWidth: 1,
            data: [9, 15, 20, 23, 6, 11, 10, 12]
        },
        {
            label: 'Some know that they are transgender',
            backgroundColor: "rgb(0,100,0)",
            borderColor: "rgb(0,100,0)",
            borderWidth: 1,
            data: [16, 23, 14, 34, 10, 24, 28, 17]
        },
        {
            label: 'None know that they are transgender',
            backgroundColor: "rgb(255,69,0)",
            borderColor: "rgb(255,69,0)",
            borderWidth: 1,
            data: [22, 39, 4, 12, 49, 42, 47, 31]
        }
    ]

};

var ctx = document.getElementById("figure4.16");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: barChartData,
        options: {
            responsive: true,
            legend: {position: 'bottom'},
            title: {
                display: true,
                text: "Figure 4.16: Outness to peoplein respondents' lives"
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
                xAxes: [{
                    ticks: {
                        beginAtZero:true,
                        callback: function(value){return value+ "%"},
                        max: 80
                    }
                }]
            }
        }
    })