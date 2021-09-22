const btn = document.querySelector('.feature__link');
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {
        if (btnItem.classList.contains('feature__link_active')) { // closing accordion completely by click on active field
            btns.forEach((btnItem) => {
                btnItem.classList.remove('feature__link_active');
            });
            lists.forEach((listItem) => {
                listItem.classList.add('hidden');
            });
        }
        else { // opening accordion by click on inactive field and closing opened one before
            btns.forEach((btnItem) => {
                btnItem.classList.remove('feature__link_active');
            });

            btnItem.classList.add('feature__link_active');

            lists.forEach((listItem) => {
                listItem.classList.add('hidden');
            });

            lists[index].classList.remove('hidden');
        }
    });
})
