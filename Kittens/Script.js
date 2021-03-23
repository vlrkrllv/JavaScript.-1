const images = [
    "0.jpg", 
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
    const imgTag = document.querySelector('img')

    document.querySelector(".buttons :nth-child(1)").addEventListener("click", ()=> {
        const currentImg = imgTag.getAttribute('src')
        const currentPos = images.indexOf(currentImg);
        const newPos = currentPos == 0? 9 : currentPos - 1;
        const newImage = images[newPos];
        imgTag.setAttribute("src", newImage)
    })

    document.querySelector(".buttons :nth-child(2)").addEventListener("click", ()=> {
        const currentImg = imgTag.getAttribute('src')
        const currentPos = images.indexOf(currentImg);
        const newPos = currentPos == 9? 0 : currentPos + 1;
        const newImage = images[newPos];
        imgTag.setAttribute("src", newImage)
    })


}) 
