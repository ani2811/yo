
let questions = [
  {
    id: 1,
    question: "Artificial Intelligence is about _____.",
    answer: "Making a machine Intelligent",
    options: [
      "Playing a game on Computer",
      "Making a machine Intelligent",
      "Programming on Machine with your Own Intelligence",
      "Putting your intelligence in Machine"
    ]
  },
  {
    id: 2,
    question: "Who is known as the -Father of AI?",
    answer: "John McCarthy",
    options: [
      "Fisher Ada",
      "Alan Turing",
      "John McCarthy",
      "Allen Newell"
    ]
  },
  {
    id: 3,
    question: "Find th odd one out.",
    answer: "Smart Cleaning Robot",
    options: [
      "Amphibious vehicle",
      "Quadcopter",
      "Smart Cleaning Robot",
      "Robo Soccer"
    ]
  },
  {
    id: 4,
    question: "What is Cyborg?",
    answer: "All of these",
    options: [
      "A Bionic human",
      "Justice league member",
      "SAC technical club",
      "All of these"
    ]
  },
  {
    id: 5,
    question: "Which is not a subsystem of cyborg club?",
    answer: "None of these",
    options: [
      "Automation",
      "Web",
      "Electronics",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
 
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
