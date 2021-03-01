const navi = document.getElementsByClassName('.navi');
const openMenu = document.getElementsByClassName('.openmenu');
const closeMenu = document.getElementsByClassName('.closemenu')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);

function show(){
    navi.style.display = 'flex';

}

function close(){
    openMenu.style.top = '-100'
}
const newLocal = 'navi';
console.log(newLocal)