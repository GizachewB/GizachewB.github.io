products=[];
class Product{
    constructor(id, name, price, description){
        this._id=id;
        this._name=name;
        this._price=price;
        this._description=description;
    }
    getName(){
        return this._name;
    }
    setName(name){
        this._name=name;
    }
    getId(){
        return this._id;
    }
    setId(id){
        this._id=id;
    }
    getPrice(){
        return this._price;
    }
    setPrice(price){
        this._price=price;
    }
    getDescription(){
        return this._description;
    }
    setDescription(decription){
        this._description=description;
    }
    static getAllProducts(){
        return products;
    }
}
products=[new Product(1,"Apple airpod",'$6',"The best ever!"),
new Product(2,"Samsung pod",'$4',"this is the best"),
new Product(3,"Beat",'$2',"Good for recreation"),
new Product(3,"Airphone",'$1',"Wired not comfortable."),
];
module.exports=Product;