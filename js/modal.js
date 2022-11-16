window.addEventListener('load', () => {
  respCoef();

  window.addEventListener('resize', () => {
    respCoef();
  });

  function respCoef() {
    let windowInnerWidth = window.innerWidth;
    let windowClientWidth = document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--window-client-width', windowClientWidth);

    let coef = windowClientWidth / windowInnerWidth;
    let scrollbar = windowInnerWidth - windowClientWidth;

    if (windowInnerWidth > 1600) {
      coef = (1600 - scrollbar) / 1200;
      document.documentElement.style.setProperty('--coef', coef);
    } else if (windowInnerWidth > 1200) {
      coef = windowClientWidth / 1200;
      document.documentElement.style.setProperty('--coef', coef);
    } else if (windowInnerWidth >= 480 || windowInnerWidth <= 424) {
      document.documentElement.style.setProperty('--coef', coef);
    } else if (windowInnerWidth > 360) {
      coef = windowClientWidth / 480;
      document.documentElement.style.setProperty('--coef', coef);
    }

    console.log(
      'clientWidth:',
      getComputedStyle(document.documentElement).getPropertyValue('--window-client-width'),
      '; innerWidth:',
      windowInnerWidth,
      '; --:',
      windowInnerWidth - windowClientWidth,
      '; Scrollbar:',
      getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-width'),
      '; --coef:',
      getComputedStyle(document.documentElement).getPropertyValue('--coef')
    );
  }

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    o_hidden: document.querySelector('[data-o-hidden]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  let widthScroll = scrollbarWidth();
  document.documentElement.style.setProperty('--scrollbar-width', widthScroll);
  console.log(
    '--scrollbar-width:',
    getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-width')
  );

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

  //Mobile menu
});
