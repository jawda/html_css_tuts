import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as
    ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])

    //counts up the quantities for every item in cart returns total for button
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    //handle open and close
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    // get quantity of an item 
    function getItemQuantity(id: number) {
        // if we have item return quantity otherwise return 0
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    // increase quantity of an item
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            // if current item doesnt exist add item with quantity 1
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    //if item found take current item and add 1 to it if exists
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        //else return item with no changes
                        return item
                    }
                })
            }
        })
    }

    //decrease quantity of an item
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            // if quantity is 1 then get rid of it
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    //if item found and greater than 1 take current item and minus 1 to it if exists
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        //else return item with no changes
                        return item
                    }
                })
            }
        })
    }

    //remove item from cart
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }



    return (
        <ShoppingCartContext.Provider 
        value = {{ 
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}