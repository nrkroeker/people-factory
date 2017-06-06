const personForm = document.querySelector('#personForm')
const italicsButton = document.querySelector('#italics')
const boldButton = document.querySelector('#bold')
const underlineButton = document.querySelector('#underline')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  // Can select specific input from form like a property
  // Value gets the input value as opposed to the HTML element
  const name = f.personName.value
  const age = f.personAge.value
  const title = name + ', ' + age
  const color = f.textColor.value

  document.querySelector('h1').textContent = title

  document.querySelector('#personInfo').textContent = name + ' is ' + age + ' years old. Her favorite color is ' + color + '!'

  document.querySelector('#personInfo').style.color = color

  checkSchool()
}

function onItalics(ev) {
  ev.preventDefault()
  document.querySelector('#personInfo').style.fontStyle = "italic"
}

function onBold(ev) {
  ev.preventDefault()
  document.querySelector('#personInfo').style.fontWeight = "bold"
}

function onUnderline(ev) {
  ev.preventDefault()
  document.querySelector('#personInfo').style.textDecoration = "underline"
}

function checkSchool() {
  const select = document.querySelector("select")
  const answer = select.options[select.selectedIndex].value

  const image = document.querySelector(".schoolLogo")

  switch(answer) {
    case '1':
      image.src = "./logos/purdue.png"
      break;
    case '2':
      image.src = "./logos/iupui.png"
      break;
    case '3':
      image.src = "./logos/saintmarys.png"
      break;
    case '4':
      image.src = "./logos/earlham.jpg"
      break;
    case '5':
      image.src = "./logos/hanover.png"
      break;
    case '6':
      image.src = "./logos/iu.png"
      break;
    case '7':
      image.src = "./logos/butler.jpg"
      break;
    case '8':
      image.src = "./logos/ballstate.png"
      break;
    case '9':
      image.src = "./logos/rosehulman.png"
      break;
    case '10':
      image.src = "./logos/wabash.png"
      break;
    case '11':
      image.src = "./logos/franklin.jpg"
      break;
    default:
      console.log("what.")
    break;
  }

}

personForm.addEventListener('submit', handleSubmit)
italicsButton.addEventListener('click', onItalics)
boldButton.addEventListener('click', onBold)
underlineButton.addEventListener('click', onUnderline)
