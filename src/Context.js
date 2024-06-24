import { useState, createContext, useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({ children }) => {
    // const [cart, setCart] = useState(() => {
    //     const data = localStorage.getItem("cart");
    //     return data ? JSON.parse(data) : [];

    // })
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('counts')));
    const [totalPrice, setTotalPrice] = useState(0);
    const [itemPrices, setItemPrices] = useState([]);

    const [cart, setCart] = useState(() => {
        const data = localStorage.getItem("cart");
        try {
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Failed to parse cart data from localStorage:", e);
            return [];
        }
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const handleRemove = (item) => {
        const tempData = cart.filter(item1 => item1.id !== item.id)
        setCart(tempData)
    }

    useEffect(() => {
        localStorage.setItem('counts', JSON.stringify(count));
    }, [count]);

    useEffect(() => {
        const calculateTotalPrice = () => {
            let total = 0;
            const prices = cart.map(item => {
                const quantity = count[item.id] || 1;
                const itemTotal = item.price * quantity;
                total += itemTotal;
                return itemTotal;
            });
            setTotalPrice(total);
            setItemPrices(prices);
        };

        calculateTotalPrice();
    }, [count, cart]);


    const handleIncrement = (itemId) => {
        setCount(prevCount => ({
            ...prevCount,
            [itemId]: (prevCount[itemId] || 0) + 1
        }));
    };

    const handleDecrement = (itemId) => {
        if (count[itemId] && count[itemId] > 0) {
            setCount(prevCount => ({
                ...prevCount,
                [itemId]: prevCount[itemId] - 1
            }));
        }
    };

    return (
        <UserContext.Provider value={{ cart, addToCart, setCart, handleRemove, itemPrices, totalPrice, handleDecrement, handleIncrement, count }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }