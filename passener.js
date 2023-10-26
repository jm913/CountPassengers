  
// let count= document.getElementById('count');
// let btn=document.getElementById('btn-increment');
// // let num=0;
// btn,addEventListener('click',()=>{
//     count.innerHTML=num++;  
    
// })

//  2. sir wala
let count= document.getElementById('count');
let btn=document.getElementById('btn-increment');
let num=0;
function inc(){
     // num=num+1;      // trick jab ese ho toh num +=1 b kr sakte hai  
     num+=1 ;
count.innerHTML=num;

} 
let pas=document.getElementById('p')
// save
function save(){
    // pas.innerHTML=num +"🤘"  +" - "       
    pas.innerHTML +=num +"🤘"  +" - "    
    count.innerHTML=0;
    
    console.log(pas)
}


// 3.sum 
// let a=10;
// let b=10;
// let c =10;

// function sum(){
//     let total =a+b+c
// console.log(total)
// }

