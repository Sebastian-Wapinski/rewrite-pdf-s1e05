const sectionElement = document.querySelectorAll('.comments')
if (sectionElement) {
    sectionElement[0].classList.toggle('comments--active');
    sectionElement[1].classList.toggle('comments--active');
}