import './ShoppingList.css'

import ShoppingItems from './ShoppingItems'

export default function ShoppingList({ ShoppingItems }) {
    return ShoppingItems.map(shoppingItem => <ShoppingItem isDone={shoppingItem.isDone} item={shoppingItem.item} />)
}
