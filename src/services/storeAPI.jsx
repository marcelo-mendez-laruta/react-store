import axios from "axios";
export async function getStoreItemsList() {
    let items = await axios.get('https://fakestoreapi.com/products');
    return items.data;
}
export async function getStoreItem(id) {
    let item = await axios.get('https://fakestoreapi.com/products/' + id);
    return item.data;
}