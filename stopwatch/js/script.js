const start_id = window.document.querySelector('#start_id')
const timer_form = window.document.querySelector('#timer_id')
var second = 0
var hour = 0
var minute = 0
let click = 0
start_id.addEventListener('click', startCount)

function startCount() {
    click++
    if(click == 1){
        timeCycle()
    }
}

function timeCycle(){

    timer_form.innerHTML = ''
    second = second + 1

    if(second == 60){
        minute = minute + 1
        second = 0
    }

    if(minute == 60){
        hour = hour + 1
        minute = 0
    }

    timer_form.innerHTML = `${hour}:${minute}:${second}`
    
    
    setTimeout("timeCycle()", 1000)
    console.log(`segundo:${second}, minuto:${minute}, hora:${hour}`)
}