let cond_btn = document.querySelectorAll(".cond__btn")
let cond_item = document.querySelectorAll(".cond__item")
let cond_image = document.querySelectorAll(".cond__image")
let cond_open = document.querySelectorAll(".cond__open")
let cond_close = document.querySelectorAll(".cond__close")
let cond_shadow = document.querySelectorAll(".cond__shadow")

let cond_blur = document.querySelectorAll(".cond__blur")
let cond_text_open = document.querySelectorAll(".cond__text__open")

for (let index = 0; index < cond_item.length; index++) {
    cond_btn[index].addEventListener('click', () => {
        if (cond_item[index].classList.contains("cond__down")) {
            cond_item[index].classList.remove("cond__down")
            cond_image[index].classList.remove("cond__cross")

            cond_open[index].style.display = "block"
            cond_close[index].style.display = "none"

            cond_blur[index].style.display = "grid"
            cond_text_open[index].style.display = "none"

            cond_btn[index].style.bottom = "20px";
            // cond_btn[index].classList.remove("cond__item__circle")

            cond_shadow[index].style.display = "block"
        } else {
            cond_item[index].classList.add("cond__down")
            cond_image[index].classList.add("cond__cross")

            cond_open[index].style.display = "none"
            cond_close[index].style.display = "block"

            cond_blur[index].style.display = "none"
            cond_text_open[index].style.display = "grid"

            if(window.innerWidth >= 1024) {
                cond_btn[index].style.bottom = "-780px";
            }


            // cond_btn[index].classList.add("cond__item__circle")

            cond_shadow[index].style.display = "none"
        }
    }) 
}