import React from 'react'

const Order = () => {
    // const [orderItem, setOrderItem] = useState("");
    // const [quantity, setQuantity] = useState("1");
 
    // const menuItemChosen = (event) => setOrderItem(event.value);
    // const menuQuantityChosen = (event) => setQuantity(event.value);

    // const auth = useSelector((state) => state.auth);

    // const submitOrder = () => {
    //     if (orderItem === "") return;
    //     fetch(ADD_ORDER_URL, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             order_item: orderItem,
    //             quantity,
    //             ordered_by: auth.email || 'Unknown!',
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(response => console.log("Success", JSON.stringify(response)))
    //     .catch(error => console.error(error));
    // }


    return (
    <div>Order
         {/* <div className="form-wrapper">
                <form>
                    <label className="form-label">I'd like to order...</label><br />
                    <select 
                        value={orderItem} 
                        onChange={(event) => menuItemChosen(event)}
                        className="menu-select"
                    >
                        <option value="" defaultValue disabled hidden>Menu</option>
                        <option value="Starters">Starters</option>
                        <option value="Pizza Option 1">Pizza Option 1</option>
                        <option value="Pizza Option 2">Pizza Option 2</option>
                        <option value="Pizza Option 3">Pizza Option 3</option>
                    </select><br />
                    <label className="qty-label">Qty:</label>
                    <select value={quantity} onChange={(event) => menuQuantityChosen(event)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button type="button" className="order-btn" onClick={() => submitOrder()}>Order It!</button>
                </form>
            </div> */}
    </div>
  )
    }
export default Order