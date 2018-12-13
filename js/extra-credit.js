/*
 * SOLUTION. Mario.
 */

function mario() { //Defines function mario
  let height = -1; //Sets variable height equal to -1

  while (height < 1 || height > 23) { //Runs followring code while height is less than 1 or greater than 23
    height = prompt("Height: "); //Prompts the user to input a height

    if (height === null) { //Runs following code if height is equal to null
      break; //Stops code
    } else if (Number.isNaN(height)) { //Runs code if height is not a number
      height = -1; //Sets height = -1
    } else if (!Number.isInteger(height)) { //Runs code if the number is not an integer
      height = -1; //Sets height = -1
    }
  }

  if (height !== null) { //Runs following code if height is not equal to null
    let output = "<code>"; //Adds the HTML tag code to the variable output
    let space = "&nbsp;"; //Sets the variable space equal to a space
    let block = "#"; //Sets var bloock equal to #

    for (let i = 0; i < height; i++) { //Runs the following code while i is less than height, increses i by 1 each time
      for (let j = 0; j < height - (i + 1); j++) { //Runs the following code while j is less than height - (i + 1), increses j by 1 each time
        output = output + space; //Adds a space to the existing value of output
      }
      for (let k = 0; k < i + 2; k++) { //Runs following code while k is less than (i + 2), increases k by 1 each time
        output = output + block; //Adds a # to the existing value of output
      }
      output = output + "<br>"; //Adds a line break to existing output
    }
    output = output + "</code>"; //Adds a closing code tag to output

    document.getElementById("mario-easy-output").innerHTML = output; //Finds elements with given id and sets the inner text to the value of output
  } else { //Runs code if original if statement was false
    document.getElementById("mario-easy-output").innerHTML = ""; //Finds elements with id and sets inner value to nothing
  }

  check("mario", height);
}

/*
 * SOLUTION. Mario, Again.
 */

function marioAgain() { //Defines function marioAgain
  let height = -1; //Sets height to -1

  while (!Number.isInteger(height) || (height < 1 || height > 23)) { //Runs code while height is not an integer, less than 1, or greater than 23
    height = prompt("Height: "); //Prompts user for height

    if (height === null) { //Runs following code if height is equal to null
      break; //Stops code
    } else { //Runs code if height is not equal to null
      height = Number(height); //Changes height into a number
    }
  }

  if (height !== null) { //Runs if height does not equal null
    let output = "<code>"; //Adds code tag to output
    let space = "&nbsp;"; //Sets space equal to a space
    let block = "#"; //Sets block equal to a #

    for (let i = 0; i < height; i++) { //Runs code while variable i is less than height, adds 1 to i each time
      for (let j = 0; j < height - (i + 1); j++) { //Runs while j is less than height - (i+1), adds 1 to j each time
        output = output + space; //Adds space to output
      }
      for (let k = 0; k < i + 2; k++) { //Runs code while k is less than (i+2), adds 1 to k each time
        output = output + block; //Adds block(#) to output 
      }
      output = output + space + space; //Adds 2 spaces to output

      for (let l = 0; l < i + 2; l++) { //Runs while l is less than (i+2), adds 1 to l each time
        output = output + block; //Adds block to output
      }
      output = output + "<br>"; //Adds a line break to output
    }
    output = output + "</code>"; //Adds a closing code tag to output

    document.getElementById("mario-hard-output").innerHTML = output; //Finds elements with the same id and changes the innerHTML to output
  } else { //Runs if original if statement is false
    document.getElementById("mario-hard-output").innerHTML = ""; //Finds elements with same id and change the innerHTML to nothing
  }

  check("mario-again", height);
}

/*
 * SOLUTION. Credit.
 */

function credit() { //Defines function credit
  let card = "invalid"; //Sets variable card equal to the string "invalid"

  while (!Number.isInteger(card)) { //Runs code while card is not a number
    card = prompt("Card Number: "); //Prompts user for a card number

    if (card === null) { //Runs following code if card is equal to null
      break; //Stops code
    } else { //Runs code if card is not null
      card = Number(card); //Changes card to a number
    }
  }

  let prev; //Defines variable prev
  if (card !== null) { //Runs following code if card does not equal null
    let number = card; //Sets variable number equal to card
    let sumMultDigits = 0; //Sets sumMultDigits equal to 0
    let sumNonMultDigits = 0; //Sets sumnonMultDigits equal to 0
    let numDigits = 0; //Sets numDigits equal to 0
    let current = -1; //Sets current equal to -1
    let previous = -1; //Sets previous equal to -1
    let multiply = false; //Sets multiply equal to false

    while (number > 0) { //Runs code while number is less than 0
      digit = number % 10; //Sets digit equal the remainder of number divided by 10
      numDigits++; //Adds one to numDigits

      let tmp = current; //Sets variable tmp equal to current
      current = digit; //Sets current equal to digit
      previous = tmp; //Sets previous equal to tmp

      if (multiply) { //Runs code if multiply is true(is originall set to false)
        var product = digit * 2; //Sets variable product equal to digit * 2
        var sum = 0; //Sets variable sum = 0

        while (product > 0) { //Runs code while product is greater than 0
          let temp = product % 10; //Sets let temp equal to the remainder of product divided by 10
          sum = sum + temp; //Adds temp to the previous value of sum
          product = Math.floor(product / 10); //Sets product equal to product / 10 rounded down
        }

        sumMultDigits = sumMultDigits + sum; //Adds sum to sumMult Digits
      } else { //Runs code if original if statement was flase
        sumNonMultDigits = sumNonMultDigits + digit; //Adds digit to sumNonMultDigits
      }

      multiply = !multiply; //Flips the value of multiply from true to false or false to true
      number = Math.floor(number / 10); //Sets number to itself divided by 10 rounded down
    }

    let checksum = ((sumNonMultDigits + sumMultDigits) % 10); //Sets variable checksum equal to the remainder of the sum of sumMultDigits and sumNonMultDigits
    if (checksum === 0) { //Runs following code if checksum is equal to 0 and is a number
      if (current === 4) { //Runs following code if current is equal to 4 and is a number
        if (numDigits === 13 || numDigits === 16) { //Runs code if numDigits is equal to 13 or 16, and has the same type
          prev = document.getElementById("cc"); //Sets prev equal to any elements with id cc
          if (prev) { //Runs code if prev is true
            prev.parentNode.removeChild(prev); //Removes all previous content from the element
          }

          let visa = document.createElement("img"); //Sets variable cisa equal to the created element img
          visa.setAttribute("id", "cc"); //Sets attributes of visa - id="cc"
          visa.setAttribute("src", "images/visa.png"); //Sets attributes of visa - src="images/visa.png"
          visa.setAttribute("width", "25%"); //Sets attributes of visa - width="25%"
          document.getElementById("credit-output").innerHTML = ""; //Finds elements with id credit-output and sets the inner HTML to nothing
          document.getElementById("credit-output").appendChild(visa); //Finds elements with id credit-output and sets innerHTML to the child of visa
        }
      } else if (current === 3 && (previous === 4 || previous === 7)) { //Runs code if current is equal to 3 and previous is equal to 4 or 7
        if (numDigits === 15) { //Runs if numDigits is equal to 15
          prev = document.getElementById("cc"); //Sets prev to elements with id cc
          if (prev) { //Runs code if prev is true
            prev.parentNode.removeChild(prev); //Removes any previous content from the element
          }

          let amex = document.createElement("img"); //Sets amex equal to the created element img
          amex.setAttribute("id", "cc"); //Sets id to cc
          amex.setAttribute("src", "images/amex.png"); //Sets src to images/amex.png
          amex.setAttribute("width", "25%"); //Sets width to 25%
          document.getElementById("credit-output").innerHTML = ""; //Finds element with same id and sets inner HTML to nothing
          document.getElementById("credit-output").appendChild(amex); //Finds element with same id and sets inner HTML to the child of amex
        }
      } else if (current === 5 && previous > 0 && previous < 6) { //Runs code if current is equal to 5 and previous is greater than 0 and previous is greater than 6
        if (numDigits === 16) { //Runs code if numDigits is equal to 16
          prev = document.getElementById("cc"); //Sets prev equal to element with id cc
          if (prev) { //Runs code if prev is true
            prev.parentNode.removeChild(prev); //Removes any previous content from the element
          }

          var mc = document.createElement("img"); //Sets mc equal to created element img
          mc.setAttribute("id", "cc"); //Adds id of cc
          mc.setAttribute("src", "images/mastercard.png"); //Adds src of images/mastercard.png
          mc.setAttribute("width", "25%"); //Adds width of 25%
          document.getElementById("credit-output").innerHTML = ""; //Finds element with same id and sets inner HTML to nothing
          document.getElementById("credit-output").appendChild(mc); //Finds element wiht same id and sets inner HTML to child of mc
        }
      }
    } else { //Runs code if no other if statments were true
      document.getElementById("credit-output").innerHTML = "Invalid."; //Finds element with id credit-output and sets it to "Invalid"
    }
  } else { //Runs if no other previous if statments
    prev = document.getElementById("cc"); //Sets prev to element with if cc
    if (prev) { //Runs if prev is true(or truthy)
      prev.parentNode.removeChild(prev); //Removes any previous content of the element.
    }
    document.getElementById("credit-output").innerHTML = ""; //Finds element with same if and sets inner HTML to nothing
  }

  check("credit", card);
}

/*
 * SOLUTION. Guess.
 */

function guess() {
  let target = Number((Math.random() * 1001).toFixed(0));
  let guess = -1;
  let attempts = 0;

  while (guess !== target) {
    guess = Number(prompt("Guess: "));

    if (guess === null) {
      break;
    } else if (Number.isNan(guess)) {
      guess = -1;
    } else if (!Number.isInteger(guess)) {
      guess = -1;
    }

    if (guess > 0 && guess < 1001) {
      attempts++;

      if (guess < target) {
        alert("Try something a little larger...");
      } else if (guess > target) {
        alert("Try something a little smaller...");
      }
    }
  }

  if (guess !== null) {
    document.getElementById("guess-output").innerHTML = "Random Number: " + target + "<br>Attempts: " + attempts;
  } else {
    document.getElementById("guess-output").innerHTML = "";
  }

  check("guess");
}

/*
 * SOLUTION. Hurricane.
 */

function hurricane() {
  const CAT5 = 156;
  const CAT4 = 129;
  const CAT3 = 110;
  const CAT2 = 95;
  const CAT1 = 73;
  const TROP = 38;

  let windspeed = -1;
  while (windspeed < 0) {
    windspeed = Number(prompt("Windspeed: "));

    if (windspeed === null) {
      break;
    } else if (Number.isNaN(windspeed)) {
      windspeed = -1;
    } else if (!Number.isInteger(windspeed)) {
      windspeed = -1;
    }
  }

  if (windspeed !== null) {
    if (windspeed > CAT5) {
      document.getElementById("hurricane-output").innerHTML = "Category 5 Hurricane.";
    } else if (windspeed > CAT4) {
      document.getElementById("hurricane-output").innerHTML = "Category 4 Hurricane.";
    } else if (windspeed > CAT3) {
      document.getElementById("hurricane-output").innerHTML = "Category 3 Hurricane.";
    } else if (windspeed > CAT2) {
      document.getElementById("hurricane-output").innerHTML = "Category 2 Hurricane.";
    } else if (windspeed > CAT1) {
      document.getElementById("hurricane-output").innerHTML = "Category 1 Hurricane.";
    } else if (windspeed > TROP) {
      document.getElementById("hurricane-output").innerHTML = "Tropical Storm.";
    } else {
      document.getElementById("hurricane-output").innerHTML = "The skies are calm...";
    }
  } else {
    document.getElementById("hurricane-output").innerHTML = "";
  }

  check("hurricane", windspeed);
}

/*
 * SOLUTION. Gymnastics.
 */

function gymnastics() {
  let total = 0;
  let scores = [];
  let valid = 0;
  let max = -1;
  let min = 11;
  let score = -1;

  while (valid < 6) {
    score = Number(prompt("Score: "));

    if (score === null) {
      break;
    } else if (Number.isNaN(score)) {
      score = -1;
    }

    if (score >= 0 && score <= 10) {
      valid++;
      scores.push(score);

      if (score < min) {
        min = score;
      }
      if (score > max) {
        max = score;
      }
      total = total + score;
    }
  }

  if (score !== null) {
    let sum = total;
    sum = sum - min - max;
    let average = (sum / 4.0).toFixed(2);

    let result = `Discarded: ${min}, ${max}<br>Score: ${average}`;
    document.getElementById("gymnastics-output").innerHTML = result;
  } else {
    scores = null;
    document.getElementById("gymnastics-output").innerHTML = "";
  }

  check("gymnastics", scores);
}

/*
 * SOLUTION. Report Card.
 */

function reportCard() {
  let testTotal = 0;
  let quizTotal = 0;
  let homeworkTotal = 0;
  let tests = 0;
  let quizzes = 0;
  let homeworks = 0;

  let testScore = -2;
  while (testScore !== -1) {
    testScore = Number(prompt("Test: "));

    if (testScore === null) {
      break;
    } else if (Number.isNaN(testScore)) {
      testScore = -2;
    } else if (testScore === -1) {
       break;
    } else if (testScore >= 0 && testScore <= 100) {
      tests++;
      testTotal = testTotal + testScore;
    }
  }

  let quizScore = -2;
  while (quizScore !== -1) {
    quizScore = Number(prompt("Quiz: "));

    if (quizScore === null) {
      break;
    } else if (Number.isNaN(quizScore)) {
      quizScore = -2;
    } else if (quizScore === -1) {
       break;
    } else if (quizScore >= 0 && quizScore <= 100) {
      quizzes++;
      quizTotal = quizTotal + quizScore;
    }
  }

  let homeworkScore = -2;
  while (homeworkScore !== -1) {
    homeworkScore = Number(prompt("Homework: "));

    if (homeworkScore === null) {
      break;
    } else if (Number.isNaN(homeworkScore)) {
      homeworkScore = -2;
    } else if (homeworkScore === -1) {
       break;
    } else if (homeworkScore >= 0 && homeworkScore <= 100) {
      homeworks++;
      homeworkTotal = homeworkTotal + homeworkScore;
    }
  }

  let testAverage = null;
  let quizAverage = null;
  let homeworkAverage = null;
  let average = null;

  if (testScore === null || quizScore === null || homeworkScore === null) {
    document.getElementById("report-card-output").innerHTML = "";
  } else {
    testAverage = (testTotal / tests).toFixed(2);
    quizAverage = (quizTotal / quizzes).toFixed(2);
    homeworkAverage = (homeworkTotal / homeworks).toFixed(2);
    average = (testAverage * 0.6 + quizAverage * 0.3 + homeworkAverage * 0.1).toFixed(2);

    let result = `Tests: ${testAverage}<br>Quizzes: ${quizAverage}<br>Homework: ${homeworkAverage}<br>Grade: ${average}`;
    document.getElementById("report-card-output").innerHTML = result;
  }

  check("report-card", testTotal, tests, quizTotal, quizzes, homeworkTotal, homeworks);
}
