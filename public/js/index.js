const colorOption = document.querySelectorAll('.color-option');
const productImage = document.querySelector('.product__img')
console.log(colorOption)

for (const color of colorOption) {
    color.addEventListener("click", (e) => {
        let newImg = color.getAttribute('src')
        productImage.setAttribute('src', newImg)
    })
}

