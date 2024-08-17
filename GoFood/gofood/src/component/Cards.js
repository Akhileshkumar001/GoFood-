// import React from 'react';
// import './CardGrid.css'; // Import your custom CSS file

// const Card = ({ foodItems, foodCat }) => {
//   return (
//     <div className="card-grid">
//       {foodCat.map((itemcat) => (
//         <div key={itemcat.CategoryName} className="category-section">
//           <h2>{itemcat.CategoryName}</h2>
//           <hr />
//           <div className="grid-container">
//             {foodItems
//               .filter((item) => item.CategoryName === itemcat.CategoryName)
//               .map((filterItem) => (
//                 <div key={filterItem.name} className="card">
//                   <img src={filterItem.img} alt={filterItem.name} className="card-img-top" />
//                   <div className="card-body">
//                     <h5 className="card-title">{filterItem.name}</h5>
//                     <p className="card-text">{filterItem.description}</p>
//                     <div className="card-options">
//                       {filterItem.options[0] && (
//                         <>
//                           {filterItem.options[0].half && (
//                             <div className="option">
//                               <label>Half:</label>
//                               <span>{filterItem.options[0].half} </span>
//                             </div>
//                           )}
//                           {filterItem.options[0].full && (
//                             <div className="option">
//                               <label>Full:</label>
//                               <span>{filterItem.options[0].full} </span>
//                             </div>
//                           )}
//                           {filterItem.options[0].regular && (
//                             <div className="option">
//                               <label>Regular:</label>
//                               <span>{filterItem.options[0].regular} </span>
//                             </div>
//                           )}
//                           {filterItem.options[0].medium && (
//                             <div className="option">
//                               <label>Medium:</label>
//                               <span>{filterItem.options[0].medium} </span>
//                             </div>
//                           )}
//                           {filterItem.options[0].large && (
//                             <div className="option">
//                               <label>Large:</label>
//                               <span>{filterItem.options[0].large} </span>
//                             </div>
//                           )}
//                         </>
//                       )}
//                     </div>
//                     <div className="card-footer">
//                       <select className='quantity-select'>
//                         {Array.from(Array(6), (e, i) => (
//                           <option key={i + 1} value={i + 1}>{i + 1}</option>
//                         ))}
//                       </select>

//                       <select className='size-select'>
//                         <option value="Full">Full</option>
//                         <option value="Half">Half</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;


// import React, { useState } from 'react';
// import './CardGrid.css'; 
// import{useCart,useDispatchCart} from './ContextReducer'
// // import { options } from '../../../../backend/routes/authRoutes';
// const Card = ({ foodItems, foodCat }) => {
//     let dispatch=useDispatchCart();
//     let data=useCart();
//   const [selectedSize, setSelectedSize] = useState("");
// const [qty,setQty]=useState(1)
// const [size,setSize]=useState('')
//   const handleSizeChange = (e) => {
//     setSelectedSize(e.target.value);
//   };
// const AddCard=async()=>{
//         if (!selectedSize) {
//           alert("Please select a size.");
//           return;
//         }
//     await dispatch({type:"ADD",id:foodItems._id,name:foodItems,price:finalPrice,qty:qty,size,size})
//     console.log(data);

// }
//   return (
//     <div className="card-grid">
//       {foodCat.map((itemcat) => (
//         <div key={itemcat.CategoryName} className="category-section">
//           <h2>{itemcat.CategoryName}</h2>
//           <hr />
//           <div className="grid-container">
//             {foodItems
//               .filter((item) => item.CategoryName === itemcat.CategoryName)
//               .map((filterItem) => (
//                 <div key={filterItem.name} className="card">
//                   <img src={filterItem.img} alt={filterItem.name} className="card-img-top" />
//                   <div className="card-body">
//                     <h5 className="card-title">{filterItem.name}</h5>
//                     <p className="card-text">{filterItem.description}</p>
//                     <div className="card-options">
//                       {filterItem.options[0] && (
//                         <>
//                           {Object.keys(filterItem.options[0]).map((size) => (
//                             <div className="option" key={size}>
//                               <label>{size.charAt(0).toUpperCase() + size.slice(1)}:</label>
//                               <span>{filterItem.options[0][size]} </span>
//                             </div>
//                           ))}
//                         </>
//                       )}
//                     </div>
//                     <div className="card-footer">
//                       <select
//                         className='quantity-select'
//                         value={selectedSize}
//                         onChange={handleSizeChange}
//                       >
//                         {Object.keys(filterItem.options[0] || {}).map((size) => (
//                           <option key={size} value={size} onChange={(e)=>setSize(e.target.value)}>
//                             {size.charAt(0).toUpperCase() + size.slice(1)}
//                           </option>
//                         ))}
//                       </select>
//                       <select className='quantity-select' onChange={(e)=>setQty(e.target.value)}>
//                         {Array.from(Array(6), (e, i) => (
//                           <option key={i + 1} value={i + 1}>{i + 1}</option>
//                         ))}
//                       </select>
//                     </div>
//                     <hr>
//                     </hr>
//                     <button className={'btn btn-success justify-center ms-2' } onClick={AddCard}>Add to Card</button>
//                   </div>
//                 </div>
//               ))}

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Card;


import React, { useState, useEffect } from 'react';
import './CardGrid.css';
import { useCart, useDispatchCart } from './ContextReducer';

const Card = ({ foodItems, foodCat }) => {
  const dispatch = useDispatchCart();
  const data = useCart();

  // Separate states for size and quantity
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQty, setSelectedQty] = useState({});

  // Handle size change for an item
  const handleSizeChange = (itemId, size) => {
    setSelectedSize(prevState => ({
      ...prevState,
      [itemId]: size,
    }));

    // Ensure to initialize quantity if not already set
    if (!selectedQty[itemId]) {
      setSelectedQty(prevState => ({
        ...prevState,
        [itemId]: 1,
      }));
    }
  };

  // Handle quantity change for an item
  const handleQtyChange = (itemId, qty) => {
    setSelectedQty(prevState => ({
      ...prevState,
      [itemId]: qty,
    }));
  };

  // Function to add item to cart
  const addToCart = async (item) => {
    const size = selectedSize[item._id];
    const quantity = selectedQty[item._id] || 1;

    if (!size) {
      alert("Please select a size.");
      return;
    }

    const finalPrice = item.options[0][size] * quantity;

    dispatch({
      type: "ADD",
      id: item._id,
      name: item.name,
      price: finalPrice,
      qty: quantity,
      size: size,
    });

    // Move console.log into useEffect to track the update
    console.log("Item added to cart:", item.name, "Size:", size, "Qty:", quantity, "Price:", finalPrice);
  };

  // useEffect to log the cart data after dispatching the action
  useEffect(() => {
    console.log("Updated cart data:", data);
  }, [data]); // Runs every time `data` is updated

  return (
    <div className="card-grid">
      {foodCat.map((itemCat) => (
        <div key={itemCat.CategoryName} className="category-section">
          <h2>{itemCat.CategoryName}</h2>
          <hr />
          <div className="grid-container">
            {foodItems
              .filter((item) => item.CategoryName === itemCat.CategoryName)
              .map((item) => {
                const selectedItemSize = selectedSize[item._id] || "";
                const selectedItemQty = selectedQty[item._id] || 1;

                return (
                  <div key={item._id} className="card">
                    <img src={item.img} alt={item.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="card-options">
                        {item.options[0] && (
                          <>
                            {Object.keys(item.options[0]).map((size) =>
                              size !== '_id' ? (
                                <div className="option" key={size}>
                                  <label>{size.charAt(0).toUpperCase() + size.slice(1)}:</label>
                                  <span>{item.options[0][size]}</span>
                                </div>
                              ) : null
                            )}
                          </>
                        )}
                      </div>
                      <div className="card-footer">
                        <select
                          className='size-select'
                          value={selectedItemSize}
                          onChange={(e) => handleSizeChange(item._id, e.target.value)}
                        >
                          <option value="">Select Size</option>
                          {Object.keys(item.options[0] || {}).map((size) =>
                            size !== '_id' ? (
                              <option key={size} value={size}>
                                {size.charAt(0).toUpperCase() + size.slice(1)}
                              </option>
                            ) : null
                          )}
                        </select>
                        <select
                          className='quantity-select'
                          value={selectedItemQty}
                          onChange={(e) => handleQtyChange(item._id, e.target.value)}
                        >
                          {Array.from(Array(6), (e, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          ))}
                        </select>
                      </div>
                      <hr />
                      <button
                        className="btn btn-success justify-center ms-2"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
