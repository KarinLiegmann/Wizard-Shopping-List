import Button from './Button/Button'
import Inputfield from './Form'

export default function Form() {
    return (
        <form>
            <Inputfield type="text" label="Add Item to Your Shopping List" placeholder="Add your Item here..." />
            <Button type="submit" text="Add to List" />
        </form>
    )
}