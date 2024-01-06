const toggleBtn = document.querySelector('.toggle')
const rangeSlider = document.querySelector('.range')
const views = document.querySelector('.views')
const price = document.querySelector('.price')
const red = document.querySelector('.red')

let count = 'monthly'

toggleBtn.onclick = () => {
    toggleBtn.classList.toggle('active')
    if (count === 'monthly') { count = 'yearly'}
    else{ count = 'monthly'}
    console.log(count)
}

rangeSlider.onchange = () => {
    viewsNum = parseInt(rangeSlider.value)

    views.innerText = parseInt(rangeSlider.value) === 1000000 ? `1M` : `${rangeSlider.value / 1000}K`

    rangeSlider.style.cssText = `
    background-size: ${parseInt(rangeSlider.value / 10000)}% 100%;
    `

    if(count === 'monthly'){

        if(viewsNum === 1000000) {
            price.innerText = '$36.00'
        }
        else if(viewsNum >= 500000){price.innerText = '$24.00'}
        else if(viewsNum >= 100000){price.innerText = '$16.00'}
        else if(viewsNum >= 50000){price.innerText = '$12.00'}
        else if(viewsNum >= 10000){price.innerText = '$8.00'}
        else {price.innerText = '$0.00'}
    }
    else{
        if(viewsNum === 1000000) {
            price.innerText = '$27.00'
        }
        else if(viewsNum >= 500000){price.innerText = '$18.00'}
        else if(viewsNum >= 100000){price.innerText = '$12.25'}
        else if(viewsNum >= 50000){price.innerText = '$8.00'}
        else if(viewsNum >= 10000){price.innerText = '$6.00'}
        else {price.innerText = '$0.00'}
    }
}
window.onload = () => {
    // console.log(window.innerWidth)
    if(window.innerWidth < 768){
        red.innerText = '25%'
    }
    else{red.innerText = '25% discount'}
}
window.onresize = () => {
    // console.log(window.innerWidth)
    if(window.innerWidth < 768){
        red.innerText = '20%'
    }
    else{red.innerText = '25% discount'}
}