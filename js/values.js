let values_btn = document.querySelectorAll(".values__btn")
let values_item = document.querySelectorAll(".values__item")
let values_image = document.querySelectorAll(".values__image")
let values_open = document.querySelectorAll(".values__open")
let values_close = document.querySelectorAll(".values__close")
let values_shadow = document.querySelectorAll(".values__shadow")

let values_blur = document.querySelectorAll(".values__blur")
let values_text_open = document.querySelectorAll(".values__text__open")

for (let index = 0; index < values_item.length; index++) {
    values_btn[index].addEventListener('click', () => {
        if (values_item[index].classList.contains("values__down")) {
            values_item[index].classList.remove("values__down")
            values_image[index].classList.remove("values__cross")

            values_open[index].style.display = "block"
            values_close[index].style.display = "none"

            values_blur[index].style.display = "grid"
            values_text_open[index].style.display = "none"

            values_shadow[index].style.display = "block"
        } else {
            values_item[index].classList.add("values__down")
            values_image[index].classList.add("values__cross")

            values_open[index].style.display = "none"
            values_close[index].style.display = "block"

            values_blur[index].style.display = "none"
            values_text_open[index].style.display = "grid"

            values_shadow[index].style.display = "none"
        }
    }) 
}