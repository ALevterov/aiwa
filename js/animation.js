let scrollObject = document.getElementById('car')
let main__btn = document.querySelector('.main__btn')
let main_logo = document.querySelector('.main__logo')
let carRolls = document.querySelector('.car__rolls')
console.log(window.innerWidth)
if (window.innerWidth >= 1024) {
  window.addEventListener('scroll', () => {
    const scrollTop = this.scrollY
    const screenHeight = document.documentElement.clientHeight
    const screenWidth = document.documentElement.clientWidth
    const scaleSW = screenWidth / 1000

    const scale = scrollTop / screenHeight

    document.querySelector('title').innerHTML = scrollTop + ' ' + screenHeight

    if (scrollTop > screenHeight && scrollTop < screenHeight * 5) {
      if (!scrollObject.classList.contains('fixed')) {
        scrollObject.classList.add('fixed')
      }
      // scrollObject.style.position = 'absolute'
      // scrollObject.style.top = `${window.pageYOffset}`
      if (scrollTop < screenHeight * 1.4) {
        carRolls.style.transform = `scale(${
          1.1 - scale * 0.1 * scaleSW
        }) translateX(${(scrollTop - screenHeight) * 0.6 * scaleSW}px)`
      }
    }
    if (scrollTop < screenHeight || scrollTop > screenHeight * 5) {
      scrollObject.classList.remove('fixed')
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
