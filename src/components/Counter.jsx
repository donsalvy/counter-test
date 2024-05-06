 
import React, {useState} from "react";

function Counter(){


    const[name, setName] = useState("Guest")
    const[quantity, setQuantity] = useState(1)
    const[comment, setComment] = useState("write your description here")
    const[payment, setPayment] = useState("")
    const[shipping,setShipping] = useState("")


    function handleNameChange(event){
        setName(event.target.value)
    }


    function handleQuantityChange(event){
    setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }

    function handlePaymentChange(){
        setPayment(event.target.value)
    }

    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    
   
    // const[count, setCount]= useState(0);

    // const increaseCount = () => {
    //     setCount(count + 1)
    //      }

    //      const resetCount = () => {
    //         setCount(0)
    //      }

    //      const decreaseCount = ()=> {
    //         setCount(count - 1)
    //      }

return(

<div className="container">
 
<input type="text" value={name} onChange={handleNameChange} />
<p> Name: {name}</p>  

<input type="number" value={quantity} onChange={handleQuantityChange} />
<p> Quantity: {quantity}</p>

<textarea value={comment} onChange={handleCommentChange} name="" id="" cols="30" rows="8"></textarea>
<p>comment: {comment}</p>
 
 <select value={payment} onChange={handlePaymentChange}>
   <option value="">select an option</option>
   <option value="Visa">Visa</option>
   <option value="MasterCard">MasterCard</option>
   <option value="GiftCard">GiftCard</option>
   <option value="PayPal">PayPal</option>

 </select>
 <p> payment:{payment}</p>

<label>
 
    <input type="radio" value="pick up" 
      checked ={shipping === "pick up"}
      onChange={handleShippingChange}

    />
pick up
</label>
<label>
 
    <input type="radio" value="delivery" 
      checked ={shipping === "delivery"}
      onChange={handleShippingChange}

    />
delivery
</label>

<p>shipping: {shipping}</p>

 


 {/* <p> Count:{count}</p>
 <button onClick={increaseCount}>increment</button>
 
 <button onClick={resetCount}>reset</button>
 <button onClick={decreaseCount}>decrease</button> */}


</div>)
}


export default Counter;