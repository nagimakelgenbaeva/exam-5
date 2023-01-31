
const inputName = document.querySelector (".form-submit__inp")
const oneBtn = document.querySelector (".form-submit__btn1")
const twoBtn = document.querySelector (".form-submit__btn2")
const namesLocal = document.querySelector (".names__local")


let arrLocal = JSON.parse(localStorage.getItem('localList')) 

const showLocal = () => {
    if (arrLocal) {
        arrLocal.forEach(({ name }, i) => {
            namesLocal.innerHTML += `${i + 1} : ${name}<br>`
        })
        localStorage.setItem('localList', JSON.stringify(arrLocal))
    }
}

function byField(field) {
    return(a, b) => a[field] > b[field] ? 1 : -1;
}

function byFieldRev(field) {
    return(a, b) => b[field] > a[field] ? 1 : -1;
}

oneBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.dataset.id == 1) {
        arrLocal.sort(byField('name'))
        event.target.dataset.id = 2
    } else {
        arrLocal.sort(byFieldRev('name'))
        event.target.dataset.id = 1
    }
   
    namesLocal.innerHTML = ''
        
    showLocal()

})
   


twoBtn.addEventListener('click', (event) => {
  preventDefault()
    //c event  не работает замена
  let names = inputName.value.toLowerCase().trim()
     
    if (names) {

        if (!arrLocal) {
            arrLocal = []
        }

        let obj = { name:names, important:false }
        const { name } = obj 
        arrLocal.push(obj)
        localStorage.setItem('localList', JSON.stringifyarrLocal(arrLocal))
        inputName.value = ''
        namesLocal.innerHTML = ''
        showLocal()

    } 
})

showLocal()

