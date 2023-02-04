function begin_date() {
  let input_taker = document.getElementById('datepicker').value
  document.getElementById('begin__date').innerHTML = input_taker
  return input_taker
}

function end_date() {
  let input_taker = document.getElementById('datepicker2').value
  document.getElementById('end__date').innerHTML = input_taker

  return input_taker
}

function getPrice() {
  let input_taker = document.getElementById('cars_picker').value

  let pictureList = {
    'Rolls Royce Cullinan': '4500',
    'Rolls Royce Dawn': '3600',
    'Bentley Bentayga': '4000',
    'Ferrari F8': '4000',
    'Ferrari Portofino': '3600',
    'Lamborghini URUS': '4500',
    'Lamborghini Huracan 2022': '3300',
    'Lamborghini Huracan 2023': '4500',
    'Mercedes G63': '2000',
    'Porsche 911': '1800',
    'Porsche Cayman 718': '3200',
  }
  return pictureList[input_taker]
}

function getDaysDif(date1, date2) {
  return (date2 - date1) / (60 * 60 * 24 * 1000)
}

let carsSelect = document.getElementById('cars_picker')
let datePickerBegin = document.getElementById('datepicker')
let datePickerEnd = document.getElementById('datepicker2')

function calculateCost() {
  let price = getPrice()
  let beginDateStr = begin_date()
  let endDateStr = end_date()
  let endPrice = document.getElementById('end__price')

  if (!beginDateStr || !endDateStr || !price) {
    endPrice.innerHTML = '?'
    return
  }
  let splittedBegin = beginDateStr.split('.')
  let splittedEnd = endDateStr.split('.')

  let beginDate = new Date(splittedBegin[2], splittedBegin[1], splittedBegin[0])
  let endDate = new Date(splittedEnd[2], splittedEnd[1], splittedEnd[0])

  let daysDif = getDaysDif(beginDate, endDate)

  if (daysDif <= 0) {
    endPrice.innerHTML = '?'
    return
  }
  let totalCost = daysDif * +price + 5000

  endPrice.innerHTML = totalCost
  return
}

$('#datepicker').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
})

$('.date').mousedown(function () {
  $('.ui-datepicker').addClass('active')
  // calculateCost()
})

$('#datepicker2').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
})

$('.date2').mousedown(function () {
  $('.ui-datepicker').addClass('active')
  // calculateCost()
})

$('#datepicker3').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
})

$('.date3').mousedown(function () {
  $('.ui-datepicker').addClass('active')
})

$('#datepicker4').datepicker({
  firstDay: 1,
  showOtherMonths: true,
  changeMonth: true,
  changeYear: true,
  dateFormat: 'dd.mm.yy',
})

$('.date4').mousedown(function () {
  $('.ui-datepicker').addClass('active')
})
