let cars_btn = document.querySelectorAll(".cars__btn")
let cars_item = document.querySelectorAll(".cars__item")
let cars_image = document.querySelectorAll(".cars__image")
let cars_open = document.querySelectorAll(".cars__open")
let cars_close = document.querySelectorAll(".cars__close")
let cars_add_open = document.querySelectorAll(".cars__add__open")
let item_circle = document.querySelectorAll(".item__circle")


for (let index = 0; index < cars_item.length; index++) {
    cars_btn[index].addEventListener('click', () => {
        if (cars_item[index].classList.contains("cars__down")) {
            cars_item[index].classList.remove("cars__down")
            cars_image[index].classList.remove("cars__cross")

            cars_open[index].style.display = "block"
            cars_close[index].style.display = "none"
            cars_add_open[index].style.display = "none"
            item_circle[index].classList.remove("cars__item__circle")

        } else {
            cars_item[index].classList.add("cars__down")
            cars_image[index].classList.add("cars__cross")

            cars_open[index].style.display = "none"
            cars_close[index].style.display = "block"
            cars_add_open[index].style.display = "block"

            item_circle[index].classList.add("cars__item__circle")
        }
    }) 
}