const products = ["Jeans", "Blusa", "Sudadera", "Gorra"];


module.exports =  class Product{
    constructor(name){
        this.name = name;
    }
    save(){
        products.push(this.name);
    }

    static fetchAll(){
        return products;
    }
};