import React, { useContext } from 'react'
import { Cartcontext } from './Cart'

const Items = ({title,quantity,price,description,img,id}) => {
    const {removeItem,increment,decrement} = useContext(Cartcontext)
    return (
        <>
        <div className="items-info">
                          <div className="product-img">
                              <img src={img} alt="" />
                          </div>
                          <div className="title">
                              <h2>{title}</h2>
                              <p>{description}</p>
                          </div>
                          <div className="add-minus-quantity">
                              <i className="fas fa-minus" onClick={()=>decrement(id)} ></i> <input type="text" placeholder={quantity}  />
                              <i className="fas fa-plus" onClick={()=>increment(id)}></i>
                          </div>
                          <div className="price">
                              <h3>{price}$</h3>
                          </div>
                          <div className="remove-item">
                              <i className="fas fa-trash-alt remove" onClick={()=>removeItem(id)}></i>
                          </div>
                      </div>
                      <hr />  
      </>
    )
}

export default Items
