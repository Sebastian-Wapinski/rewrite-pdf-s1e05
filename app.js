const fooEl = document.querySelector('#foo');
if (fooEl) {
    const boxList = fooEl.getElementsByClassName('box');
    for (let i = 0; i < boxList.length; i++) {
        const pList = boxList[i].querySelectorAll('p');
        pList.forEach(function(p) {
            p.style.border = '2px solid green';
        });
    }
}