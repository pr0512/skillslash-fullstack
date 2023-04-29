// object
const product ={
    name:"Real Apple Juice",
    mrp:113,
    discountP:19,
    quantity:1,
    isAd: true,
};
product.finalPrice = function(){
    console.log("Final Price",product.mrp,product.discountP);
    const discount = product.mrp*product.discountP/100; 
    return Math.round (product.mrp-discount);

}
console.log(product.finalPrice());
