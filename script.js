let tg = window.Telegram.WebApp;
tg.expand();

const imageCanvas = document.getElementById('imageCanvas');
const drawCanvas = document.getElementById('drawCanvas');
const imageCtx = imageCanvas.getContext('2d');
const drawCtx = drawCanvas.getContext('2d');

let isDrawing = false;
let currentImage = null;

// Обработчики кнопок
document.getElementById('uploadBtn').addEventListener('click', () => {
    document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', handleImageUpload);
document.getElementById('drawBtn').addEventListener('click', toggleDrawMode);
document.getElementById('generateBtn').addEventListener('click', generateImage);

// Функции для работы с изображением и рисованием
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                currentImage = img;
                resizeCanvas();
                drawImage();
                document.getElementById('drawBtn').disabled = false;
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Добавьте остальные функции для работы с canvas
