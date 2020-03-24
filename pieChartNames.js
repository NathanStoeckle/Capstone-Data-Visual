window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    backgroundColor: "black",
    legend: {
      fontColor: "white"
    },
    title: {
      text: "Reoccuring Dream?",
      fontColor: "white",
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "white",
      startAngle: 270,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {
          y: 54,
          label: "Yes",
          color: "black"
        },
        {
          y: 46,
          label: "No",
          color: "grey"
        }
		]
	}]
  });
  chart.render();

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    backgroundColor: "black",
    title: {
      text: "Good, Bad, or Netural Dream?",
      fontColor: "white",
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "white",
      startAngle: 270,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {
          y: 32,
          label: "Good",
          color: "black"
          },
        {
          y: 60,
          label: "Bad",
          color: "grey"
          },
        {
          y: 8,
          label: "Neutral",
          color: "lightgrey"
          }
        ]
      }]
  });

  chart2.render();

  var chart3 = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    backgroundColor: "black",
    title: {
      text: "How Many Dreams Correlated to Our Dreams?",
      fontColor: "white"
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "white",
      startAngle: 270,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {
          y: 10,
          label: "Flying",
          color: "black"
          },
        {
          y: 20,
          label: "Running/Chasing",
          color: "darkslategrey"
          },
        {
          y: 14,
          label: "Water",
          color: "slategrey"
          },
        {
          y: 10,
          label: "Falling",
          color: "lightslategrey"
          },
        {
          y: 28,
          label: "Nightmare",
          color: "dimgrey"
          },
        {
          y: 18,
          label: "Other - Did Not Fit into our Main Dreams",
          color: "grey"
          }
        ]
      }]
  });

  chart3.render();

  var chart4 = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    backgroundColor: "black",
    title: {
      text: "What Were the Main Moods of Each Dream?",
      fontColor: "white"
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "white",
      startAngle: 270,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {
          y: 18,
          label: "Happy/Excited/Content",
          color: "black"
          },
        {
          y: 27,
          label: "Fear",
          color: "darkslategrey"
          },
        {
          y: 4,
          label: "Sad",
          color: "slategrey"
          },
        {
          y: 4,
          label: "Empowerment",
          color: "lightslategrey"
          },
        {
          y: 14,
          label: "Anxious/Stressed",
          color: "dimgrey"
          },
        {
          y: 8,
          label: "Calm",
          color: "grey"
          },
        {
          y: 17,
          label: "Confusion",
          color: "darkgrey"
          },
        {
          y: 4,
          label: "Funny",
          color: "silver"
          },
        {
          y: 4,
          label: "Other",
          color: "lightgrey"
          }
        ]
      }]
  });

  chart4.render();

  var chart5 = new CanvasJS.Chart("chartContainer5", {
    animationEnabled: true,
    backgroundColor: "black",
    title: {
      text: "Word Frequency of Dream",
      fontColor: "white"
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "white",
      startAngle: 270,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {
          y: 24,
          label: "Run"
          },
        {
          y: 8,
          label: "Plane"
          },
        {
          y: 7,
          label: "Police"
          },
        {
          y: 7,
          label: "School"
          },
        {
          y: 8,
          label: "Shoot/Shot"
          },
        {
          y: 7,
          label: "Chased/Chasing"
          },
        {
          y: 6,
          label: "Feeling"
          },
        {
          y: 6,
          label: "Sky"
          },
        {
          y: 4,
          label: "Swim/Swimming"
          },
        {
          y: 4,
          label: "Ice"
          },
        {
          y: 4,
          label: "Jump"
          },
        {
          y: 4,
          label: "Watching"
          },
        {
          y: 6,
          label: "Die/Died"
          },
        {
          y: 3,
          label: "Dark"
          },
        {
          y: 3,
          label: "Screaming"
          }
        ]
      }]
  });

  chart5.render();
  
  var chart6 = new CanvasJS.Chart("chartContainer6", {
    animationEnabled: true,
    backgroundColor: "black",
    title: {
      text: "Word Frequency of Response to Dream",
      fontColor: "white"
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "white",
      startAngle: 270,
      yValueFormatString: "##0.00\"%\"",
      indexLabel: "{label} {y}",
      dataPoints: [
        {
          y: 15,
          label: "Anxious"
          },
        {
          y: 24,
          label: "Plane"
          },
        {
          y: 12,
          label: "Confused"
          },
        {
          y: 9,
          label: "Excited"
          },
        {
          y: 9,
          label: "Happy"
          },
        {
          y: 9,
          label: "Nervous"
          },
        {
          y: 6,
          label: "Calm"
          },
        {
          y: 4,
          label: "Empowered"
          },
        {
          y: 6,
          label: "Fear"
          },
        {
          y: 6,
          label: "Awesome"
          },
        ]
      }]
  });

  chart6.render();
}
