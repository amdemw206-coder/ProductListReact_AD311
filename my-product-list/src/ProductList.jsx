export function Product(){
const product = [
    { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
    { id: 2, name: "Flashlight (2 Pack)", description: "Flashlights high lumens equipped with an LCD real-time battery level display.", price: 23.99 },
    { id: 3, name: "Adjustable Dumbbells, 20/30/45/70/90lbs Free Weight", description: "5 in 1 Multifunctional Dumbbell Set.", price: 109.99 },
]; 
    return(
        <ul>
        {product.map(list => (
            <li key={list.id}>
                <strong>Product Name:</strong> {list.name} | <strong>Product Description:</strong> {list.description} | <strong> Price: </strong> {list.price}
            </li>      
        ))}
        </ul>
    );
}