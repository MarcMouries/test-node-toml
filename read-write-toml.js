const fs = require('fs');
//const toml = require('toml');
const TOML = require('@iarna/toml')
const cTable = require('console.table');

const data = TOML.parse(fs.readFileSync('./products.toml', 'utf-8'));
console.log(data.products);


data.products[2] = CreateProduct("screwdriver", 515274937);

console.log("is array = " + Array.isArray(data.products));

const products = Object.keys(data.products);
console.log(products);
console.log();

console.log(data);
console.log(TOML.stringify(data));


var product = FindProduct("Nail");
if (product) {
    product.color = "pink";
}
console.table(data.products);

function CreateProduct(name, sku) {
    var product = new Object();
    product.name = name;
    product.sku = sku;
    return product;
}

function FindProduct(name) {
    //const products = Object.keys(data.products);
    for (const product of data.products) {
        if (product.name == name) {
        console.log(product.name);
        return product;
        }
    }
}