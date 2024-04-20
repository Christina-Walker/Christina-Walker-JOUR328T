var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['#1 Blinding Lights by The Weekend','#2 Shape of You by Ed Sheeran', '#3 Someone You Loved by Lewis Capaldi', '#4 Dance Monkey by Tones and I', '#5 Sunflower - Spider-Man: Into the Spider-Verse by Post Malone', '#6 One Dance by Drake', '#7 STAY (with Justin Bieber) by Justin Bieber', '#8 Believer by Imagine Dragons', '#9 Closer by The Chainsmokers','#10 Starboy by The Weekend'],
        datasets: [{
            label: 'Appearances in Spotify Playlists',
            data: [43899, 32181, 17836, 24529, 24094, 43257, 17050, 18986, 28032, 29536],
            backgroundColor: [
                "rgb(29, 185, 84,0.7)"
            ]
        },
        {
            label: 'Appearances in Apple Music Playlists',
            data: [672, 33, 440, 533, 372, 433, 492, 250, 315, 281],
            backgroundColor: [
                "rgb(249, 76, 87,0.8)"
            ],
        }]
    },
    options: {
        responsive: true,
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'Top 10 Most Streamed Songs on Spotify (2023) vs. their Appearances in Apple Music Playlists',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'The top 10 most streamed songs on Spotify all had thousands of appreances in Spotify playlists. However, not a single one of these songs appeared in even 1,000 Apple Music playlists.'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                stacked: true
            },
            x: {
                stacked: true
            }
        },
    },
});
