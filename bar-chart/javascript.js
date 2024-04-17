var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia & Pacific', 'Europe & Central Asia', 'Middle East & North Africa', 'South Asia', 'Sub-Saharan Africa'],
        datasets: [{
            label: 'Average GDP per Capita',
            data: [18791.13, 14480.30, 20818.45, 13856.00, 2505.17, 2569.00],
            backgroundColor: [
                '#6495ED'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Average GDP per Capita by Regions of the World',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and central Asia had the highest recorded average GDP per capita at $20,818.45. South Asia and sub-Saharan Africa had the lowest GDP per capita, both barely surpassing $2,500.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Average GDP per Capita ($)'
                  }
            }
        },
    },
});
