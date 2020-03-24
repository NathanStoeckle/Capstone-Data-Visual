// Actual angles for bar graphs we need
let yesNo = [165.4, 194.6]; // No and Yes in that order
let goodBadNet = [117.56, 213.66, 28.78]; // Scaled from 12, 21, and 3
let correlate = [36.75, 73.5, 51.4, 36.75, 95.5, 66.1]; /* Flying, Running/Chasing, Water, Falling, Nightmare, Other */
let mainMood = [65.44, 98.18, 16.36, 16.36, 49.1, 32.74, 49.1, 16.36, 16.36];

// TO BE UPDATED
let wordFreqB = [87.12, 27.69, 23.76, 23.76, 27.69, 23.76, 19.7, 19.7, 15.84, 15.84, 15.84, 15.84, 19.7, 11.88, 11.88];
/* Column B Stats (Scaled by 3.96): Run - 22, Plane - 7, Police - 6, School - 6, Shot/Shoot - 7, Chased/Chasing - 6, Feeling - 5, Sky - 5, Swim/Swimming - 4, Ice - 4, Jump - 4, Watching - 4, Die/Died - 5, Dark - 3, Screaming - 3 */
let wordFreqC = [54.55, 87.28, 43.61, 32.73, 32.73, 32.73, 21.82, 10.91, 21.82, 21.82];
/* Column C Stats (Scaled by 10.91):  Anxious - 5, Scared - 8, Confused - 4, Excited - 3, Happy - 3, Nervous - 3, Calm - 2, Empowered - 1, Fear/Terrified - 2, Awesome - 2*/

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop(); // Runs only once
}

function draw() {
  background(100);
  pieChart(300, wordFreqB)
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for(let i = 0; i < data.length; i++) {
    let grey = map(i, 0, data.length, 0, 255);
    
    // Water - blue
    // Falling - Purple
    // Running - Red
    // Flying - yellow
    // Nightmare - green
    //let red = color(255, 0, 0);
    //let blue = color(0, 0, i * 50);
    //let green = color(0, i * 120, 0);
    //let yellow = color(255, 255, 0);
    //let purple = color(106, 13, 173);
    
    /*
    switch (i) {
      case 0:
        fill(red);
        break;
      case 1:
        fill(green);
        break;
      case 2:
        fill(yellow);
        break;
      case 3:
        fill(purple);
        break;
      default:
        fill(blue);
        break;
    }
    */
    
    fill(grey);
    
    if(data == yesNo) {
      arc(
        width / 2,
        height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + radians(yesNo[i])
      );
      lastAngle += radians(yesNo[i]);
    }
    
    if(data == goodBadNet) {
      arc(
        width / 2,
        height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + radians(goodBadNet[i])
      );
      lastAngle += radians(goodBadNet[i]);
    }
    
    if(data == wordFreqB) {
      arc(
        width / 2,
        height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + radians(wordFreqB[i])
      );
      lastAngle += radians(wordFreqB[i]);
    }
    
    if(data == mainMood) {
      arc(
        width / 2,
        height / 2,
        diameter,
        diameter,
        lastAngle,
        lastAngle + radians(mainMood[i])
      );
      lastAngle += radians(mainMood[i]);
    }
  }
}