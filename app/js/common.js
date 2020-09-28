document.addEventListener("DOMContentLoaded", () => {
	let setupMobileMenu = () => {
    let menuBtn = document.querySelector('.menu-btn');
    let mobileMenu =document.querySelector('.menu-mobile');
    let mobileMenuList = document.querySelector('.menu-mobile__navigation');
    let menuList = document.querySelector('.header__navigation-list');
    mobileMenuList.append(menuList.cloneNode(true));

    let socials = document.querySelector('.header__social');
    mobileMenuList.append(socials.cloneNode(true));
    // mobileMenuList.querySelector('.header__nav-list').classList.remove('main-menu');

    let links = mobileMenuList.querySelectorAll('.header__navigation-item a');
    links.forEach((el) => {
      el.addEventListener('click', (e) => {
        closeMenu(e)
      })
    })

    menuBtn.addEventListener('click', function(e){
      closeMenu(e);
    });

    let closeMenu = (e) => {
      e.preventDefault();
      menuBtn.classList.toggle('active');
      menuBtn.classList.toggle('on');
      mobileMenu.classList.toggle('active');
    };
  }
  setupMobileMenu();

  let headerTitle = document.querySelector('.header__title');
  headerTitle.innerHTML = headerTitle.innerHTML.replace(/productivity/, '<span class="strong">productivity</span>');

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  });

});
