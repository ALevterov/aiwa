let pictureList = {
    "Rolls Royce Dawn": "image/form/Rolls-Royce-Cullinan-1-FW-DAloFK-transformed.png",
    "Rolls Royce Cullinan": "image/form/Rolls-Royce-Cullinan-1-transformed.png",
    "Bentley Bentayga": "image/form/Rolls-Royce-Cullinan-1-(1)-transformed.png",
    "Ferrari F8": "image/form/Rolls-Royce-Cullinan-1-(2)-transformed.png",
    "Ferrari Portofino": "image/form/Rolls-Royce-Cullinan-1-(3)-transformed.png",
    "Lamborghini URUS": "image/form/Rolls-Royce-Cullinan-1-(4)-transformed.png",
    "Lamborghini Huracan 2022": "image/form/Rolls-Royce-Cullinan-1-(5)-transformed.png",
    "Lamborghini Huracan 2023": "image/form/23456345634563456345634563.png",
    "Mercedes G63": "image/form/Rolls-Royce-Cullinan-1-(6)-transformed.png",
    "Porsche 911": "image/form/Rolls-Royce-Cullinan-1-(7)-transformed.png",
    "Porsche Cayman 718": "image/form/Rolls-Royce-Cullinan-1-(8)-transformed.png",
    "Porsche Cayman 718": "image/form/Rolls-Royce-Cullinan-2-(8)-transformed.png",
}


let change_text = document.querySelector('.change_text')
let change_text_calc = document.querySelector('.change_text_calc')

$('#rent_change').change(function () {
    let val = $('#rent_change').val();
    change_text.innerHTML = val
    $('.change__rent__car').attr("src",pictureList[val]);
});

$('#cars_picker').change(function () {
    let val = $('#cars_picker').val();
    change_text_calc.innerHTML = val
    $('.change__calc__car').attr("src",pictureList[val]);
});