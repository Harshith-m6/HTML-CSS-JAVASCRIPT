// constructor function (Old-Traditional way of creating the Objects in JS before the introduction of ES6(echma script))

function product(productId , productName , productPrice)
{
    this.productId = productId;
    this.productName = productName;
    this.productPrice = productPrice

    this.displayProduct = function(){
        console.log(`${this.productId}| ${this.productName}| ${this.productPrice}`);
        
    }
};

let product1 = new product(101 , "Mobile" , 100000.00);
product1.displayProduct();

let product2 = new product(102 , "Laptop" , 200000.00)
product2.displayProduct();