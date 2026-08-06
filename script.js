let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-x');
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-x');
    menu.classList.add('fa-bars');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer' , 'Blockchain Developer' ,'Web Designer' , 'Graphics Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });