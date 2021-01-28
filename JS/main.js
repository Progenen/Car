document.addEventListener('DOMContentLoaded', function() {
    
    let menu = document.querySelector('.burger-menu');
    let menuBody = document.querySelector('.header-menu');

    if (menu != null) {
        menu.addEventListener('click', function() {
        let group = [menu, menuBody];

        group.forEach(element => {
            element.classList.toggle('active')
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
        function menuItemRend(item) {
            const menuItem = document.createElement('li');
            menuItem.classList.add('header-menu__item');
            menuItem.append(item);
            return menuItem;
        }
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
    
    for (let i = 0; i < activeHideMenu.length; i++) {
        document.addEventListener('click', e => {
            let target = e.target;
            let its_menu = target == hideMenu[i] || hideMenu[i].contains(target);
            let its_activeHideMenu = target == activeHideMenu[i];
            let menu_is_active = hideMenu[i].classList.contains('active');
            
            if (!its_menu && !its_activeHideMenu && menu_is_active) {
              toggleMenu();
            }
          });
        const toggleMenu = () => {
            hideMenu[i].classList.toggle('active');
            hideMenu[i].classList.toggle('disActive');
        };

        activeHideMenu[i].addEventListener('click', ()=> {
            toggleMenu();
        });
        
    }

    if (document.body.clientWidth < 780) {
        const trustItem = document.querySelectorAll('.trust-item');
        const weBuyItem = document.querySelectorAll('.webuy-item');
        const lastbuysItem = document.querySelectorAll('.last-buys-item');
        const wrapper = document.querySelectorAll('.swiper-wrapper');
        weBuyItem.forEach(element => {
            element.classList.add('swiper-slide');
            document.querySelector('.swiper-wrapper2').append(element);  
        });
        trustItem.forEach(element => {
            element.classList.add('swiper-slide');
            document.querySelector('.swiper-wrapper1').append(element);  
        });
        lastbuysItem.forEach(element => {
            element.classList.add('swiper-slide');
            document.querySelector('.swiper-wrapper3').append(element);  
        });
        const mySwiper = new Swiper('.swiper-slider', {
            speed: 400,
            spaceBetween: 15,
            resistanceRatio: 1,
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 2000,
              },
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
    }

});
