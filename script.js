var nextBtn = document.querySelector('.next'),
prevBtn = document.querySelector('.prev'),
carousel = document.querySelector('.carousel'),
list = document.querySelector('.list'), 
item = document.querySelectorAll('.item'),
runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 7000

nextBtn.onclick = function(){
showSlider('next')
}

prevBtn.onclick = function(){
showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
nextBtn.click()
}, timeAutoNext)


function resetTimeAnimation() {
runningTime.style.animation = 'none'
runningTime.offsetHeight /* trigger reflow */
runningTime.style.animation = null 
runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}


function showSlider(type) {
let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
if(type === 'next'){
    list.appendChild(sliderItemsDom[0])
    carousel.classList.add('next')
} else{
    list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
    carousel.classList.add('prev')
}

clearTimeout(runTimeOut)

runTimeOut = setTimeout( () => {
    carousel.classList.remove('next')
    carousel.classList.remove('prev')
}, timeRunning)


clearTimeout(runNextAuto)
runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)

resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
resetTimeAnimation()


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  function redirectToTimeline() {
    window.location.href = 'explore_timeline.html';
}
let quizData = [
    {
      question: "What is the capital of Japan?",
      options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
      correct: "Tokyo",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correct: "Mars",
    },
    {
      question: "Which famous scientist developed the theory of general relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
      correct: "Albert Einstein",
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct: "Blue Whale",
    },
    {
      question: "Which famous artist painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correct: "Leonardo da Vinci",
    },
  ];
  
  const quizContainer = document.querySelector(".quiz-container");
  const question = document.querySelector(".quiz-container .question");
  const options = document.querySelector(".quiz-container .options");
  const startBtnContainer = document.querySelector(".start-btn-container");
  const startBtn = document.querySelector(".start-btn");
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 10;
  let timer;
  
  startBtn.addEventListener("click", () => {
    startBtnContainer.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
    startTimer();
  });
  
  function loadQuestion() {
    if (currentQuestion >= quizData.length) {
      showResult();
      return;
    }
    question.textContent = quizData[currentQuestion].question;
    options.innerHTML = "";
    quizData[currentQuestion].options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = option;
      options.appendChild(button);
  
      button.addEventListener("click", (e) => {
        if (button.textContent === quizData[currentQuestion].correct) {
          button.classList.add("correct");
          score++;
        } else {
          button.classList.add("incorrect");
          const correctBtn = Array.from(options.children).find(
            (btn) => btn.textContent === quizData[currentQuestion].correct
          );
          correctBtn.classList.add("correct");
        }
  
        Array.from(options.children).forEach((btn) => btn.classList.add("disabled"));
      });
    });
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    loadQuestion();
    resetTimer();
  });
  
  function showResult() {
    quizContainer.style.display = "none";
    document.querySelector(".quiz-result").style.display = "flex";
    // Logic to display results
  }
  
  function startTimer() {
    timer = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
      } else {
        document.querySelector(".timer").textContent = `Time left: ${timeLeft--} seconds`;
      }
    }, 1000);
  }
  
  function resetTimer() {
    timeLeft = 10;
    clearInterval(timer);
    startTimer();
  }
  

  ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 100,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 150,
  });
  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 250,
  });
  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 300,
  });
  ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 500,
  });
  ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 550,
  });
  ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 700,
  });

