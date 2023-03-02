// var main = document.getElementById('main')
// console.log(main)

// var djeja = document.getElementsByTagName('h1')
// console.log(djeja)
// djeja[1].style.color = "red"

// var par = document.getElementsByClassName('para')
// console.log(par)

// var ht = document.querySelector('h1')
// console.log(ht)

// var idt = document.querySelector('#main')
// console.log(idt)

// var clat = document.querySelector('.para')
// console.log(clat)

// var hts = document.querySelectorAll('h1')
// console.log(hts)

// var main = document.getElementById('main')
// // console.log(main.innerHTML)
// console.log(main.innerText)


// var main = document.getElementById('main')
// console.log(main.firstElementChild.innerText)
// console.log(main.lastElementChild.innerText)
// console.log(main.firstElementChild.nextElementSibling.nextElementSibling.innerText)
// console.log(main.lastElementChild.previousElementSibling.innerText)

// var main = document.querySelector('#main')
// var butt = document.createElement('button')
// butt.innerText = "ALAYA"
// main.appendChild(butt)

// var par = document.querySelector('.para')
// par.setAttribute('class','salem')



{/* <button onclick="Iheb('iheb')">Test</button> */}
// function Iheb(a){
//     alert('Hello DOM!!!'+a)
// }


// var btnP = document.querySelector('.btnPlus')
// var btnM = document.querySelector('.btnMoins') 

// btnP.addEventListener('click',function(){
//     btnP.previousElementSibling.innerHTML++
// })

// btnM.addEventListener('click',function(){    
//     if(btnM.nextElementSibling.innerHTML>0){
//         btnM.nextElementSibling.innerHTML--
//     }        
// })


// var btnPs = document.querySelectorAll('.btnPlus')
// var btnMs = document.querySelectorAll('.btnMoins') 

// for(let i = 0;i < btnPs.length; i++){
//     btnPs[i].addEventListener('click',function(){
//         btnPs[i].previousElementSibling.innerHTML++
//     })
// }

// for(let i = 0;i<btnMs.length;i++){
//     btnMs[i].addEventListener('click',function(){
//         if(btnMs[i].nextElementSibling.innerHTML>0){
//             btnMs[i].nextElementSibling.innerHTML--
//         }
        
//     })
// }




var main = document.querySelector('#main')
main.remove()