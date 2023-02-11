const from = document.querySelector('.form-admin')
const btn = document.querySelector('.btn-from')

btn.addEventListener('click', onSubmit)

export function onSubmit(evt) {
    evt.preventDefault()
    console.dir(from.elements.date.value)

}
