var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgb(62,149,205,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#800080",
                backgroundColor: "rgb(128,0,128,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#FF0000",
                backgroundColor:"rgb(255,0,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#009739",
                backgroundColor:"rgb(0,151,57,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.4, y: 13173},
                ],
                label: "Russia",
                borderColor: "#0000FF",
                backgroundColor:"rgb(0,0,255,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 62.6, y: 3366},
                ],
                label: "Pakistan",
                borderColor: "#a67c00",
                backgroundColor:"rgb(166,124,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 65.8, y: 1632},
                ],
                label: "Bangladesh",
                borderColor: "#c0c0c0",
                backgroundColor:"rgb(192,192,192,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81.1, y: 32193},
                ],
                label: "Japan",
                borderColor: "#000000",
                backgroundColor:"rgb(0,0,0,0.1)",
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
            text: 'Life expectancy vs. GDP per capita for the most populated countries',
            font: {
                size: 18
            }
        },
        //Chart subtitle
        subtitle: {
            display: true,
            text: 'Within the top 10 most populated countries, there is a positive correlation between the life epectancy of that country and its GDP per capita.'
        },
    },
        scales: {
            y: {
            title: {
                display: true,
                text: 'GDP Per Capita'
            }
            },
            x: {
            title: {
                display: true,
                text: 'Life Expectancy'
            }
            }
            }
          }
        });