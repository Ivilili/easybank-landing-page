const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

header.addEventListener('click', function(e){
    e.preventDefault();

    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElements.forEach(e => {
            e.classList.remove('fade-in');
            e.classList.add('fade-out');
        }) 
    }else{
        header.classList.add('open');
        fadeElements.forEach(e => {
            e.classList.remove('fade-out');
            e.classList.add('fade-in')
        })
       
    }
});