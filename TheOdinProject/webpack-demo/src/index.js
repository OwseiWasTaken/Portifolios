import _ from 'lodash'
import './style.css'
import icon from './icon.jpg'
import Data from './data.xml'
import Notes from './data.csv'

function component() {
    const element = document.createElement('div')

    element.textContent = _.join(['hello', 'webpack'], ' ')
    element.classList.add('hello')

    const myImage = new Image()
    myImage.src = icon

    element.appendChild(myImage)

    console.log(Data)
    console.log(Notes)
    
    return element
}

document.body.appendChild(component())