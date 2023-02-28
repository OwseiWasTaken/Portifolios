const btn = document.createElement('button')
btn.innerText = 'click me'
btn.addEventListener("click", changeColor)

export default function changeColor() {
    document.body.classList.toggle('background')

    return btn
}