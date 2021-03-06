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

  const swiper1 = new Swiper('.swiper-container1', {
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


  let setAccordion = () => {
    
    let questionList = document.querySelectorAll('.questions__item');
    let faqClick = (question, answer) => {
      if(question.classList.contains('active')){
        question.classList.remove('active');
        answer.classList.remove('active');
      }else{
        closeOpenTabs();
        question.classList.add('active');
        answer.classList.add('active');
      }
      if (answer.clientHeight) {
        answer.style.height = 0;
      } else {
        let wrapper = document.querySelector('.questions__answer-wrapper');
        answer.style.height = wrapper.clientHeight + "px";
      }
    }

    let closeOpenTabs = () => {
      let ask = document.querySelector('.questions__ask.active');
      let answer = document.querySelector('.questions__answer.active');
      if(ask && answer){
        ask.classList.remove('active');
        answer.classList.remove('active');
        answer.style.height = 0;
      }
    }
    questionList.forEach(el => {
      let question = el.querySelector('.questions__ask');
      let answer = el.querySelector('.questions__answer');

      question.addEventListener('click', () => faqClick(question, answer))
    });
  };
  setAccordion();

});
