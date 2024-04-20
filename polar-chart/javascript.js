var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
              '#1 Blinding Lights by The Weekend',
              '#2 Shape of You by Ed Sheeran',
              '#3 Someone You Loved by Lewis Capaldi',
              '#4 Dance Monkey by Tones and I',
              '#5 Sunflower - Spider-Man: Into the Spider-Verse by Post Malone',
              '#6 One Dance by Drake',
              '#7 STAY (with Justin Bieber) by Justin Bieber',
              '#8 Believer by Imagine Dragons',
              '#9 Closer by The Chainsmokers',
              '#10 Starboy by The Weekend'
            ],
            datasets: [{
              label: 'Number of Streams',
              data: [3703895074, 3562543890, 2887241814, 2864791672, 2808096550, 2713922350, 2665343922, 2594040133, 2591224264, 2565529693],
              backgroundColor: [
                'rgb(3, 168, 160, 0.6)',
                'rgb(3, 156, 75, 0.6)',
                'rgb(102, 211, 19, 0.6)',
                'rgb(254, 223, 23, 0.6)',
                'rgb(255, 9, 132, 0.6)',
                'rgb(33, 64, 154, 0.6)',
                'rgb(4, 173, 255, 0.6)',
                'rgb(228, 136, 115, 0.6)',
                'rgb(241, 102, 35, 0.6)',
                'rgb(244, 69, 70, 0.6)',
              ]
            }]
          },
          options: {
            responsive: true,
            plugins: {
        //Chart title
        title: {
            display: true,
            text: 'Top 10 Most Streamed Spotify Songs in 2023',
            font: {
                size: 20
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'For the top 10 most streamed songs on Spotify, there is little disparity in numbers between the songs, except for the top two that tower over the rest.',
            font: {
              size: 16
          }
        },
    },
          }
        });