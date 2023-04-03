const boxList = document.getElementsByClassName('box');
for (let i = 0; i < boxList.length; i++) {
    boxList[i].textContent = 'index -> ' + i;
}

const arr = Array.from(boxList);
arr.forEach(function(element) {
    element.style.border = '1px solid green'
})