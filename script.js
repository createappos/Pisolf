const logo = document.querySelector('.logo');
const wrapper = document.querySelector('.wrapper');
//search
const search_icon = document.querySelector('.fa-solid');
const searchwrapper = document.querySelector('.searchwrapper');
const val_search = document.querySelector('.pagesjumper');
let letters = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '\"', ',', '<', '.', '>', '/', '?'];
//dropbox
const dropwrapper = document.querySelector('.dropwrapper');
const dropbtn = document.querySelector('.fa-bars');

let link = 'nothing';

logo.addEventListener('click',()=>{
    wrapper.classList.toggle('actived');
})
search_icon.addEventListener('click',()=>{
    var inbox = document.querySelector('.inbox');
    var strboy = inbox.value;
    let status = false;
    let times = 0;
    for(const letter of letters){
        if(strboy.includes(letter) === true){
            status = true;
            break;
        }
        times = times + 1
        // else{
        //     status = false;
        //     break;
        // }
    }
    let final_result = strboy; 
    for(let i = 0;i<=times;i++){
        final_result = final_result.replace(' ','');
    }
    if(status == true){
        console.log(final_result);
        location.replace("project.html");
    }
})
const input = document.querySelector('input')
input.addEventListener('keyup',(e)=>{
    var inbox = document.querySelector('.inbox');
    var strboy = inbox.value;
    let status = false;
    let times = 0;
    for(const letter of letters){
        if(strboy.includes(letter) === true){
            status = true;
            break;
        }
        times = times + 1
        // else{
        //     status = false;
        //     break;
        // }
    }
    let final_result = strboy; 
    for(let i = 0;i<=times;i++){
        final_result = final_result.replace(' ','');
    }
    if(e.code === 'Enter' && status === true){
        console.log(final_result);
        location.replace("project.html");
    }
})

dropbtn.addEventListener('click',()=>{
    dropwrapper.classList.toggle('actived');
    dropbtn.classList.toggle('actived');
})
document.onclick = function(elements){
    if(elements.target.id !== 'swrapper' && elements.target.id !== 'sicon' && elements.target.id !== 'stext'){
        searchwrapper.classList.remove('actived');
    }
}

searchwrapper.onclick = function(){
    searchwrapper.classList.add('actived');
}