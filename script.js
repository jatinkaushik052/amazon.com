console.log("Hello Amazon")
var i = 0;
document.querySelector('.cart-item').innerHTML = i;
document.getElementById('totalPr').innerHTML = i;

function AddtoCart() {
    i = i + 1
    document.querySelector('.cart-item').innerHTML = i;
    document.getElementById('totalPr').innerHTML = i;
    console.log(i)
    
}
// const p1= document.getElementById('p1');
function item1(){
   document.querySelector('.cartPage').addEventListener("click",()=>{
        console.log("first item is add")
    })

}
item1()
document.querySelector(".cart-icon").addEventListener("click",()=>{
    document.querySelector(".cartPage").style.display="block"
})
document.querySelector("#closebtn").addEventListener("click",()=>{
    document.querySelector(".cartPage").style.display="none"
})


