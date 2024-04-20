var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['#1 Blinding Lights by The Weekend','#2 Shape of You by Ed Sheeran', '#3 Someone You Loved by Lewis Capaldi', '#4 Dance Monkey by Tones and I', '#5 Sunflower - Spider-Man: Into the Spider-Verse by Post Malone', '#6 One Dance by Drake', '#7 STAY (with Justin Bieber) by Justin Bieber', '#8 Believer by Imagine Dragons', '#9 Closer by The Chainsmokers','#10 Starboy by The Weekend'],
        datasets: [{
            label: 'Danceability',
            data: [50, 83, 50, 82, 76, 77, 59, 77, 75, 68],
            backgroundColor: [
                '#66D313'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Danceability of the Top 10 Most Streamed Spotify Songs in 2023',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: '"Blinding Lights" by The Weekend had one of the lowest danceability scores of the top 10 most streamed songs on spotify. '
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Danceability (%)'
                  }
            }
        },
    },
});
