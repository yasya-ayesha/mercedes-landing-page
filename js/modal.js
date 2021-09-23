const modalBtns = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

modalBtns.forEach((modalBtn) => { // opening the modal window by click on any 'more' btn
    modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
});

modal.addEventListener('click', (event) => { // closing the modal window by click on close btn or outside the window
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }
});

