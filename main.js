const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()";
const matrixColumns = Math.floor(canvas.width / 20);
const drops = [];

for (let i = 0; i < matrixColumns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00FF00'; // Cor verde

  for (let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * 20, drops[i] * 20);

    if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  // Adiciona o nome "Rafael" centralizado
  ctx.fillStyle = '#00FF00'; // Cor verde
  ctx.font = 'bold 24px monospace';
  const textWidth = ctx.measureText('Rafael').width;
  const x = (canvas.width - textWidth) / 2;
  const y = canvas.height / 2;
  ctx.fillText('Rafael Assis Santos', x, y);

  requestAnimationFrame(draw);
}

draw();