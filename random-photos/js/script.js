const btn_randozimer = window.document.getElementById('randomizer')
const display = window.document.getElementById('random-images')
btn_randozimer.addEventListener('click', randomize)

function randomize(){
    console.log('Function randomize = true')
    let html = ''

    html += '<div class="img-slot">'
    html += '<img class="img-model" src="https://picsum.photos/200/300?random=1">'
    html += '<p>Text</p>'
    html += '</div>'

    console.log(html)
    display.innerHTML += html
}