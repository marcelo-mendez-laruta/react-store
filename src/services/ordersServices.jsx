
import { firestore } from '../firebase';
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";

export async function getMyOrders(id) {
    let orders = [];
    const q = query(collection(firestore, "orders"), where("clientId", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let order = doc.data();
        order.id = doc.id;
        orders.push(order);
    });
    return orders
}
export async function addNewOrder(order) {
    let newOrder;
    const docRef = await addDoc(collection(firestore, "orders"), order);
    newOrder = { ...order, id: docRef.id };
    return newOrder;
}