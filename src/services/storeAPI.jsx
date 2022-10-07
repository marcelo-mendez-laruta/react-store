import axios from "axios";
export async function getStoreItemsList() {
    let items = await axios.get('https://fakestoreapi.com/products');
    return items.data;
}
export async function getStoreItem(id) {
    let item = await axios.get('https://fakestoreapi.com/products/' + id);
    return item.data;
}
export async function getCategories() {
    let categories = await axios.get('https://fakestoreapi.com/products/categories');
    return categories.data;
}
export async function getStoreItemsByCategory(category) {
    let items = await axios.get('https://fakestoreapi.com/products/category/' + category);
    return items.data;
}