document.addEventListener('DOMContentLoaded', function() {

    // Main Menu
    
    const menu = document.querySelector('.burger-menu');
    const menuBody = document.querySelector('.header-menu');
    const group = [menu, menuBody];
    const trustItem = document.querySelectorAll('.trust-item'),
        weBuyItem = document.querySelectorAll('.webuy-item'),
        lastbuysItem = document.querySelectorAll('.last-buys-item'),
        wrapper = document.querySelectorAll('.swiper-wrapper'),
        homeForm = document.querySelector('.home-form'),
        homeFormModal = document.querySelector('.home-form__modal'),
        homeFormModalContent = document.querySelector('.home-form__modal-content'),
        homeBtnPlace = document.querySelector('.home .container div div'),
        homeFormModalBtn = document.createElement('button');

    function mainMenuToggle (){
        group.forEach(element => {
            element.classList.toggle('active');
        });
        
        document.body.classList.toggle('lock');
    }
    
    function responsive (width) {
        if (document.body.clientWidth < width) {
            return true;
        }
    }

    if (menu != null) {
        menu.addEventListener('click', function() {
            mainMenuToggle();
        });
    }

    function sliderMob(sliderName, sliderWrapper) {
        sliderName.forEach(element => {
            element.classList.add('swiper-slide');
            document.querySelector(sliderWrapper).append(element);  
        });
    }

    function menuItemRend(item) {
        const menuItem = document.createElement('li');
        menuItem.classList.add('header-menu__item');
        menuItem.append(item);
        return menuItem;
    }

    function mobModalToggle () {
        homeFormModal.classList.toggle('active');
        document.body.classList.toggle('lock');
    }

    if (responsive(1001)) {
        const menu = document.querySelector('.header-menu');
        const menuList = document.querySelector('.header-menu__list');
        const phone = document.querySelector('.header-contacts__phone');
        menuList.append(menuItemRend(phone));
        document.body.append(menu);
        
        
    } 
    if (responsive(500)) {
        const menuList = document.querySelector('.header-menu__list');
        const btn = document.querySelector('.header-contacts__btn');
        menuList.append(menuItemRend(btn));
    }

    // Tabs

    const activeHideMenu = document.querySelectorAll('.spoiler');
    const hideMenu = document.querySelectorAll('.questions-item');
    const questions = document.querySelector('.questions');
    
    for (let i = 0; i < activeHideMenu.length; i++) {
        activeHideMenu[i].addEventListener('click', (e)=> {
            console.log(e.target);
            hideMenu[i].classList.toggle('active');
        });
        
        questions.addEventListener('click', (e)=> {
            if (e.target != activeHideMenu[i] && e.target != hideMenu[i] && e.target != activeHideMenu[i].childNodes[i] && e.target != hideMenu[i].childNodes[i]){
                hideMenu[i].classList.remove('active');
            }
        });
    }

    if (responsive(780)) {

        homeFormModalBtn.classList.add('home-form__btn', 'btn-main', 'btn-modal');
        homeFormModalBtn.textContent = 'Отправить заявку на оценку';

        homeBtnPlace.append(homeFormModalBtn);
        homeFormModalContent.append(homeForm);
        document.body.append(homeFormModal);

        
        document.querySelectorAll('.btn-modal').forEach(element => {
            element.addEventListener('click', ()=> {
                mobModalToggle();
            });
        });

        homeFormModal.addEventListener('click', (e)=> {
            if (e.target === homeFormModal) {
                mobModalToggle();
            }
        });


        sliderMob(weBuyItem, '.swiper-wrapper2');
        sliderMob(trustItem, '.swiper-wrapper1');
        sliderMob(lastbuysItem, '.swiper-wrapper3');

        const mySwiper = new Swiper('.swiper-slider', {
            speed: 400,
            spaceBetween: 15,
            resistanceRatio: 1,
            loop: true,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
            autoplay: {
                delay: 2000,
            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });


    }

});
