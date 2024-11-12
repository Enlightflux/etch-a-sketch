const drawBoxes = document.querySelector('.drawBoxes');

function changeGridSize() {
  const totalGridSize = prompt('Select grid size (range 1-99)');
  // const totalGridSize = 16;

  drawBoxes.textContent = '';

  //
  if (totalGridSize < 1 || totalGridSize > 100) {
    alert("heyy you cookie monster! Please don't break my site");
    return;
  }

  //
  for (let i = 0; i < totalGridSize * totalGridSize; i++) {
    const itemSize = 700 / totalGridSize;
    const pixel = document.createElement('div');
    pixel.style.flexBasis = `${itemSize}px`;
    pixel.style.height = `${itemSize}px`;
    drawBoxes.appendChild(pixel);
  }
  const drawingPixel = document.querySelectorAll('.drawBoxes div');

  //
  drawingPixel.forEach((individualPixel) => {
    individualPixel.addEventListener('mouseover', mouseRanOverBro);
  });

  //  Reset Drawpad
  const reset = document.querySelector('.reset');
  reset.addEventListener('click', resetBoard);
  function resetBoard() {
    drawingPixel.forEach((individualPixel) => {
      individualPixel.classList.remove('mouseRanOver');
    });
  }

  // for trail it is, to do in future
  // const createTrail = document.querySelector('.createTrail');
  // createTrail.addEventListener('click', trailCreator);

  // function trailCreator() {
  //   setTimeout(() => {
  //     this.classList.add('mouseRanOver');
  //   }, 2000);
  // }
  // Random Colors
  const randomColor = document.querySelector('.randomColors');
  randomColor.addEventListener('click', randomColorGenerator);
  function randomColorGenerator() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }
  drawingPixel.forEach((individualPixel) => {
    individualPixel.style.fill = randomColorGenerator();
  });
}

//
// Grid Creation
const gridSizeChanger = document.querySelector('.changeGridSize');
gridSizeChanger.addEventListener('click', changeGridSize);
//
//
// change color of box
function mouseRanOverBro() {
  this.classList.add('mouseRanOver');
}

//

const colorSelect = document.querySelector('#colors');
const displayColor = document.querySelector('.selectedColor');

// Function to update the color display
function updateColor() {
  // Remove any existing color class
  displayColor.classList.remove(
    'selectedColorIsRed',
    'selectedColorIsGreen',
    'selectedColorIsBlue'
  );

  // Add the selected color class
  if (colorSelect.value === 'red') {
    displayColor.classList.add('selectedColorIsRed');
  } else if (colorSelect.value === 'green') {
    displayColor.classList.add('selectedColorIsGreen');
  } else if (colorSelect.value === 'blue') {
    displayColor.classList.add('selectedColorIsBlue');
  }
}

// colorSelect.addEventListener('change', updateColor);

// for Random color... works due//
// function randomColor() {

// document.addEventListener('mouseover', function () {
//   document.body.style.backgroundColor = randomColor();
// });

// document.querySelector('circle').addEventListener('mouseover', (event) => {
//   event.target.style.fill = randomColor();
// });
