const start_id = window.document.querySelector('#start')
const timer_form = window.document.querySelector('#timer_id')
var second = 59
var hour = 0
var minute = 0
let click = 0
start_id.addEventListener('click', startCount)

function startCount() {
    click++
    if(click == 1){
        timer_form.innerHTML = '00:00:00'
         
        if(minute<10 || minute==0){
            minute = '0'+minute
        }
         
        if(hour<10||hour==0){
            hour = '0'+hour
        } 
        timeCycle()
    }
}

function timeCycle(){

    
    timer_form.innerHTML = '00:00:00'
    second++

    if(second<10 || second==0){
        second = '0'+second
    }

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