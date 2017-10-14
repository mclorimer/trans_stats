var ctx = document.getElementById("figure4.20b");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
        "Northeast (CT, ME, MA, NH, NJ, NY, PA, RI, VT)",
        "Midwest (IA, IN, IL, KS, MI, MN, MS, NE, CD, OH, SD, WI)",
        "South (AL, AR, DE, DC, CL, GA, KY, LA, MD, MS, NC, OK, SC, TN, TX, VA, WA)",
        "West (AK, AZ, CA, CO, HI, ID, MN, NM, NV, OR, UT, WA, WY)"
        ],
        datasets: [{
            label: '% of Respondents',
            data: [18, 21, 38, 24],
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