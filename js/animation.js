let scrollObject = document.getElementById('car')
let main__btn = document.querySelector('.main__btn')
let main_logo = document.querySelector('.main__logo')
let carRolls = document.querySelector('.car__rolls')
let bgHome = document.querySelector('.bg-home')

let check = document.getElementById('check')
let rent = document.getElementById('rent')
let aiwa = document.getElementById('aiwa')

console.log(window.innerWidth)
if (window.innerWidth >= 1024) {
  window.addEventListener('scroll', () => {
    const scrollTop = this.scrollY
    const screenHeight = document.documentElement.clientHeight
    const screenWidth = document.documentElement.clientWidth
    const scaleSW = screenWidth / 1000

    // const onePercentOpacity = (screenHeight * 0.2) / 100

    const scale = scrollTop / screenHeight

    document.querySelector('title').innerHTML = scrollTop + ' ' + screenHeight

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
      if (scrollTop > screenHeight * 1.5 && scrollTop < screenHeight * 1.62) {
        check.style.opacity =
          (scrollTop - screenHeight * 1.5) / (screenHeight * 0.1)
        check.style.marginTop = `${
          (10 * (screenHeight * 0.1)) / (scrollTop - screenHeight * 1.5)
        }px`
      }
      if (scrollTop < screenHeight * 1.5) {
        check.style.opacity = 0
        check.style.marginTop = '100px'
      }

      //rent
      if (scrollTop > screenHeight * 1.6 && scrollTop < screenHeight * 1.72) {
        check.style.marginTop = '0px'

        rent.style.opacity =
          (scrollTop - screenHeight * 1.6) / (screenHeight * 0.1)
        rent.style.marginTop = `${
          (10 * (screenHeight * 0.1)) / (scrollTop - screenHeight * 1.6)
        }px`
      }
      if (scrollTop < screenHeight * 1.6) {
        rent.style.opacity = 0
        rent.style.marginTop = '100px'
      }

      //aiwa
      if (scrollTop > screenHeight * 1.7 && scrollTop < screenHeight * 1.82) {
        rent.style.marginTop = '0px'

        aiwa.style.opacity =
          (scrollTop - screenHeight * 1.7) / (screenHeight * 0.1)
        aiwa.style.marginTop = `${
          (10 * (screenHeight * 0.1)) / (scrollTop - screenHeight * 1.6)
        }px`
      }
      if (scrollTop < screenHeight * 1.7) {
        aiwa.style.opacity = 0
        aiwa.style.marginTop = '100px'
      }

      if (scrollTop > screenHeight * 1.8) {
        aiwa.style.marginTop = '0px'
      }
    }
    if (scrollTop < screenHeight || scrollTop > screenHeight * 5) {
      scrollObject.classList.remove('fixed')
      bgHome.classList.remove('fixed')
      carRolls.style.transform = 'none'
    }
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
