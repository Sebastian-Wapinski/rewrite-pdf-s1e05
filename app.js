const pList = document.querySelectorAll('p');
const divList = document.querySelectorAll('section > div');
const commentsContentList = document.querySelectorAll('.comments__content')

for (let i = 0; i < pList.length; i++) {
    pList[i].textContent = i + '. Kolejny wiersz';
}
console.log(pList);