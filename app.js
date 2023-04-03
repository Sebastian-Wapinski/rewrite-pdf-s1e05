const fooElement = document.getElementById('foo')
if (fooElement !== null) {
    fooElement.textContent = 'new text';
}

const barElement = document.getElementById('bar');
if (barElement !== null) {
    barElement.className = 'newClass';
}