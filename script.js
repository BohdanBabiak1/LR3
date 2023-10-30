let tab
let tabContent

let rtl = document.getElementById('rtl')
let rtr = document.getElementById('rtr')
let rbl = document.getElementById('rbl')
let rbr = document.getElementById('rbr')

let ttl = document.getElementById('ttl')
let ttr = document.getElementById('ttr')
let tbl = document.getElementById('tbl')
let tbr = document.getElementById('tbr')

let rtlvalue = ''
let rtrvalue = ''
let rblvalue = ''
let rbrvalue = ''

let block = document.getElementById('block')

let codegreen = document.getElementById('codegreen')
codegreen.textContent = "0 0 0 0"

let photo1 = document.getElementById('photo-example')
let codebrown = document.getElementById('codebrown')

photo1.style.backgroundRepeat = 'repeat'
codebrown.textContent = 'repeat'

let bgsze_slider = document.getElementById('bgsze_slider')
let bgsze_number1 = document.getElementById('bgsze_number1')
let bgsze_numberW = document.getElementById('bgsze_numberW')
let bgsze_numberH = document.getElementById('bgsze_numberH')
let photo2 = document.getElementById('photo-example1')
photo2.style.backgroundSize = 'contain'

let codebrown1 = document.getElementById('codebrown1')
let codegreen1 = document.getElementById('codegreen1')
codebrown1.textContent = 'contain'

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show')
        tabContent[i].classList.add('hide')
        tab[i].classList.remove('whiteborder')
}}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0)
        tab[b].classList.add('whiteborder')
        tabContent[b].classList.remove('hide')
        tabContent[b].classList.add('show')
}}

function equate_to_sliders(){
    rtl.value = ttl.value
    rtr.value = ttr.value
    rbl.value = tbl.value
    rbr.value = tbr.value
    generate()
}

function equate_to_numbers(){
    ttl.value = rtl.value
    ttr.value = rtr.value
    tbl.value = rbl.value
    tbr.value = rbr.value
    generate()
}

function generate(){
    block.style.borderRadius = rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px"
    
    if (rtl.value == 0) {
        rtlvalue = rtl.value
    }
    else{
        rtlvalue = rtl.value + "px"
    }

    if (rtr.value == 0) {
        rtrvalue = rtr.value
    }
    else{
        rtrvalue = rtr.value + "px"
    }

    if (rbl.value == 0) {
        rblvalue = rbl.value
    }
    else{
        rblvalue = rbl.value + "px"
    }

    if (tbr.value == 0) {
        tbrvalue = tbr.value
    }
    else{
        tbrvalue = tbr.value + "px"
    }
    
    codegreen.textContent = `${rtlvalue} ${rtrvalue} ${tbrvalue} ${rblvalue}`
}

function handleRadioClick(clickedRadio) {
    let radios = document.querySelectorAll('.radio1');

    radios.forEach(function(radio) {
        if (radio !== clickedRadio) {
            radio.checked = false
        }
    })

    if (clickedRadio.checked) {
        photo1.style.backgroundRepeat = clickedRadio.value
        codebrown.textContent = clickedRadio.value
    }
}

function equate_to_slider(){
    bgsze_slider.value = bgsze_number1.value
    update_photo('size%')
}
function equate_to_number(){
    bgsze_number1.value = bgsze_slider.value
    update_photo('size%')
}
function regenerate_from_number(){
    update_photo('sizepx')
}

function handleRadioClick1(clickedRadio) {
    let radios = document.querySelectorAll('.radio2');

    radios.forEach(function(radio) {
        if (radio !== clickedRadio) {
            radio.checked = false
        }
    })

    if (clickedRadio.checked) {
        update_photo(clickedRadio.value)
    }
}

function update_photo(clickedRadio) {
    if (clickedRadio == 'size%') {
        bgsze_slider.disabled = false;
        bgsze_number1.disabled = false;
        bgsze_numberW.disabled = true;
        bgsze_numberH.disabled = true;
        photo2.style.backgroundSize = `${bgsze_slider.value}%`

        codegreen1.textContent = `${bgsze_slider.value}%`
        codebrown1.textContent = ''
    }
    else if (clickedRadio == 'sizepx') {
        bgsze_slider.disabled = true;
        bgsze_number1.disabled = true;
        bgsze_numberW.disabled = false;
        bgsze_numberH.disabled = false;
        photo2.style.backgroundSize = `${bgsze_numberW.value}px ${bgsze_numberH.value}px`
    
        codegreen1.textContent = `${bgsze_numberW.value}px ${bgsze_numberH.value}px`
        codebrown1.textContent = ''
    }
    else {
        bgsze_slider.disabled = true;
        bgsze_number1.disabled = true;
        bgsze_numberW.disabled = true;
        bgsze_numberH.disabled = true;
        photo2.style.backgroundSize = clickedRadio

        if (clickedRadio == 'contain'){
            codebrown1.textContent = 'contain'
            codegreen1.textContent = ''
        }
        else if (clickedRadio == 'cover'){
            codebrown1.textContent = 'cover'
            codegreen1.textContent = ''
        }
    }
}

window.onload=function() {
    tabContent = document.getElementsByClassName("tabContent")
    tab = document.getElementsByClassName('tab')
    hideTabsContent(1);
}

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i)
                break
}}}}

bgsze_slider.disabled = true;
bgsze_number1.disabled = true;
bgsze_numberW.disabled = true;
bgsze_numberH.disabled = true;

document.querySelectorAll('.radio1').forEach(function(radio) {
    radio.addEventListener('click', function() {
        handleRadioClick(this)
    })
})
  
document.querySelectorAll('.radio2').forEach(function(radio) {
    radio.addEventListener('click', function() {
        handleRadioClick1(this)
    })
})
