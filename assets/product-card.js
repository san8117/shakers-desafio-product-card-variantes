let sizeProduct, colorProduct;
const buttonAddCart = document.querySelector('[data-btn-add-cart]')

document.addEventListener('DOMContentLoaded', () => {
    const dataJson = document.querySelector('div[data-json]');
    const json = dataJson.getAttribute('data-json');
    console.log(JSON.parse(json));
    let variantId = json.id;
    console.log(variantId)

})

const optionSelected = document.querySelectorAll('select');

optionSelected.forEach(optionSelected => {

    optionSelected.addEventListener('change', (e) => {
        console.log(optionSelected.id)
    })

    if (optionSelected == "tamanho") {
        sizeProduct = e.target.value;
    }
    if (optionSelected == "cor") {
        colorProduct = e.target.value;
    }

    console.log(colorProduct, sizeProduct);

    json.forEach(json => {
        if (json.option1 == colorProduct && json.option2 == sizeProduct) {
            console.log(json)
        }
    });
})


function addCart() {
    let formData = {
        'items': [{
            'id': 7114244980785,
            'quantity': 1
        }]
    };

    fetch(window.Shopify.routes.root + 'cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            return response.json();
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        buttonAddCart.addEventListener('click', addCart);
}


