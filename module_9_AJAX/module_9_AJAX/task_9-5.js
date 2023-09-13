// Если числа попадают в диапазон от 1 до 10 — сделать 
// запрос по URL https://picsum.photos/v2/list?page=1&limit=10, 
// где GET-параметр page — это число из первого input, 
// а GET-параметр limit — это введённое число второго input.

function foo2() {
    const limit = parseInt(document.getElementById('limit').value);
    const page = parseInt(document.getElementById('page').value);
    const resultText = document.getElementById('resultText');

    const lastSuccessfulOutput = localStorage.getItem('lastSuccessfulOutput');
    if (lastSuccessfulOutput) {
        resultText.innerHTML = lastSuccessfulOutput;
    };

    if ((isNaN(limit) || limit < 1 || limit > 10) && (isNaN(page) || page < 1 || page > 10)) {
        resultText.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';       
    } else if (isNaN(limit) || limit < 1 || limit > 10) {
        resultText.textContent = 'Лимит вне диапазона от 1 до 10';     
    } else if (isNaN(page) || page < 1 || page > 10) {
        resultText.textContent = 'Номер страницы вне диапазона от 1 до 10';
    } else {
        const imageUrl = ` https://picsum.photos/v2/list??page=${page}&limit=${limit},`;
        fetch(imageUrl)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                } else {
                    throw new Error('Ошибка при загрузке изображения');
                };
            })
            .then(blob => {
                const image = document.createElement('img');
                image.src = URL.createObjectURL(blob);
                resultText.innerHTML = '';
                resultText.appendChild(image);
                localStorage.setItem('lastSuccessfulOutput', resultText.innerHTML);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                resultText.textContent = 'Ошибка при загрузке изображения';
            });
    };
};

