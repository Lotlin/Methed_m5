'use strict';

const delChild = (elem) => {
  const lastChild = elem.querySelector(':last-child');
  elem.removeChild(lastChild);
  return elem;
};

const clearElem = (elem) => {
  elem.textContent = '';
  return elem;
};

const addUserContent = (elem) => {
  const data = prompt('Введите строку');

  if (data === 'exit' || data === null) {
    return elem;
  }

  if (data === 'del') {
    delChild(elem);
    return addUserContent(elem);
  }

  if (data === 'clear') {
    clearElem(elem);
    return addUserContent(elem);
  }

  if (!(data.trim())) {
    return addUserContent(elem);
  }

  elem.insertAdjacentHTML('beforeend', `<li>${data}</li>`);

  return addUserContent(elem);
};

const addElem = (elem) => {
  document.body.prepend(elem);
  return true;
};

const elem = document.createElement('ul');

addUserContent(elem);
addElem(elem);
