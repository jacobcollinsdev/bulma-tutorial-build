//Mobile Menu
const navbarMenu = document.querySelector('#nav-links');
const burgerIcon = document.querySelector('#burger');

burgerIcon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('is-active');
    burgerIcon.classList.toggle('is-active');
})

//Tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', (e)=>{
        e.preventDefault();
        tabs.forEach(item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach((box) => {
            box.getAttribute('id') === target ? box.classList.remove('is-hidden') : box.classList.add('is-hidden')
        })
    })
});

// Modal Toggle
const signUpButton = document.querySelector('#sign-up');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-background');

signUpButton.addEventListener('click', ()=>{
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', ()=>{
    modal.classList.remove('is-active');
});