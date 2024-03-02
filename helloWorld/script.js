const btnElement=document.querySelector('button');
const spanElement=document.querySelector('span');

btnElement.addEventListener('click',()=>{
     const name=prompt('please enter your name: ')
     spanElement.textContent=name;
});