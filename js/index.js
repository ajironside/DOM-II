//`mouseover`


//`keydown`


//`wheel`


//`drag / drop`


//`load`


//`focus`


//`resize`
const imgContent = document.querySelector('.img-content');

imgContent.addEventListener('mouseenter', () => {
    imgContent.style.transform = "scale(1.3)";
    imgContent.style.transform = "all 0.3s";
});

imgContent.addEventListener('mouseleave', () => {
    imgContent.style.transform = "scale(1)";
})

//`scroll`


//`select`


//`dblclick`
const imgTop = document.querySelector('.intro img')

imgTop.addEventListener('dblclick', () => {
    imgTop.src = "img\ethan-robertson-SYx3UCHZJlo-unsplash.jpg";
})

//Nest two similar events somewhere in the site and prevent the event propagation properly


//Stop the navigation items from refreshing the page by using `preventDefault()`