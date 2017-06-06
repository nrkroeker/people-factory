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
  const school = document.querySelector('.school').value

  switch(school) {
    case
  }

}

personForm.addEventListener('submit', handleSubmit)
italicsButton.addEventListener('click', onItalics)
boldButton.addEventListener('click', onBold)
underlineButton.addEventListener('click', onUnderline)
