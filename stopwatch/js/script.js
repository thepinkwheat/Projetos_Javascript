const start_id = window.document.querySelector('#start')
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

    
    timer_form.innerHTML = '00:00:00'
    second++

    if(second == 60){
        minute++
        second = 0
    }

    if(minute == 60){
        hour++
        minute = 0
    }

    timer_form.innerHTML = `${hour}:${minute}:${second}`
    console.log(`segundo:${second}, minuto:${minute}, hora:${hour}`)
    setTimeout("timeCycle()", 1000)
}