const images = [
    'C:/Users/User/Desktop/AllTheBest/Home/foto/Group1.jpg',
    'C:/Users/User/Desktop/AllTheBest/Home/foto/Group2.jpg',
    'C:/Users/User/Desktop/AllTheBest/Home/foto/чехол Iphone 13.jpg'
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showImage(index) {
    mainImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('productCont');
    const products = [
        {img:"C:/Users/User/Desktop/AllTheBest/Home/foto/product1.jpg", name:"car yell", price:"200rub", butText:"В КОРЗИНУ"},
        {img:"C:/Users/User/Desktop/AllTheBest/Home/foto/чехол Iphone 13.jpg", name:"чехол 13", price:"200rub", butText:"В КОРЗИНУ"},
        {img:"C:/Users/User/Desktop/AllTheBest/Home/foto/чехол Sumsung.jpeg", name:"чехол sumsung", price:"200rub", butText:"В КОРЗИНУ"},
        {img:"C:/Users/User/Desktop/AllTheBest/Home/foto/информация.webp", name:"без комментариев", price:"200rub", butText:"В КОРЗИНУ"},
        {img:"C:/Users/User/Desktop/AllTheBest/Home/foto/слесарь.webp", name:"все будет гуд", price:"200rub", butText:"В КОРЗИНУ"},
        {img:"C:/Users/User/Desktop/AllTheBest/Home/foto/тонировка.webp", name:"штраф за тонировку не приговор, налепим мы тебе еще", price:"200rub", butText:"В КОРЗИНУ"}];
    function productCreate(product){
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImg = document.createElement("img");
        productImg.src = product.img;

        const productName = document.createElement("a");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = product.price;

        const productButton = document.createElement("button");
        productButton.textContent = product.butText;



        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productButton);


        productContainer.appendChild(productDiv);
    }

    products.forEach(product => {
        productCreate(product);
    });
});

