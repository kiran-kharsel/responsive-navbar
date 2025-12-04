const menuBtn = document.querySelector('.menu-icon');


menuBtn.addEventListener('click', function(){
    document.querySelector('.nav-links').classList.toggle('show');
    console.log('working');
    
})