import {useState} from 'react';
import {Form} from 'react-bootstrap';
const CartItem = ({item, addItem}) => {
    const [quantity, setQuantity] = useState(item.qty);
    return (
        <Form.Control
            as='select'
            value={quantity}
            onChange={(e) => {
                setQuantity(e.target.value);
                addItem(e, item);
            }}
        >
            {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                    {x + 1}
                </option>
            ))}
        </Form.Control>
    );
};

export default CartItem;
