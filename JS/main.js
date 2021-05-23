document.addEventListener('DOMContentLoaded', function() {
    
    let menu = document.querySelector('.burger-menu');
    let menuBody = document.querySelector('.header-menu');

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

    if (menu != null) {
        menu.addEventListener('click', function() {
        let group = [menu, menuBody];

        group.forEach(element => {
            element.classList.toggle('active');
        });
        
        document.body.classList.toggle('lock');
    });
    }

    function ibg() {

        let ibg=document.querySelectorAll(".ibg");

        for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('.ibg-src')){
                ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
    }

    ibg();

    if (document.body.clientWidth < 1001) {
        const menu = document.querySelector('.header-menu');
        const menuList = document.querySelector('.header-menu__list');
        const phone = document.querySelector('.header-contacts__phone');
        menuList.append(menuItemRend(phone));
        document.body.append(menu);
        
        
    } 
    if (document.body.clientWidth < 500) {
        const menuList = document.querySelector('.header-menu__list');
        const btn = document.querySelector('.header-contacts__btn');
        menuList.append(menuItemRend(btn));
    }

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

    if (document.body.clientWidth < 780) {
        const trustItem = document.querySelectorAll('.trust-item');
        const weBuyItem = document.querySelectorAll('.webuy-item');
        const lastbuysItem = document.querySelectorAll('.last-buys-item');
        const wrapper = document.querySelectorAll('.swiper-wrapper');
        const homeForm = document.querySelector('.home-form');
        const homeFormModal = document.createElement('div');
        const homeBtnPlace = document.querySelector('.home .container div DIV');
        const homeFormModalBtn = document.createElement('button');

        homeFormModalBtn.classList.add('home-form__btn', 'btn-main');
        homeFormModalBtn.textContent = 'Отправить заявку на оценку';

        homeFormModal.classList.add('home-form__modal');

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

        homeBtnPlace.append(homeFormModalBtn);
        homeFormModal.append(homeForm);
        document.body.append(homeFormModal);

        homeFormModalBtn.addEventListener('click', ()=> {
            homeFormModal.classList.toggle('active');
            document.body.classList.toggle('lock');
        }); 

        homeFormModal.addEventListener('click', (e)=> {
            if (e.target === homeFormModal) {
                homeFormModal.classList.toggle('active');
            }
            document.body.classList.toggle('lock');
        });


    }

});
