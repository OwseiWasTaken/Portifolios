import _ from 'lodash'
import myPrint from './print.js'
import print from './print-two.js'

function component() {
    const element = document.createElement('div')
    const btn = document.createElement('button')
    const button = document.createElement('button')
    
    element.innerHTML = _.join(['hello', 'webpack'], ' ')

    btn.innerHTML = 'click me'
    btn.onclick = myPrint
    button.innerHTML = 'click me too'
    button.onclick = print

    element.appendChild(btn)
    element.appendChild(button)
    return element
}

document.body.appendChild(component())