/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

let current;
let startLeft;
let startTop;

document.addEventListener('mousemove', (e) => {
  if (current) {
    current.style.left = e.clientX - startLeft + 'px';
    current.style.top = e.offsetY - startTop + 'px';
  }
});

export function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div');
  newDiv.draggable = true;
  newDiv.style.width = Math.round(Math.random() * 400 + 100).toString() + 'px';
  newDiv.style.height = Math.round(Math.random() * 200 + 50).toString() + 'px';
  newDiv.style.background = '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  newDiv.style.left = Math.round(Math.random() * window.innerWidth).toString() + 'px';
  newDiv.style.top = Math.round(Math.random() * window.innerHeight).toString() + 'px';

  newDiv.addEventListener('mousedown', (e) => {
    current = e.target;
    startLeft = e.offsetX;
    startTop = e.offsetY;
  });

  newDiv.addEventListener('mouseup', (e) => {
    current = undefined;
  });
  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
