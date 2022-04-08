let currentDiv = document.querySelector('div')
let redAudio = document.querySelector('.karmir')
let blueAudio = document.querySelector('.kapuyt')
let apricotAudio = document.querySelector('.tsiranaguyn')
let pinkAudio = document.querySelector('.vardaguyn')
let yellowAudio = document.querySelector('.deghin')
let greenAudio = document.querySelector('.kanach')
let orangeAudio = document.querySelector('.narnjaguyn')
let purpleAudio = document.querySelector('.manushakaguyn')
let brownAudio = document.querySelector('.shaganakaguyn')
let blackAudio = document.querySelector('.sev')
let whiteAudio = document.querySelector('.spitak')
let grayAudio = document.querySelector('.mokhraguyn')


currentDiv.addEventListener('click', sayColor)


function sayColor(e) {
    e.preventDefault()
    let item = e.target;
    if (item.className == 'red'){
        redAudio.play()
    }
    if (item.className == 'blue'){
        blueAudio.play()
    }
    if (item.className == 'apricot'){
        apricotAudio.play()
    }
    if (item.className == 'pink'){
        pinkAudio.play()
    }
    if (item.className == 'yellow'){
        yellowAudio.play()
    }
    if (item.className == 'green'){
        greenAudio.play()
    }
    if (item.className == 'orange'){
        orangeAudio.play()
    }
    if (item.className == 'purple'){
        purpleAudio.play()
    }
    if (item.className == 'brown'){
        brownAudio.play()
    }
    if (item.className == 'black'){
        blackAudio.play()
    }
    if (item.className == 'white'){
        whiteAudio.play()
    }
    if (item.className == 'gray'){
        grayAudio.play()
    }

}
