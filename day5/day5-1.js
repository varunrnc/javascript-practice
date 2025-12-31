const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Printer", price: 9000 }
];

// Day 5 TASKS (REAL PROJECT TASKS)

// Task 1: Sort Products by Price (Low → High)
console.log('Products Low to High');
const productLtoH = [...products]
    .sort((a,b) => a.price - b.price)
    .map(item => item.name);
console.log(productLtoH);

// Task 2: Sort Products by Price (High → Low)
console.log('Products High to Low');
const productHtoL = [...products]
    .sort((a,b) => b.price - a.price)
    .map(item => item.name);
console.log(productHtoL);

// Task 3: Pagination Logic (Page 1)
console.log('2 products per page');
const page1 = products.slice(0,2);
console.log(page1);

// Task 4: Pagination Logic (Page 2)
console.log('2 products per page');
const page2 = products.slice(2,4);
console.log(page2);

// Task 5: Remove a Product (Admin Action)
console.log('Remove product with id = 3');
const productIndex = products.findIndex(item => item.id == 3);
// const deleteProduct = products.splice(productIndex,1);
if(productIndex !== -1){
    products.splice(productIndex,1);
    console.log('Product Deleted');
    
}else{
    console.log('Product Not Found');
    
}




