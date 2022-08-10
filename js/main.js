// 메뉴이동
$(function() {
  $('.mob_menu li a').click(function(e) {
    e.preventDefault()

    $(window).scrollTo(this.hash || 0,1000)
  })

  $('.menu li a').click(function(e) {
    e.preventDefault()

    $(window).scrollTo(this.hash || 0,1000)
  })
})

// 퀵메뉴
$(document).ready(function(){
  var currentPosition = parseInt($(".quik").css("top"));
  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    // console.log(position,currentPosition)
    $(".quik").stop().animate({"top":position+currentPosition+"px"},500);
  });
});



// 메뉴 클래스추가 & 섹션필터
const mobMenuBtn = document.querySelector('header .mob_menu_btn')
const mobMenu = document.querySelector('.mob_menu')
const mobLia = document.querySelectorAll('.mob_menu li a')
const secs = document.querySelectorAll('section')

mobMenuBtn.addEventListener('click',()=> {
  mobMenuBtn.classList.toggle('on')
  mobMenu.classList.toggle('on')
  secfilter()
})

mobLia.forEach((mobM) => {
  mobM.addEventListener('click',() => {
    mobMenuBtn.classList.remove('on')
    mobMenu.classList.remove('on')
    secfilter()
  })
})

function secfilter() {
  secs.forEach((sec) => {
    if(!mobMenuBtn.classList.contains('on') || !mobMenu.classList.contains('on')){
      sec.style.filter = 'blur(0)'
    }else {
      sec.style.filter = 'blur(5px)'
    }
  })
}

//마우스이펙트
const mouseEffect = document.querySelector('.mouse_scroll')
// console.log(mouseEffect)
window.addEventListener('scroll',() => {
  if(window.scrollY > 1) {
    mouseEffect.style.opacity = '0'
  } else {
    mouseEffect.style.opacity = '1'
  }
})



// 스크롤 이벤트
const scrollEls = document.querySelectorAll('.scroll_el')
const proScrollEls = document.querySelectorAll('.pro_scroll_el')

scrollEls.forEach((scrollEl) => {
  new ScrollMagic
    .Scene({
      triggerElement : scrollEl,
      triggerHook: 0.8
    })
    .setClassToggle(scrollEl,'show')
    .addTo(new ScrollMagic.Controller())  
})

proScrollEls.forEach((proscrollEl) => {
  new ScrollMagic
    .Scene({
      triggerElement : proscrollEl,
      triggerHook: 0.8
    })
    .setClassToggle(proscrollEl,'pro_show')
    .addTo(new ScrollMagic.Controller())  
})



const skill = document.querySelector('.skill .container')
const skan = document.querySelectorAll('.skill .container .skill_bar .bar .line span')

function skillani() {
  if(skill.style.transform == "translateY(0)") {
    skan.forEach((sk) => {
      sk.style.animationDelay = "4s"
      sk.style.animationPlayState = "running"
    })
  }
}
skillani()




//이메일
function sendMail(parames) {
  let tempParams = {
    toName : document.getElementById('toName').value ,
    toMail : document.getElementById('toMail').value ,
    toMsg : document.getElementById('toMsg').value ,
  }
  emailjs.send('service_v6rva52','template_xaz2kso',tempParams)
  .then(function(res) {
  })
}

$(document).ready(function(){
  emailjs.init("JKdmHj75GCPteuNv9");
});




// const textDisplay = document.querySelector('.home .container p:nth-child(2)')
// const phrases = ['꾸준하게','성장','하고싶은','주니어 프론트엔드 개발자 박현서입니다.']
// // console.log(textDisplay)
// let i = 0
// let j = 0
// let currentPhrase = []
// let isDel = false

// function loop() {
//   textDisplay.innerHTML = currentPhrase.join('')  //join 배열의 문자를 하나의 문자열로
//   if(i < phrases.length) {// i=0 꾸준하게

//     if(!isDel && j <= phrases[i].length) { // 꾸준하게 4개 i=4 j=0 첫글자 꾸
//       currentPhrase.push(phrases[i][j])
//       j++ 
//       console.log('add a letter', j)
//     }

//     if(isDel && j<=phrases[i].length){
//       currentPhrase.pop(phrases[i][j])
//       j--
//       console.log('remove a letter', j)
//     }

//     if(j == phrases[i].length) { //j=4  == phrases[i].length   4
//       isDel = true
//     }

//     if(isDel && j === 0) {
//       currentPhrase =[]
//       isDel = false
//       i++
//       if(i == phrases.length) {
//         i = 0
//       }
//     }

//   }
//   setTimeout(loop, 500)
// }

// loop()