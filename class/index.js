class Product{
    static numberOfUsers = 0;
    constructor(name,price){
        this.name = name,
        this.price = price,
        Product.numberOfUsers++
    }
    displayProduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Price : $${this.price.toFixed(2)}`);
        return this   // method chaining
    }
    displayFeatures(){
        console.log(`You don't have any special offers.`);
    }
    calculateTotal(salesTax){
        return (this.price + (this.price * salesTax)).toFixed(2)
    }
    static totalUsers(){
        console.log(`Total number of users : ${Product.numberOfUsers}`);
    }
}



class plusMembers extends Product{
    static numberOfPlusMembers;
    constructor(name,price){
        super(name,price);
        this.discount = 0.05
        this.validDays = 30;
        plusMembers.numofPlusMembers++;
    }
    // overriding
    displayFeatures(){
        console.log(`${this.name} You have 5% discount for every product you purchase, this offer valid to ${this.validDays} days.`);
    }
    calculateTotalWithDiscount(salesTax){
        return ((this.price - this.price * this.discount) + (this.price * salesTax)).toFixed(2)
    }
}



const salesTax = 0.06
const product1 = new Product('shirt',19.99);
const product2 = new Product('pant',21.999);

const plusMemberOne = new plusMembers('tshirt',10.99)



product2.displayProduct();
console.log("Total : ",product2.calculateTotal(salesTax));
Product.totalUsers()
console.log(plusMemberOne.calculateTotal(salesTax));
console.log("Total : ",product1.calculateTotal(salesTax));

let var1 = product1.displayProduct().calculateTotal(salesTax)  // method chaining
console.log(var1);

