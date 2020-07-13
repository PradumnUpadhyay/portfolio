// Selecting elements from DOM
const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
const menuNav=document.querySelector('.menu-nav');
const menuBranding=document.querySelector('.menu-branding');

const navItems=document.querySelectorAll('.nav-item');


let sm=false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!sm) {
        menuBtn.classList.add('close')
        menu.classList.add('show')
        menuNav.classList.add('show') 
        menuBranding.classList.add('show')
        navItems.forEach(item=>{
            item.classList.add('show')
        });
        sm=true;
    } else {
        menuBtn.classList.remove('close')
        menu.classList.remove('show')
        menuNav.classList.remove('show')
        menuBranding.classList.remove('show')
        navItems.forEach(val=>{
            val.classList.remove('show')
        });
        sm=false;
    }
}

let tdy=new Date();
let hrs=tdy.getHours();
var greet;

if (hrs < 12)
    greet = 'Good Morning 🙂';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon 🙂';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening 🙂';

document.getElementById('greeting').innerHTML='<h1>'+greet+'</h1>';