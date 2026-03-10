document.addEventListener('DOMContentLoaded', () => {
    const dataJson = document.querySelector("[data-json]");
    const variants = JSON.parse(dataJson.getAttribute("data-json"));
    const select = document.querySelectorAll("select");
    const elementPrice = document.querySelector("[data-price]");
    const buttonCart = document.querySelector("[data-btn-add-cart]");
    let corProduct = null;
    let sizeProduct = null;
    let idVariant = null;

    select.forEach(select => {
        select.addEventListener("change", (e) => {
            const optionName = e.target.id;
            const value = e.target.value;

            if (optionName === "cor") {
                corProduct = value;
            }

            if (optionName === "tamanho") {
                sizeProduct = value;
            }

            updateVariant();

        });
    });

    function updateVariant() {
        const variant = variants.find(v =>
            v.option1 === corProduct &&
            v.option2 === sizeProduct

        );

        if (variant) {
            idVariant = variant.id;

            if (elementPrice) {
                elementPrice.textContent = "R$" + (variant.price / 100).toFixed(2);

            }
            console.log("Variante Selecionada:", variant)
        }
    }

    buttonCart.addEventListener("click", addCart);

    async function addCart() {
     

        const formData = {
            items: [
                {
                    id: idVariant,
                    quantity: 1
                }
            ]
        };

        try {
            
            const response = await fetch(window.Shopify.routes.root + 'cart/add.js', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            );

            const data = await response.json();
            console.log("Produto adicionado ao carrinho!", data);


        } catch (error) {
            console.error("Erro ao adicionar ao carrinho", error);
        }


    }
});



