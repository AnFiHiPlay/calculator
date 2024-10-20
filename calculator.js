// Получаем элементы
const quantityInput = document.getElementById('quantity');
const paperSelect = document.getElementById('paper');
const colorSelect = document.getElementById('color');
const totalDisplay = document.getElementById('total');

// Цены за бумагу и цветность
const paperPrices = {
    1: 5,   // Глянцевая
    2: 7    // Матовая
};

const colorPrices = {
    1: 2,   // Черно-белая
    2: 5    // Цветная
};

// Функция для расчета стоимости
function calculateTotal() {
    const quantity = parseInt(quantityInput.value);
    const paperPrice = paperPrices[paperSelect.value] || 0;
    const colorPrice = colorPrices[colorSelect.value] || 0;

    if (paperPrice && colorPrice) {
        const total = quantity * (paperPrice + colorPrice);
        totalDisplay.textContent = total.toFixed(2); // Обновляем отображение стоимости
    } else {
        totalDisplay.textContent = '0'; // Если не все параметры выбраны
    }
}

// Обработчики событий для пересчета при изменении значений
quantityInput.addEventListener('input', calculateTotal);
paperSelect.addEventListener('change', calculateTotal);
colorSelect.addEventListener('change', calculateTotal);
