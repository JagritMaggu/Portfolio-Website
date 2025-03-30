const menuIcon = document.querySelector('.fa-solid')
const navLinks = document.querySelector(".nav-links")
const navAnchor = document.querySelectorAll('.navAnchor')

function dropdown(){
if(navLinks.style.display === "none"){
    navLinks.style.display ="block";
}else{
    navLinks.style.display ="none";
}

}

 menuIcon.addEventListener('click', dropdown);