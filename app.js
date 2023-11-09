// -----------------smoth scroll----------------------


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//--------load-----------------------

//----------------mouse cursor--------------------- 

let cursor = document.querySelector('.cursor');
let main = document.querySelector('#main');
let logo = document.querySelector('.logo');
let motto = document.querySelector('.dis-head h2')
main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
})

logo.addEventListener('mouseenter',function(){
    cursor.style.transform = 'scale(7)';
})
logo.addEventListener('mouseleave',function(){
    cursor.style.transform = 'scale(1)';
})
motto.addEventListener('mouseenter',function(){
    cursor.style.transform = 'scale(7)';
})
motto.addEventListener('mouseleave',function(){
    cursor.style.transform = 'scale(1)';
})
let page2 = document.querySelector(".page-2-button button");

page2.addEventListener('mouseenter',function(){
    cursor.style.display = 'none';
})
page2.addEventListener('mouseleave',function(){
    cursor.style.display = 'inline-block';
})

//-----------------------video text-----------------------
let brew = document.querySelector('#brew');
let bond = document.querySelector('#bond');
let belong = document.querySelector('#belong');

brew.addEventListener('mouseenter',function(){
    cursor.style.transform = 'scale(16)';
    cursor.innerHTML= `<video src="/media/video/1.mp4" autoplay muted loop></video>`
})
brew.addEventListener('mouseleave',function(){
    cursor.style.transform = 'scale(1)';
    cursor.innerHTML= ``
})
bond.addEventListener('mouseenter',function(){
    cursor.style.transform = 'scale(16)';
    cursor.innerHTML= `<video src="/media/video/2.mp4" autoplay muted loop></video>`
})
bond.addEventListener('mouseleave',function(){
    cursor.style.transform = 'scale(1)';
    cursor.innerHTML= ``
})
belong.addEventListener('mouseenter',function(){
    cursor.style.transform = 'scale(16)';
    cursor.innerHTML= `<video src="/media/video/3.mp4" autoplay muted loop></video>`
})
belong.addEventListener('mouseleave',function(){
    cursor.style.transform = 'scale(1)';
    cursor.innerHTML= ``
})

//------------------contact video---------------------
let vid_box =document.querySelector('.contact');
let video = document.querySelector(".contact-us video");

vid_box.addEventListener('mouseenter',function(){
    video.style.opacity = '1'
})
vid_box.addEventListener('mouseleave',function(){ 
       video.style.opacity = '0'

})

//------------------navbar---------------------
let navbar = document.querySelector(".navbar");
let bars  = document.querySelector('.nav-bar i');
let close = document.querySelector('.header i')
bars.addEventListener('mouseenter',function(){
    cursor.style.transform = 'scale(5)';
})
bars.addEventListener('mouseleave',function(){
    cursor.style.transform = 'scale(1)';
})

bars.addEventListener('click' ,function(){
    navbar.style.right = '0%'
    navbar.style.opacity = '1'
})
close.addEventListener('click', function(){
    navbar.style.right = '-23%'
    navbar.style.opacity = '0'
})