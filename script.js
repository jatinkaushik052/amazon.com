console.log("Hello my Script")
let bagItems;


function addToBag(itemId){
    bagItems.push(itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon()
}

function displayBagIcon(){
    let bagitemCountElement=document.querySelector(".bagItem")
    if(bagItems.length>0){
        bagitemCountElement.style.visibility="visible"
        bagitemCountElement.innerText= bagItems.length
    }
    else{
        bagitemCountElement.style.visibility="hidden"
    }
}


const itemContainerElement = document.querySelector(".hero-card");
let innerHTML='';



function displayItemShow(){
    items.forEach(item =>{
        innerHTML += `<div class='card'> 
        <h1 class="itemDiscount">${item.item_Discount}</h1>
        <img  class="itemImg" src=${item.item_image} alt='kurtapajma' />
        <a href='/'>${item.item_Price}</a>
        <div class="btn">
            <button id="cartbtn" class="cartButton" type='submit' onClick=addToBag(${item.id})>Add to Cart</button>
            <button id="buybtn" type="submit">Buy</button> 
        </div>
        </div>`
    })
    itemContainerElement.innerHTML=innerHTML;
}

 

function onLoad(){
    let bagItemStr= localStorage.getItem('bagItems')
    bagItems= bagItemStr ? JSON.parse(bagItemStr):[]
    displayItemShow()
    displayBagIcon()
}
onLoad()
