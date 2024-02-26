import Button from "./button";

async function sampleProducts(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}


async function CategoryList() {

    let products = await sampleProducts();
    return ( <div>
     <h5>Products</h5>
      {products.map((item, index) => (
        <div key={index}>
        <h1 key={index}>{item.title}</h1>
        <Button  price={item.price}></Button>

        </div>
      ))}
      <br></br>
    </div> );
}

export default CategoryList;