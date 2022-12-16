'use strict';

const btn = document.querySelector('button');
btn.addEventListener('click', () =>{
    //alert(userName);
    let userName = document.querySelector('input').value;
    btn.insertAdjacentHTML('afterend', `${userName}, рад приветствовать тебя на моей странице!`)
})

