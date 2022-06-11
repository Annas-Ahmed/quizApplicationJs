var quesArr = [
  {
    num: 1,
    question: "HTML stand for.....?",
    options: {
      a: "Hyper text markup Language",
      b: "Hyper text programming Language",
      c: "Hyper text styling Language",
      d: "Hyper text scripting Language",
    },
    correctAns: "Hyper text markup Language",
  },
  {
    num: 2,
    question: "Which type of JavaScript Languages is",
    options: {
      a: "Object-Oriented ",
      b: "Object-Base",
      c: "Assembly Languages",
      d: "high Level",
    },
    correctAns: "Object-Base",
  },
  {
    num: 3,
    question: "The 'function' and  'var' are known as:",
    options: {
      a: "Keywords",
      b: "Data types",
      c: "Declaration statements",
      d: "Prototypes",
    },
    correctAns: "Declaration statements",
  },
  {
    num: 4,
    question: "who is the present president of pakistan",
    options: {
      a: "Arif Alvi",
      b: "Imran Khan",
      c: "Nawaz Sharif",
      d: "Zardari",
    },
    correctAns: "Arif Alvi",
  },
  {
    num: 5,
    question: "How many prayers in a day:",
    options: {
      a: "6",
      b: "5",
      c: "3",
      d: "none",
    },
    correctAns: "5",
  },
];

var count = 0
var question = document.getElementById("question")
var option = document.getElementById("options")
var finalBox = document.getElementById('finalBox')
var main2Box = document.getElementById('main2Box')
var inputName = document.getElementById('inputName')
var trigger = 0
var score = 0

function nextQuestion() {
  if (count < quesArr.length) {
    main2Box.style.display = 'block'
    initialForm.style.display = 'none'
    question.innerHTML = `${quesArr[count].num}.  ${quesArr[count].question}`
    option.children[0].innerHTML = quesArr[count].options.a
    option.children[1].innerHTML = quesArr[count].options.b
    option.children[2].innerHTML = quesArr[count].options.c
    option.children[3].innerHTML = quesArr[count].options.d
    if (count == quesArr.length - 1) {
      main2Box.parentNode.children[4].innerHTML = "submit"
    }
    for (var i = 0; i < option.children.length; i++) {
      option.children[i].style.backgroundColor = 'rgb(242, 242, 242)'
    }
  }

  else if (count == quesArr.length) {
    finalBox.style.display = 'block'
    main2Box.style.display = 'none'
    main2Box.parentNode.children[4].style.display = 'none'
    finalBox.children[1].children[0].innerHTML = inputName.value
    finalBox.children[2].children[0].innerHTML = score
    console.log(finalBox.children[1].children[0].innerHTML)

  }

  // else if(count==quesArr.length){
  // }

  count += 1
  trigger = 0

}


function checkAnswer(e) {
  if (count < quesArr.length + 1) {
    if (e.childNodes[0].nodeValue == quesArr[count - 1].correctAns) {
      if (trigger != 1) {
        e.style.backgroundColor = 'green'
        score += 10
        trigger = 1
      }
    }

    else {
      if (trigger != 1) {
        e.style.backgroundColor = 'red'
        trigger = 1
      }
    }
  }
}

// console.log(main2Box.parentNode.children[3].innerHTML)
// console.log(finalBox.children[1].children[0].innerHTML)

