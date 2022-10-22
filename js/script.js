window.addEventListener('DOMContentLoaded', function () {

    // this.alert("Вітаю, цей проект розроблений Пироговою Анастасією та Ніжником Кирилом!")

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal, { passive: true });
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimerId);
    }

    modalCloseBtn.addEventListener('click', closeModal, { passive: true });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    //Ticker
    const div = document.querySelector(".logo__stroke");
    if (window.screen.width <= 0) {
        div.outerHTML = "<marquee>" + div.innerHTML + "</marquee>";
    }



});

