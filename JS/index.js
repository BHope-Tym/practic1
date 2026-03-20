

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

const btn =document.querySelector(".btn-t");
const theme=document.querySelector("#theme-link");
btn.addEventListener("click", function(){
    if(theme.getAttribute("href") == "Styles/index.css"){
        theme.href="Styles/index-light.css";
    } else {
        theme.href="Styles/index.css";
    }
});
