
import { firestore } from '../firebase';
import { getDocs, collection } from "firebase/firestore";

export async function getCategories() {
    let categories = [];
    const querySnapshot = await getDocs(collection(firestore, "categories"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let category = doc.data();
        category.id = doc.id;
        categories.push(category);
    });
    return categories
}