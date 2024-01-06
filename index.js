const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/* ========================= */
const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-productor')

//Lista de todos los contenedores de los productos 
const productsList =document.querySelector('.container-items') 

//variable de arreglos de productos 
let allproducts = []




productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector
        }
    }

})

