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


