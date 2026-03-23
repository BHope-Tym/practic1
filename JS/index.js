

const rightBtnSlider = document.querySelector(".rightBtn")
const leftBtnSlider = document.querySelector(".leftBtn")
const slider1 = document.querySelector(".slider1s")
let slider1current = 0;
let slider1MoveStatus = false
const slider1s = document.querySelector(".slider1")
let currentX = 0
let maxLenghtSlider = 300
let sliderHeadL = 50
let sliderTextL = 700
// const slider1Chiled = [1,1,1]
const slider1Chiled = document.querySelectorAll(".sliderChild").length
const listH = document.querySelectorAll(".listH")
const listP = document.querySelectorAll(".listP")
const listChilds = document.querySelectorAll(".listChild")
windowInnerWidth = window.innerWidth
windowInnerHeight = window.innerHeight

if (windowInnerWidth > 2500) {
    sliderTextL = 2000
}
if (windowInnerWidth > 1530) {
    sliderTextL = 1000
}
if (windowInnerWidth > 1325) {
    sliderTextL = 1200
}
if (windowInnerWidth < 800) {
    maxLenghtSlider = 75
    sliderTextL = 400
}
if (windowInnerWidth < 600) {
    sliderHeadL = 30
    sliderTextL = 200
}
if (windowInnerWidth < 400) {
    maxLenghtSlider = 50
}


rightBtnSlider.addEventListener("click",function () {
    if(slider1Chiled - 1 > slider1current){
        slider1current++
        slider1.style.transform = "translate(-" + slider1current * 100  + "%)"

    }else{
        slider1current = 0
        slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
    }
})
leftBtnSlider.addEventListener("click", function () {
    if ( slider1current > 0) {
        slider1current--
        slider1.style.transform = "translate(" + -slider1current * 100 + "%)"

    } else {
        slider1current = slider1Chiled - 1;
        slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
    }
})

slider1s.onmousedown = function (e) {
    const a = document.querySelectorAll(".sliderChild > a")
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () { return true }
    }
    let slider1Width = slider1s.offsetWidth
    let clientX1 = e.pageX;
    slider1.style.transition = ".1s"
    currentX = 0
    document.onmousemove = function (e) {
        for (let i = 0; i < a.length; i++) {
            a[i].onclick = function (){ return false}
        }
        let clientX2 = e.pageX;
        currentX = clientX2 - clientX1
        
        slider1.style.transform = "translate(" + (-slider1current * slider1Width + currentX) + "px)"
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        slider1s.onmouseup = null;
        document.onmouseup = null;
        if (currentX < maxLenghtSlider && currentX > -maxLenghtSlider){
            slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
        } else if (currentX < -maxLenghtSlider){
            if (slider1Chiled - 1 > slider1current) {
                slider1current++
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"

            } else {
                slider1current = 0
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        }else{
            if (slider1current > 0) {
                slider1current--
                slider1.style.transform = "translate(" + -slider1current * 100 + "%)"

            } else {
                slider1current = slider1Chiled - 1;
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        }
        slider1.style.transition = ".6s"
    }
     
}
slider1s.addEventListener("touchstart", function(e){
    let slider1Width = slider1s.offsetWidth
    let clientX1 = e.changedTouches[0].pageX;
    slider1.style.transition = "none"
    currentX = 0
    const a = document.querySelectorAll(".sliderChild > a")
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () { return true }
    }
    document.ontouchmove = function (e) {
        for (let i = 0; i < a.length; i++) { a[i].onclick = function () { return false } }
        let clientX2 = e.changedTouches[0].pageX;
        currentX = clientX2 - clientX1
        slider1.style.transform = "translate(" + (-slider1current * slider1Width + currentX) + "px)"
    }
    document.ontouchend = function () {

        document.ontouchmove = null
        slider1s.ontouchend = null
        document.ontouchend = null
        if (currentX < maxLenghtSlider && currentX > -maxLenghtSlider) {
            slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
        } else if (currentX < -maxLenghtSlider) {
            if (slider1Chiled - 1 > slider1current) {
                slider1current++
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"

            } else {
                slider1current = 0
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        } else {
            if (slider1current > 0) {
                slider1current--
                slider1.style.transform = "translate(" + -slider1current * 100 + "%)"

            } else {
                slider1current = slider1Chiled - 1;
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        }
        slider1.style.transition = ".6s"
    }
})
    

slider1.ondragstart = function () {
    return false;
};
slider1s.ondragstart = function () {
    return false;
};






document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.theme-toggle');
    const accessibilityToggleButton = document.querySelector('.accessibility-toggle');
    const mobileMenuToggleButton = document.querySelector('.mobile-menu-toggle');
    const body = document.body;
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const icon = themeToggleButton.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeToggleButton.title = "Светлая тема";
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeToggleButton.title = "Темная тема";
        }
    });

    accessibilityToggleButton.addEventListener('click', () => {
        body.classList.toggle('accessibility-mode');
        const icon = accessibilityToggleButton.querySelector('i');
        if (body.classList.contains('accessibility-mode')) {
            icon.classList.add('fa-solid'); 
            accessibilityToggleButton.title = "Стандартный режим";
        } else {
            icon.classList.remove('fa-solid');
            accessibilityToggleButton.title = "Режим для слабовидящих";
        }
    });

    if (mobileMenuToggleButton) {
        mobileMenuToggleButton.addEventListener('click', () => {
            const header = document.querySelector('.site-header');
            header.classList.toggle('menu-open');
            let mobileNav = document.querySelector('.mobile-nav');
            if (!mobileNav) {
                mobileNav = document.createElement('nav');
                mobileNav.classList.add('mobile-nav');
                const mainNavContent = document.querySelector('.main-nav').innerHTML;
                const headerActionsContent = `
                    <div class="search-bar-mobile">
                        <input type="text" placeholder="Поиск...">
                        <button><i class="fas fa-search"></i></button>
                    </div>
                    <div class="mobile-header-actions">
                        <a href="#" title="Профиль"><i class="fas fa-user"></i></a>
                        <a href="#" title="Регистрация"><i class="fas fa-sign-in-alt"></i></a>
                        <button class="theme-toggle" title="Переключить тему"><i class="fas fa-moon"></i></button>
                        <button class="accessibility-toggle" title="Режим для слабовидящих"><i class="fas fa-eye"></i></button>
                    </div>
                `;
                mobileNav.innerHTML = `<ul>${mainNavContent}</ul>${headerActionsContent}`;
                header.appendChild(mobileNav);
                addMobileToolListeners(mobileNav);
            }

            mobileNav.classList.toggle('active');

            const icon = mobileMenuToggleButton.querySelector('i');
            if (header.classList.contains('menu-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
                mobileMenuToggleButton.title = "Закрыть меню";
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileMenuToggleButton.title = "Открыть меню";
            }
        });
    }
    function addMobileToolListeners(mobileNavElement) {
        const themeToggleBtnMobile = mobileNavElement.querySelector('.theme-toggle');
        const accessibilityToggleBtnMobile = mobileNavElement.querySelector('.accessibility-toggle');

        if (themeToggleBtnMobile) {
            themeToggleBtnMobile.addEventListener('click', () => {
                body.classList.toggle('dark-theme');
                const icon = themeToggleBtnMobile.querySelector('i');
                if (body.classList.contains('dark-theme')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    themeToggleBtnMobile.title = "Светлая тема";
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    themeToggleBtnMobile.title = "Темная тема";
                }
            });
        }

        if (accessibilityToggleBtnMobile) {
            accessibilityToggleBtnMobile.addEventListener('click', () => {
                body.classList.toggle('accessibility-mode');
                const icon = accessibilityToggleBtnMobile.querySelector('i');
                if (body.classList.contains('accessibility-mode')) {
                    icon.classList.add('fa-solid');
                    accessibilityToggleBtnMobile.title = "Стандартный режим";
                } else {
                    icon.classList.remove('fa-solid');
                    accessibilityToggleBtnMobile.title = "Режим для слабовидящих";
                }
            });
        }
    }

});



document.addEventListener('DOMContentLoaded', () => {
  const deadline = new Date('2026-03-25 23:59:59');
  
  const elDays = document.querySelector('.timer__days');
  const elHours = document.querySelector('.timer__hours');
  const elMinutes = document.querySelector('.timer__minutes');
  const elSeconds = document.querySelector('.timer__seconds');
  
  const declensionNum = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };

  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };
  updateTimer();
  const timerId = setInterval(updateTimer, 1000);
});