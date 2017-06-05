const personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  // Can select specific input from form like a property
  // Value gets the input value as opposed to the HTML element
  const name = f.personName.value
  const age = f.personAge.value

  const title = name + ", " + age

  document.querySelector('h1').textContent = title
}

personForm.addEventListener('submit', handleSubmit)
