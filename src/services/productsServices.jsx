
import { firestore } from '../firebase';
import { addDoc,getDocs, collection } from "firebase/firestore";

export async function getAllProducts() {
    let products = [];
    const querySnapshot = await getDocs(collection(firestore, "products"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let product = doc.data();
        product.id = doc.id;
        products.push(product);
        
    });
    return products
}
export const addProduct = async (product) => {
    const response=await addDoc(collection(firestore, "products"), product);
    let newProduct=response.data();
    newProduct.id=response.id;
    return newProduct;
}