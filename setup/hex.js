const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomHexColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}

document.getElementById('btn').addEventListener('click', function() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector('.color').textContent = randomColor;
});
