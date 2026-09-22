const button = document.getElementById('button')
button.addEventListener('click', pause)

function pause() {
    document.getElementById('button').innerHTML = "Start"
    document.getElementById('button').style.backgroundColor = "#6495ED"
    document.querySelector('.loading').style.animationPlayState = "paused"

    button.removeEventListener('click', pause)
    button.addEventListener('click', start)
}

function start() {
    document.getElementById('button').innerHTML = "Pause"
    document.getElementById('button').style.backgroundColor = "plum"
    document.querySelector('.loading').style.animationPlayState = "running"

    button.removeEventListener('click', start)
    button.addEventListener('click', pause)
}

