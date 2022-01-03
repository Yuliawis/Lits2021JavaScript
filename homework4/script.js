
 
// let clasBox = document.getElementsByClassName("box"); 
// let idBox = document.getElementsById("boxId") 
// idBox.onclick = function (){ 
//     idBox.style.background = "blue"; 
//     let margin = idBox.style.marginLeft = "300px"; 
//     alert('You changed color'); 
//     document.body.style.background = "green" 
// } 
// // let clasBox = document.getElementsByClassName 
 
// clasBox.onclick = function (){ 
//     clasBox[0].classList.toogle("box-color") 
 
//     console(clasBox[0]) 
// } 
 
// let idBox = document.getElementById("boxId"); 
// console.log(idBox); 
 
 
 
let clasBox = document.getElementById("boxId"); 
clasBox.onclick = function () { 
    clasBox.classList.toggle("box-color") 
} 
 
clasBox.onmousemove = function(){ 
    console.log('Ти навів на елемент') 
    document.body.style.background = '#B4E17A'; 
} 
clasBox.onmouseleave = function(){ 
    console.log('Ти забрав курсор з елемента') 
    document.body.style.background = '#eab676'; 
}