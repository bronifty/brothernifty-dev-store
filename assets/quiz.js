const finish_btn = document.getElementById("finish-button");

const quiz_form = document.querySelector("#quizForm");
const answers = {};

quiz_form.addEventListener("change", updateAnswers);
function updateAnswers(event) {
  //code to store answers



  console.log("answers: ", answers);
}


finish_btn.addEventListener("click", function () {
  if (answers.product_type && answers.bike_type && answers.color) {
    alert("Here are your answers: " + JSON.stringify(answers));
  } else {
    alert("Please answer all the questions!");
  }
});
