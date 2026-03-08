let sizeProduct, colorProduct;
const buttonAddCart = document.querySelector('[data-btn-add-card]')
const dataJson = document.querySelector('div[data-json]');
const json = dataJson.getAttribute('data-json');
console.log(JSON.parse(json));

const optionSelected = document.querySelectorAll('select');

optionSelected.forEach(optionSelected => {
    console.log(optionSelected)
})


function changeOption() {
    optionSelected.addEventListener('change', (e) => {
        console.log(optionSelected.id)
    })
    
     if (optionSelected == "tamanho") {
        sizeProduct = e.target.value;
     }
     if (optionSelected == "cor") {
         colorProduct = e.target.value;
     }
}

