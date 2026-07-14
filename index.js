function getGrade() {
  let m1 = parseInt(document.querySelector("#mark1").value);
  let m2 = parseInt(document.querySelector("#mark2").value);
  let m3 = parseInt(document.querySelector("#mark3").value);
  let m4 = parseInt(document.querySelector("#mark4").value);
  let m5 = parseInt(document.querySelector("#mark5").value);

  let total = m1 + m2 + m3 + m4 + m5;
  let average = total / 5;

  let grade = CalculateGrade(average);

  document.querySelector(".total").innerHTML = "Your Total is " + total;
  document.querySelector(".grade").innerHTML = "Your Grade is " + grade;
}

function CalculateGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 75 && average <= 89) {
    return "B";
  } else if (average >= 60 && average <= 74) {
    return "C";
  } else if (average >= 40 && average <= 59) {
    return "D";
  } else {
    return "FAIL";
  }
}
function validateMark1() {
  let mark = document.getElementById("mark1").value;

  if (mark == "" || mark < 0 || mark > 100) {
    document.getElementById("error1").innerHTML =
      "Enter marks between 0 and 100";
  } else {
    document.getElementById("error1").innerHTML = "";
  }
}

function validateMark2() {
  let mark = document.getElementById("mark2").value;

  if (mark == "" || mark < 0 || mark > 100) {
    document.getElementById("error2").innerHTML =
      "Enter marks between 0 and 100";
  } else {
    document.getElementById("error2").innerHTML = "";
  }
}

function validateMark3() {
  let mark = document.getElementById("mark3").value;

  if (mark == "" || mark < 0 || mark > 100) {
    document.getElementById("error3").innerHTML =
      "Enter marks between 0 and 100";
  } else {
    document.getElementById("error3").innerHTML = "";
  }
}

function validateMark4() {
  let mark = document.getElementById("mark4").value;

  if (mark == "" || mark < 0 || mark > 100) {
    document.getElementById("error4").innerHTML =
      "Enter marks between 0 and 100";
  } else {
    document.getElementById("error4").innerHTML = "";
  }
}

function validateMark5() {
  let mark = document.getElementById("mark5").value;

  if (mark == "" || mark < 0 || mark > 100) {
    document.getElementById("error5").innerHTML =
      "Enter marks between 0 and 100";
  } else {
    document.getElementById("error5").innerHTML = "";
  }
}