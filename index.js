const personForm = document.querySelector('#personForm')

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

  document.style.color = color

}

personForm.addEventListener('submit', handleSubmit)
