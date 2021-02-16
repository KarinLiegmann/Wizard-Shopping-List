import './ShoppingList.css'

import ShoppingItem from './ShoppingItem'

export default function ShoppingList({ shoppingItems }) {
    return shoppingItems.map(shoppingItem => <ShoppingItem isDone={shoppingItem.isDone} title={shoppingItem.title} />)
}
