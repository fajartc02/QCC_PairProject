function generateChart(data, GroupName, theme) {
  let calculateData = data / 8 * 100

  let myChart = document.getElementById('myChart')
  //Global Options
  Chart.defaults.global.defaultFontFamily = 'arial';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let massPopChart = new Chart(myChart, {
    type: 'horizontalBar', //bar, horizontalBar, pie, line , doughnut, radar
    data: {
      labels: [GroupName], // if you have many data use array
      datasets: [{
        label: 'Percentage Step On QCC',
        // label: ['oowner'],
        data: [calculateData],
        // backgroundColor: 'Black'
        backgroundColor: [
          'rgba(214, 99, 145, 0.2)'
        ],
        borderWidth: 4,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000',
      }]

    },
    options: {
      title: {
        //this for custom title on top
        display: true,
        text: theme, // default font size 18;
        fontSize: 25
      },
      legend: {
        //this for legend
        // you can be enable and desable chart click to legend text
        display: true,
        position: 'right',
        labels: {
          fontColor: 'black'
        }
      },
      layout: {
        // mapping layout grafik
        padding: {
          left: 50,
          right: 0,
          bottom: 0,
          top: 0
        }
      },
      tooltips: {
        enable: true // this for description data
      },
      scales: {
        //scaling range data
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Progress Steps(%)'
          },
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100
          }
        }],
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100
          }
        }]
      },
    }
  })
  return massPopChart
}