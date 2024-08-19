import React, { useState, useEffect, useContext } from 'react';
import './CardGrid.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import { FoodContext } from './ContextReducer'; // Adjust import path if needed
import { useCart, useDispatchCart } from './ContextReducer'; // Adjust import path if needed

const Card = () => {
  const { foodItems, foodCat, loading, error } = useContext(FoodContext); // Get foodCat from context
  const dispatch = useDispatchCart();
  const cartData = useCart();

  const [selectedSize, setSelectedSize] = useState({});
  const [selectedQty, setSelectedQty] = useState({});

  const handleSizeChange = (itemId, size) => {
    setSelectedSize(prevState => ({
      ...prevState,
      [itemId]: size,
    }));

    if (!selectedQty[itemId]) {
      setSelectedQty(prevState => ({
        ...prevState,
        [itemId]: 1,
      }));
    }
  };

  const handleQtyChange = (itemId, qty) => {
    setSelectedQty(prevState => ({
      ...prevState,
      [itemId]: qty,
    }));
  };

  const addToCart = async (item) => {
    let size = selectedSize[item._id];
    const quantity = selectedQty[item._id] || 1;

    if (!size) {
      toast.warn("Please select a size.", {
        position: "top-center",
      });
      return;
    }
      
            // toast.success("item is added!", {
            //   position: "top-center"
            // });
          
    

    const finalPrice = item.options[0][size] * quantity;

    dispatch({
      type: "ADD",
      id: item._id,
      name: item.name,
      price: finalPrice,
      qty: quantity,
      size: size,
    });
    // toast.success("Item added to cart!", {
    //   position: "top-center",
    //   autoClose: 2000, // Auto-close after 2 seconds
    // });

    console.log("Item added to cart:", item.name, "Size:", size, "Qty:", quantity, "Price:", finalPrice);
  };
  // alert("item selected !")
//   toast.success("Item added to cart!", {
//     position: "top-center",
//     autoClose: 2000, // Auto-close after 2 seconds
//   });
//   const notify = () => {
//     toast.success("item is added!", {
//       position: "top-center"
//     });
//   }

  useEffect(() => {
    console.log("Updated cart data:", cartData);
    
    // notify()
    
  }, [cartData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Get distinct categories
  const categories = [...new Set(foodItems.map(item => item.CategoryName))];

  return (
    <div className="card-grid">
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <hr />
          <div className="grid-container">
            {foodItems
              .filter((item) => item.CategoryName === category)
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
                    <ToastContainer autoClose={1000}/>
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
