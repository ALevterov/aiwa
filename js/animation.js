let scrollObject = document.getElementById('car')
let mainBtn = document.querySelector('.main__btn')
let parallaxContainer = document.querySelector('.parallax_container')
let main_logo = document.querySelector('.main__logo')
let carRolls = document.querySelector('.car__rolls')
let bgHome = document.querySelector('.bg-home')

let check = document.getElementById('check')
let rent = document.getElementById('rent')
let aiwa = document.getElementById('aiwa')

let mainLine = document.querySelector('.main__line')

let header = document.querySelector('header')
document.body.addEventListener('click', e => {
  console.log(e.target)
})
let hideParallaxBtns = document.querySelectorAll('.hide-parallax')

// console.log(window.innerWidth)
if (window.innerWidth >= 1024) {
  hideParallaxBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      parallaxContainer.style.opacity = 0
    })
  })
  window.addEventListener('scroll', () => {
    const scrollTop = this.scrollY
    const screenHeight = document.documentElement.clientHeight
    const screenWidth = document.documentElement.clientWidth
    const scaleSW = screenWidth / 1000

    const animationStep = 0.2
    let animationCurrentScroll

    // const onePercentOpacity = (screenHeight * 0.2) / 100

    const scale = scrollTop / screenHeight

    // document.querySelector('title').innerHTML = scrollTop + ' ' + screenHeight

    if (scrollTop < screenHeight) {
      if (scrollObject.classList.contains('fixed')) {
        scrollObject.classList.remove('fixed')
      }
      if (bgHome.classList.contains('fixed')) {
        bgHome.classList.remove('fixed')
      }
      bgHome.style.position = 'relative'
      scrollObject.style.position = 'relative'
    }

    if (scrollTop > screenHeight && scrollTop < screenHeight * 5) {
      if (!scrollObject.classList.contains('fixed')) {
        scrollObject.classList.add('fixed')
      }
      if (!bgHome.classList.contains('fixed')) {
        bgHome.classList.add('fixed')
      }
      // scrollObject.style.position = 'absolute'
      // scrollObject.style.top = `${window.pageYOffset}`
      if (scrollTop < screenHeight * 1.4) {
        carRolls.style.transform = `scale(${
          1.1 - scale * 0.1 * scaleSW
        }) translateX(${(scrollTop - screenHeight) * 0.6 * scaleSW}px)`
        carRolls.style.zIndex = 1
      }
      // if (scrollTop < screenHeight * 1.2) {
      //   bgHome.style.opacity = 0
      // }
      if (scrollTop > screenHeight * 1.2 && scrollTop < screenHeight * 1.42) {
        bgHome.style.opacity =
          (scrollTop - screenHeight * 1.2) / (screenHeight * 0.2)
      }
      if (scrollTop < screenHeight * 1.2) {
        bgHome.style.opacity = 0
      }
      if (scrollTop > screenHeight * 1.45) {
        carRolls.style.zIndex = 9999
      }

      // check
      if (scrollTop > screenHeight * 1.5 && scrollTop < screenHeight * 1.72) {
        bgHome.style.opacity = 0.999

        check.style.opacity =
          (scrollTop - screenHeight * 1.5) / (screenHeight * 0.2)
        check.style.marginTop = `${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 1.5)
        }px`
      }
      if (scrollTop < screenHeight * 1.5) {
        check.style.opacity = 0
        check.style.marginTop = '100px'
      }

      //rent
      if (scrollTop > screenHeight * 1.7 && scrollTop < screenHeight * 1.92) {
        check.style.marginTop = '0px'
        check.style.opacity = 1

        rent.style.opacity =
          (scrollTop - screenHeight * 1.7) / (screenHeight * 0.2)
        rent.style.marginTop = `${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 1.7)
        }px`
      }
      if (scrollTop < screenHeight * 1.7) {
        rent.style.opacity = 0
        rent.style.marginTop = '100px'
      }

      //aiwa
      if (scrollTop > screenHeight * 1.9 && scrollTop < screenHeight * 2.12) {
        rent.style.marginTop = '0px'
        rent.style.opacity = 1

        aiwa.style.opacity =
          (scrollTop - screenHeight * 1.9) / (screenHeight * 0.2)
        aiwa.style.marginTop = `${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 1.9)
        }px`
      }
      if (scrollTop < screenHeight * 1.9) {
        aiwa.style.opacity = 0
        aiwa.style.marginTop = '100px'
      }

      if (scrollTop > screenHeight * 2.1) {
        aiwa.style.marginTop = '0px'
        aiwa.style.opacity = 1
      }

      if (scrollTop > screenHeight * 2.1 && scrollTop < screenHeight * 2.32) {
        mainLine.style.transform = `translateY${
          (10 * (screenHeight * 0.2)) / (scrollTop - screenHeight * 2.1)
        }px`
        aiwa.style.opacity =
          (scrollTop - screenHeight * 2.1) / (screenHeight * 0.2)
      }

      if (scrollTop < screenHeight * 2.3) {
        mainLine.style.transform = `translateY(100px)`
        mainLine.style.opacity = 0
      }

      if (scrollTop > screenHeight * 2.3) {
        mainLine.style.transform = `translateY(0px)`
        mainLine.style.opacity = 1
      }
      if (scrollTop > screenHeight * 2.3) {
        mainLine.style.transform = `translateY(0px)`
        mainLine.style.opacity = 1
      }

      if (scrollTop > screenHeight * 2.3 && scrollTop < screenHeight * 2.52) {
        mainBtn.style.opacity =
          (scrollTop - screenHeight * 2.3) / (screenHeight * 0.2)
      }
      if (scrollTop < screenHeight * 2.3) {
        mainBtn.style.opacity = 0
      }
      if (scrollTop > screenHeight * 2.4) {
        mainBtn.style.opacity = 1
      }
      if (scrollTop < screenHeight * 2.8) {
        parallaxContainer.style.opacity = 0.999
      }
      if (scrollTop > screenHeight * 2.8 && scrollTop < screenHeight * 3.8) {
        parallaxContainer.style.opacity = `${Math.pow(
          screenHeight / (scrollTop - screenHeight * 1.8),
          8
        )}`
      }

      if (scrollTop > screenHeight * 3.8) {
        parallaxContainer.style.opacity = 0
      }

      if (scrollTop < screenHeight * 2.8) {
        scrollObject.style.position = 'fixed'
        bgHome.style.position = 'fixed'
        scrollObject.style.top = 0
        bgHome.style.top = 0
      }
    }
    // if (scrollTop < screenHeight || scrollTop > screenHeight * 5) {
    //   scrollObject.classList.remove('fixed')
    //   bgHome.classList.remove('fixed')
    //   carRolls.style.transform = 'none'
    // }
    console.log(screenHeight)
    document.body.style.cssText = `--scrollTop: ${scrollTop}`

    // if(window.pageYOffset <= 1920 && window.pageYOffset >= 1460) {
    //     scrollObject.style.transform = `translate(${0}px, ${window.pageYOffset - 1340}px)`;
    //     scrollObject.style.zoom = `1.3`;

    //     if (window.pageYOffset <= 1600) {
    //         scrollObject.style.zoom = `1`;
    //     }
    // }

    // if(window.pageYOffset >= 1829) {
    //     main_logo.style.opacity = "1"
    //     main__btn.style.left = "100px"
    // }
  })
}
