const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

//Funciones Click

btnIncrement.addEventListener('click', () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault

})

btnDecrement.addEventListener('click', () => {
    if (valueByDefault === 1){
        return
    }

    valueByDefault -= 1
    inputQuantity.value = valueByDefault
    
})

//CONSTANTES
const toggleAdditionalInformation = document.querySelector('.title-additional-information');

const contentAdditionalInformation = document.querySelector(
    '.text-additional-information'
    );

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});

element=document.getElementById('alternatives');
if (value =="plateado");
    element.src="

const element = document.querySelector('#changepic');
console.log(element);
document.querySelector('#alternatives').addEventListener('change',(e) => {
    element.src = e.target.value;
    console.log(element);
})