var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 80, y: 3703895074},
                ],
                label: "#1 Blinding Lights by The Weekend",
                borderColor: "#03a8a0",
                backgroundColor: "rgb(3, 168, 160,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 65, y: 3562543890},
                ],
                label: " #2 Shape of You by Ed Sheeran",
                borderColor: "#039c4b",
                backgroundColor: "rgb(3, 156, 75,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 41, y: 2887241814},
                ],
                label: "#3 Someone You Loved by Lewis Capaldi",
                borderColor: "#66d313",
                backgroundColor:"rgb(102, 211, 19,0.1)",
                borderWidth:2,
                
              }, {
              data: [
                {x: 59, y: 2864791672},
              ],
              label: "#4 Dance Monkey by Tones and I",
              borderColor: "#fedf17",
              backgroundColor: "rgb(254, 223, 23,0.1)",
              borderWidth:2,
             
            }, { 
              data: [
                {x: 50, y: 2808096550},
              ],
              label: "#5 Sunflower - Spider-Man: Into the Spider-Verse by Post Malone",
              borderColor: "#ff0984",
              backgroundColor: "rgb(255, 9, 132,0.1)",
              borderWidth:2,
              
            }, { 
              data: [
              {x: 63, y: 2713922350},
              ],
              label: "#6 One Dance by Drake",
              borderColor: "#21409a",
              backgroundColor:"rgb(33, 64, 154,0.1)",
              borderWidth:2,
              
            }, { 
                data: [
                {x: 76, y: 2665343922},
                ],
                label: "#7 STAY (with Justin Bieber) by Justin Bieber",
                borderColor: "#04adff",
                backgroundColor:"rgb(4, 173, 255,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 78, y: 2594040133},
                ],
                label: "#8 Believer by Imagine Dragons",
                borderColor: "#e48873",
                backgroundColor:"rgb(228, 136, 115,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 52, y: 2591224264},
                ],
                label: "#9 Closer by The Chainsmokers",
                borderColor: "#f16623",
                backgroundColor:"rgb(241, 102, 35,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 59, y: 2565529693},
                ],
                label: "#10 Starboy by The Weekend",
                borderColor: "#f44546",
                backgroundColor:"rgb(244, 69, 70,0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            responsive: true,
            plugins: { 
        //Chart title
        title: {
            display: true,
            text: 'Level of Energy of the Top 10 Most Streamed Spotify Songs in 2023',
            font: {
                size: 18
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'For the top 10 most streamed songs on Spotify, there seems to be little correlation between the number of streams and the energy levels of the song.',
            font: {
              size: 16
          }
        },
    },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Number of Streams'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Level of Energy (%)'
                  }
              }
            }
          }
        });