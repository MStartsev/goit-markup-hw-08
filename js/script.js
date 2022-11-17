(() => {
  respCoef();
  events();

  window.addEventListener('resize', () => {
    respCoef();
  });

  function respCoef() {
    var windowClientWidth = parseInt(document.documentElement.clientWidth);
    var windowInnerWidth = parseInt(window.innerWidth);
    document.documentElement.style.setProperty('--window-client-width', windowClientWidth);

    let coef = windowClientWidth / windowInnerWidth;
    let scrollbar = windowInnerWidth - windowClientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', scrollbar);

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
      windowInnerWidth
    );
  }

  function events() {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      o_hidden: document.querySelector('[data-o-hidden]'),

      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      contactsMenuBtn: document.querySelector('[data-menu-contacts]'),
      menu: document.querySelector('[data-menu]'),
    };

    try {
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);
    } catch (error) {
      console.log('toggleModal not found');
    }

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.contactsMenuBtn.addEventListener('click', toggleMenu);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modal.classList.toggle('not-hidden');
      refs.o_hidden.classList.toggle('o-padding');
      refs.o_hidden.classList.toggle('not-padding');

      let scrollbar = getComputedStyle(document.documentElement).getPropertyValue(
        '--scrollbar-width'
      );

      try {
        let elem = document.querySelector('.o-padding').style;
        elem.paddingRight = scrollbar + 'px';
        document.querySelector('.modal').style.marginLeft = 0;
      } catch (err) {
        let elem = document.querySelector('.not-padding').style;
        elem.paddingRight = 0;
        document.querySelector('.modal').style.marginLeft = scrollbar / 2 + 'px';
      }
    }

    function toggleMenu() {
      refs.menu.classList.toggle('menu__visually-hidden');
      refs.o_hidden.classList.toggle('o-padding');
      refs.o_hidden.classList.toggle('not-padding');
    }
  }
  //
  //
  // const refs = {
  //   openModalBtn: document.querySelector('[data-modal-open]'),
  //   closeModalBtn: document.querySelector('[data-modal-close]'),
  //   modal: document.querySelector('[data-modal]'),
  //   o_hidden: document.querySelector('[data-o-hidden]'),
  // };

  // refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  // let widthScroll = scrollbarWidth();
  // document.documentElement.style.setProperty('--scrollbar-width', widthScroll);

  // function scrollbarWidth() {
  //   var documentWidth = parseInt(document.documentElement.clientWidth);
  //   var windowsWidth = parseInt(window.innerWidth);
  //   var scrollbarWidth = windowsWidth - documentWidth;
  //   return scrollbarWidth;
  // }

  // function toggleModal() {
  //   refs.modal.classList.toggle('is-hidden');
  //   refs.modal.classList.toggle('not-hidden');
  //   refs.o_hidden.classList.toggle('o-padding');
  //   refs.o_hidden.classList.toggle('not-padding');

  //   try {
  //     let elem = document.querySelector('.o-padding').style;
  //     elem.paddingRight = widthScroll + 'px';
  //     document.querySelector('.modal').style.marginLeft = 0;
  //   } catch (err) {
  //     let elem = document.querySelector('.not-padding').style;
  //     elem.paddingRight = 0;
  //     document.querySelector('.modal').style.marginLeft = widthScroll / 2 + 'px';
  //   }
  // }

  //Mobile menu
  // function mobileMenu() {
  //   const mobmenu = {
  //     openMenuBtn: document.querySelector('[data-menu-open]'),
  //     closeMenuBtn: document.querySelector('[data-menu-close]'),
  //     contactsMenuBtn: document.querySelector('[data-menu-contacts]'),
  //     menu: document.querySelector('[data-menu]'),
  //     o_hidden: document.querySelector('.js-o-hidden'),
  //   };

  //   mobmenu.openMenuBtn.addEventListener('click', toggleMenu);
  //   mobmenu.closeMenuBtn.addEventListener('click', toggleMenu);
  //   mobmenu.contactsMenuBtn.addEventListener('click', toggleMenu);

  //   function toggleMenu() {
  //     mobmenu.menu.classList.toggle('menu__visually-hidden');
  //     mobmenu.o_hidden.classList.toggle('o-padding');
  //     mobmenu.o_hidden.classList.toggle('not-padding');

  //     try {
  //       let elem = document.querySelector('.o-padding').style;
  //       elem.paddingRight = widthScroll + 'px';
  //       document.querySelector('.modal').style.marginLeft = 0;
  //     } catch (err) {
  //       let elem = document.querySelector('.not-padding').style;
  //       elem.paddingRight = 0;
  //       document.querySelector('.modal').style.marginLeft = widthScroll / 2 + 'px';
  //     }
  //   }
  // }
})();
