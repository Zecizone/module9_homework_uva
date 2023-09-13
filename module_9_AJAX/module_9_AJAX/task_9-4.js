// Напишите код приложения, интерфейс которого представляет собой 2 input 
// и кнопку submit. В input можно ввести любое число.
// При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не 
// число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c 
// помощью fetch по URL https://picsum.photos/200/300, где первое 
// число — ширина картинки, второе — высота.
// Пример. Если пользователь ввёл 150 и 200, 
// то запрос будет вида https://picsum.photos/150/200.
// После получения данных вывести ниже картинку на экран.
  
function submitRequest() {
  const width = parseInt(document.getElementById('inputWidth').value);
  const height = parseInt(document.getElementById('inputHeight').value);
  const resultText = document.getElementById('resultText');
  const imageContainer = document.getElementById('imageContainer');

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
      resultText.textContent = 'Одно из чисел вне диапазона от 100 до 300';
      imageContainer.innerHTML = '';
  } else {
      resultText.textContent = '';

      const imageUrl = `https://picsum.photos/${width}/${height}`;

      fetch(imageUrl)
          .then(response => {
              if (response.ok) {
                  return response.blob();
              } else {
                  throw new Error('Ошибка при загрузке изображения');
              }
          })
          .then(blob => {
              const image = document.createElement('img');
              image.src = URL.createObjectURL(blob);
              imageContainer.innerHTML = '';
              imageContainer.appendChild(image);
          })
          .catch(error => {
              console.error('Ошибка:', error);
              resultText.textContent = 'Ошибка при загрузке изображения';
              imageContainer.innerHTML = '';
          });
  };
};