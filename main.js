// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const palette = document.querySelector('#palette')
const currentColor = document.querySelector('#current-color')
const colors = document.querySelectorAll('.color')
const cells = document.querySelectorAll('.cell')

// Seleccionar color
colors.forEach(colorElement => {
  // addEventListener(eventType, executionFunc)
  colorElement.addEventListener('click', () => {

    // Color seleccionado
    const colorValue = colorElement.style.background

    // Seleccionando el color y dandole el background color al elemento #currentColor
    currentColor.style.background = colorValue
  })
})

// Aplicar color en lienzo
//cells = [cell1 ...... cell100 ]
cells.forEach(cellElement => {
  cellElement.addEventListener('click', () => {
    const currentColorValue = currentColor.style.background

    cellElement.style.background = currentColorValue
  })
})

// lets work with this feature:

// - [ ] Create a button that, when clicked, resets all cells so that they all have a background of white.

// Creamos un nuevo elemento de tipo button
const resetButton = document.createElement('button')

// Le agregamos un texto
resetButton.innerText = 'Reset canvas'
// Agregamos el event listener para que el boton REACCIONE ante el click del usuario

// ELEMENT_REF.addEventListener(EVENT_TYPE, action) ===> EVENT LISTENER SYNTAX
// MOUSEOVER

resetButton.addEventListener('click', () => {
  cells.forEach(cell => {
    cell.style.background = 'white'
  })
})

palette.appendChild(resetButton)




