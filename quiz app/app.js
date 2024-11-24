var userName = document.querySelector("#name");
var userEmail = document.querySelector("#email");
var userroll = document.querySelector("#rollno");
var userinis = document.querySelector("#institute");
var Score = 0
var rightQuestion = 0
var WrongQuetion = 0
var details = document.querySelector(".details");
var quiz_body = document.querySelector(".quiz-app");
var name_parent = document.querySelector(".name-parent").children;
console.log(name_parent);
var boxcontainer = document.querySelector(".box-container");
var result = document.querySelector(".result");
var percantagesShow = document.querySelector(".percantages");
var ScoreShow = document.getElementById("score");
var failsShow = document.querySelector(".failsShow");
var question_count = document.querySelector(".question-count");
var score = document.querySelector(".score");
var show_question = document.querySelector(".show-question");
var ProgressStart = 0;
var PrgressEndVal = 0;
var Speed = 50;
function GetValues() {
  var name = userName.value;
  var email = userEmail.value;
  var rollno = userroll.value;
  var institute = userinis.value;
  if(!name || !email || !rollno || !institute){
      alert("All fields are mandatory");
      return;
  }
  quiz_body.style.display = "block";
  details.style.display = "none";
  name_parent[0].innerHTML = "Name :" + " " + name;
  name_parent[1].innerHTML = "Email :" + " " + email;
  name_parent[2].innerHTML = "Roll No :" + " " + rollno;
  name_parent[3].innerHTML = "Institute :" + " " + institute;
  
}
// question abbout html css js

var questions = [
        



    {
        num: '1',
        question: 'javascript is a ??',
        options: {
          a: 'programming language',
          b: 'Assembly language',
          c: 'High level language',
          d: 'scripted language'
        },
        answer: 'scripted language'
      
      },

      {
        num: '2',
        question: 'css stand for?',
        options: {
          a: 'Cascading style sheet',
          b: 'cat style sheet',
          c: 'cute style sheet',
          d: 'copy style sheet'
        },
        answer:'Cascading style sheet'
      
      },
      
      {
        num: '3',
        question: 'HTML stand for?',
        options: {
          a: 'High text markup language',
          b: 'hyper truma mental language',
          c: 'Hyper text markup language',
          d: 'high text made language'
        },
        answer: 'Hyper text markup language'
      
      }

      ,{
        num: '4',
        question: 'What will the following code return: Boolean(2 + 2 === 4)?',
        options: {
          a: 'true',
          b: 'false',
          c: 'undefined',
          d: 'NAN'
        },
        answer: 'true'
      
      }
      ,{
        num: '5',
        question: 'Which method is used to convert a JSON string into a JavaScript object?',
        options: {
          a: 'JSON.parse()',
          b: 'JSON.stringify()',
          c: 'JSON.convert()',
          d: 'JSON.object()'
        },
        answer: 'JSON.parse()'
      
      }

      ,{
        num: '6',
        question: 'How can you add a comment in JavaScript?',
        options: {
          a: '// This is a commen',
          b: '<!-- This is a comment -->',
          c: ' This is a comment',
          d: '# This is a comment'
        },
        answer: '// This is a comment'
      
      }

      ,{
        num: '7',
        question: 'What is the output of typeof NaN in JavaScript?',
        options: {
          a: 'number',
          b: 'NaN',
          c: ' undefined',
          d: 'object',
        },
        answer: 'number',
      
      }
      ,{
        num: '8',
        question: 'Which of the following is used to declare a variable in JavaScript?',
        options: {
          a: 'var',
          b: 'let',
          c: ' const',
          d: 'All of the above',
        },
        answer: 'All of the above',
      
      }

      ,{
        num: '9',
        question: 'What is the correct syntax to create a function in JavaScript?',
        options: {
          a: 'function myFunction()',
          b: 'function = myFunction()',
          c: ' function:myFunction()',
          d: 'myFunction() = function',
        },
        answer: 'function myFunction()',
    },
    {
        num: '10',
        question: 'Which of the following is not a JavaScript data type?',
        options: {
          a:'string',
          b: 'number',
          c: 'object',
          d: 'array',
        },
        answer: 'array',
    },

    {
        num: '11',
        question: 'Which of the following is a JavaScript operator used to concatenate two strings?',
        options: {
          a: '+',
          b: '-',
          c: '*',
          d: '%',
        },
        answer: '+',
    },

    {
        num: '12',
        question: 'Which of the following is not a JavaScript keyword?',
        options: {
          a: 'function',
          b: 'var',
          c: 'let',
          d: 'const',
        },
        answer: 'const',
    },

    {
        num: '13',
        question: 'Which of the following is a JavaScript statement used to declare a variable?',
        options: {
          a: 'var myVariable = "Hello"',
          b: 'let myVariable = "Hello"',
          c: 'const myVariable = "Hello"',
          d: 'var myVariable = "Hello ',
        },
        answer: 'var myVariable = "Hello"',
    },

    {
        num: '14',
        question: 'Which of the following is a JavaScript operator used to perform a bitwise AND operation?',
        options: {
          a: '&',
          b: '|',
          c: '^',
          d: '%',
        },
        answer: '&',
    },

    {
        num: '15',
        question: 'Which of the following is a JavaScript operator used to perform a bitwise OR operation?',
        options: {
          a: '&',
          b: '|',
          c: '^',
          d: '%',
        },
        answer: '|',
    },

    {
        num: '16',
        question: 'Which of the following is a JavaScript operator used to perform a bitwise XOR operation?',
        options: {
          a: '&',
          b: '|',
          c: '^',
          d: '%',
        },
        answer: '^',
    },

    {
        num: '17',
        question: 'Which of the following is a JavaScript operator used to perform a bitwise NOT operation?',
        options: {
          a: '&',
          b: '|',
          c: '^',
          d: '%',
        },
        answer: '~',
    },

    {
        num: '18',
        question: 'Which of the following is a JavaScript operator used to perform a bitwise left shift operation?',
        options: {
          a: '<<',
          b: '>>',
          c: '**',
          d: '%',
        },
        answer: '<<',
    },

    {
        num: '19',
        question: 'Which of the following is a JavaScript operator used to perform a bitwise right shift operation?',
        options: {
          a: '<<',
          b: '>>',
          c: '**',
          d: '%',
        },
        answer: '>>',
    },

    {
        num: '20',
        question: 'css stand for?',
        options: {
          a: 'Cascading style sheet',
          b: 'cat style sheet',
          c: 'cute style sheet',
          d: 'copy style sheet'
        },
        answer:'Cascading style sheet'
      
      },
];

var question_div = document.querySelectorAll(".options")
var question = document.querySelector(".question")
console.log(option1, option2, option3, option4);

var QuestionCount = 0
function GetQuestion() {
        question.innerHTML = questions[QuestionCount].question
        question_div[0].innerHTML = questions[QuestionCount].options.a
        question_div[1].innerHTML = questions[QuestionCount].options.b
        question_div[2].innerHTML = questions[QuestionCount].options.c
        question_div[3].innerHTML = questions[QuestionCount].options.d  
}
GetQuestion()

function CheckAnswer(ele){
    console.log(ele);
    if(ele.innerHTML == questions[QuestionCount].answer){
        Score++
        rightQuestion++
        ele.classList.add("bg-green-300","border-green-500","text-white")
        for(var listOption of question_div){
            listOption.classList.add("pointer-events-none")
        }
    }else{
        WrongQuetion++
        ele.classList.add("bg-red-300","border-red-500","text-white")
        for(var listOption of question_div){
            listOption.classList.add("pointer-events-none")
            if(listOption.innerHTML == questions[QuestionCount].answer){
                listOption.classList.add("bg-green-300","border-green-500","text-white")
            }
        }
    }
}

function NextQuestion(){
    if(QuestionCount < questions.length -1){
        QuestionCount++
        question.innerHTML = questions[QuestionCount].question
        question_div[0].innerHTML = questions[QuestionCount].options.a
        question_div[1].innerHTML = questions[QuestionCount].options.b
        question_div[2].innerHTML = questions[QuestionCount].options.c
        question_div[3].innerHTML = questions[QuestionCount].options.d
        for(var listOption of question_div){
            listOption.classList.remove("pointer-events-none", "bg-green-300","border-green-500","text-white",
                "bg-red-300","border-red-500","text-white"
            )
        }
    }else{
        var QuestionLength = questions.length;
        var Percantages = (Score / QuestionLength) * 100;
    
        if (Percantages < 50) {
          failsShow.innerHTML = "You Failed";
        } else {
          failsShow.innerHTML = "Congratulations You Passed";
        }
    
        result.classList.remove("hidden");
        quiz_body.style.display = "none";
        var StartProgress = setInterval(() => {
          ProgressStart++;
          percantagesShow.innerHTML = `${ProgressStart}%`;
          ScoreShow.innerHTML = `${Score}`;
          show_question.innerHTML = `Total Questions : ${questions.length}`;
          boxcontainer.style.background = `conic-gradient(#2664EB ${
            ProgressStart * 3.6
          }deg, #ededed 0deg)`;
          if (ProgressStart >= Percantages) {
            clearInterval(StartProgress);
          }
        }, Speed);
       
    }
}
function RestartQuiz(){
    window.location.reload();
}