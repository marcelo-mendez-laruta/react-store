import { createContext, useContext } from "react"
import { useState, useEffect } from "react"
import { getAllProducts } from '../services/productsServices'
import { getCategories } from '../services/categoriesServices'
import { getMyOrders,addNewOrder } from '../services/ordersServices'

const StoreContext = createContext([])
export const useStoreContext = () => useContext(StoreContext)

const StoreContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartState, setCartState] = useState(false);
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState([]);
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(0);
	const [myOrders, setMyOrders] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			let productsList = await getAllProducts();
			setProducts(productsList);
			let categories = await getCategories();
			setCategories(categories);
		}
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);
	function addProduct(product) {
		setCart(cart.push(product))
	}
	async function getProduct(id) {
		let product = {};
		products.forEach(p => {
			if (p.id === id) {
				product = p;
			}
		})
		setProduct(product);
	}
	async function getAllOrders(id) {
		let orders = await getMyOrders(id);
		setMyOrders(orders);
	}
	const clearCart = () => {
		setCart([])
	}
	const clearproduct = (id) => {
		setCart(cart.filter((product) => product.id !== id))
	}
	const getCategory = (id) => {
		setCategory(categories.find((category) => category.id === id));
	}
	const addtoCart = () => {
		let newProduct = { ...product, quantity: quantity };
		let newcart = cart;
		if (newcart.some(product => product.id === newProduct.id)) {
			newcart.forEach(product => {
				if (product.id === newProduct.id) {
					product.quantity += newProduct.quantity;
				}
			});
		} else {
			newcart.push(newProduct);
		}
		setCart(newcart);
		if (!cartState) setCartState(true);
	};
	const addOrder = async (userId,total) => {
		let order = { clientId: userId, items: cart , totalPrice: total, createdOn: new Date() };
		addNewOrder(order)
		clearCart();
		setCartState(false);	
		let orders = await getMyOrders(userId);
		setMyOrders(orders);
	}
	const deletItemCart = (id) => {
		let newcart = [];
		cart.forEach(product => {
			if (product.id !== id) {
				newcart.push(product);
			}
		});
		setCart(newcart);
		if (newcart.length === 0) setCartState(false);
	}
	return (
		<StoreContext.Provider
			value={{
				cart,
				setCart,
				addtoCart,
				addProduct,
				getProduct,
				clearCart,
				clearproduct,
				categories,
				category,
				getCategory,
				products,
				product,
				myOrders,
				getAllOrders,
				addOrder,
				quantity,
				setQuantity,
				deletItemCart,
				cartState
			}}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
