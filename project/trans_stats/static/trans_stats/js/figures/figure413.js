var ctx = document.getElementById("figure4.13");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["He, his", "She, her", "They, their", "Ze, hir", ["No Pronouns (they ask people", "only to use their name)"], ["They do not ask people", "to use specific pronouns"], "Pronouns not listed above"],
        datasets: [{
            label: '% of respondents',
            data: [37, 37, 29, 2, 4, 20, 4],
            backgroundColor: [
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)'
            ],
            borderColor: [
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
                'rgb(0,0,128)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function(value){return value+ "%"},
                    max: 100
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
});