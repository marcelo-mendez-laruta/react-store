import axios from "axios";
export async function getStoreItemsList() {
    let items = await axios.get('https://fakestoreapi.com/products');
    return items.data;
}