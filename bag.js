console.log("Hello Add to cart")
let bagItemobjects;
onLoad()
function onLoad() {
    displayBagIcon()
    loadbagItemobjects()
    displayBagItems()
    displayBagSummry()
}
function displayBagSummry() {
    let bagSummryElement = document.querySelector('.bagRight');

    let totalItem = bagItemobjects.length;
    let totalMRP = 0;
    let totalDiscount = 143;
    bagItemobjects.forEach(bagItem => {
        totalMRP += bagItem.item_Price;
    })
    let finalPayment = totalMRP - totalDiscount + 99;



    bagSummryElement.innerHTML = `<p>PRICE DETAILS (${totalItem}) </p>
<div class="totolPrice">
    <p>Total MRP </p>
    <p>₹ ${totalMRP}</p>
</div>
<div class="discountPrice">
    <p>Discount on MRP</p>
    <p style="color: rgb(34, 138, 34);">₹ -143</p>
</div>
<div class="conveniencePrice">
    <p>Convenience Fee</p>
    <p>₹ 99</p>
</div>
<hr>
<div class="totalPrice">
    <p>Total Amount</p>
    <p>₹ ${finalPayment}</p>
</div>
<button class="placeOrder">Place Order</button>`
}
function loadbagItemobjects() {
    console.log(bagItems)
    bagItemobjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    })
    console.log(bagItemobjects)
}
function displayBagItems() {
    let containerElement = document.querySelector('.bagLeft')
    let innerHTML = ''
    bagItemobjects.forEach(bagItem => {
        innerHTML += generateItemHtml(bagItem)

    });
    containerElement.innerHTML = innerHTML;
}
function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId)
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    loadbagItemobjects()
    displayBagIcon()
    displayBagItems()

}
function generateItemHtml(item) {
    return `<div class="bagLeftItem">
    <div class="leftItemContainer">
        <img class="bagItemImg" src=${item.item_image}} alt="">
        <div class="itemDetail">
            <h1 class="bagItemDis">₹${item.item_Discount}</h1>
            <p class="itemPrice">₹${item.item_Price}</p>
        </div>
    </div>
  <div class="delItem"><span onclick="removeFromBag(${item.id})"><i class='bx bx-x-circle'></i></span></div>
</div>`
}

