window.addEventListener('load', () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    o_hidden: document.querySelector('[data-o-hidden]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  let widthScroll = scrollbarWidth();

  function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
  }

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('not-hidden');
    refs.o_hidden.classList.toggle('o-padding');
    refs.o_hidden.classList.toggle('not-padding');

    try {
      let elem = document.querySelector('.o-padding').style;
      elem.paddingRight = widthScroll + 'px';
      document.querySelector('.modal').style.marginLeft = 0;
    } catch (err) {
      let elem = document.querySelector('.not-padding').style;
      elem.paddingRight = 0;
      document.querySelector('.modal').style.marginLeft = widthScroll / 2 + 'px';
    }
  }
});
