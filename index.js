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

function checkSchool(ev) {
  ev.preventDefault()
  const select = document.getElementById("#school")
  const answer = select.options[select.selectedIndex].value

  document.getElementById("#personInfo").textContent = answer

  const image = document.getElementById(".schoolLogo")

  switch(answer) {
    case "Purdue":
      image.src = "logos/purdue.png"
      break;
    case "IUPUI":
      image.src = "logos/iupui.png"
      break;
    case "Saint Mary's":
      image.src = "logos/saintmarys.png"
      break;
    case "Earlham":
      image.src = "logos/earlham.jpg"
      break;
    case "Hanover":
      image.src = "logos/hanover.png"
      break;
    case "IU":
      image.src = "logos/iu.png"
      break;
    case "Butler":
      image.src = "logos/butler.jpg"
      break;
    case "Ball State":
      image.src = "logos/ballstate.png"
      break;
    case "Rose Hulman":
      image.src = "logos/rosehulman.png"
      break;
    case "Wabash":
      image.src = "logos/wabash.png"
      break;
    case "Franklin":
      image.src = "logos/franklin.jpg"
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
