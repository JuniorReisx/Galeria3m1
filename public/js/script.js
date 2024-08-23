
const modal = document.getElementById("modal")
const modalImg = document.getElementById("img-modal");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".container-img img")



images.forEach(img => {
    img.addEventListener('click', function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    })
});


let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}






