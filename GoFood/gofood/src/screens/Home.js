// import React from 'react'
// import Navebar from '../component/Navebar'
// import Cards from '../component/Cards'
// import Footer from '../component/Footer'
// import Carousel from '../component/Carousel'
// import { useState, useEffect } from 'react'

// export default function () {

//     const [foodItems, setFoodItem] = useState([]);
//     const [foodCat, setFoodCat] = useState([]);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);




//     useEffect(() => {
//         try {
//             const FetchFoodItems = async () => {
//                 try {

//                     const response = await fetch('http://localhost:3005/foodItem');

//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }

//                     const FoodItems = await response.json();
//                     console.log(FoodItems);


//                     setFoodItem(FoodItems);


//                     setLoading(false);
//                 } catch (error) {
//                     setError(error);
//                     setLoading(false);
//                 }
//                 if (loading) return <p>Loading...</p>;
//                 if (error) return <p>Error: {error.message}</p>;
//             }
//             FetchFoodItems()
//         } catch (error) {
//             console.log("error fetchinfg data");

//         }
//         try {
//             const FetchFoodCat = async () => {
//                 try {

//                     console.log("hellow");

//                     const response = await fetch('http://localhost:3005/foodCategorie');

//                     if (!response.ok) {
//                         throw new Error('Network response was not ok');
//                     }

//                     const FoodCat = await response.json();
//                     console.log(FoodCat);

//                     setFoodCat(FoodCat);


//                     setLoading(false);
//                 } catch (error) {
//                     setError(error);
//                     setLoading(false);
//                 }
//                 if (loading) return <p>Loading...</p>;
//                 if (error) return <p>Error: {error.message}</p>;
//             }
//             FetchFoodCat()
//         } catch (error) {
//             console.log("error fetchinfg data");

//         }
//     }, [])

//     return (
//         <div>
//             <div>
//                 <Navebar />
//             </div>
//             <div>
//                 <Carousel />
//             </div>
//             <div className='container'>

//                 <Cards foodItems={foodItems} foodCat={foodCat}/>
//             </div>
//             <div>
//                 <Footer />
//             </div>


//         </div>
//     )
// }


// import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navebar';
import Cards from '../component/Cardss';
import Footer from '../component/Footer';
import Carousel from '../component/Carousel';
import './Home.css'

export default function Home() {
    // const [foodItems, setFoodItem] = useState([]);
    // const [foodCat, setFoodCat] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchFoodItems = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3005/foodItems');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const foodItems = await response.json();
    //             console.log(foodItems);

    //             setFoodItem(foodItems);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };

    //     const fetchFoodCat = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3005/foodCategories');
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const foodCat = await response.json();
    //             console.log(foodCat);

    //             setFoodCat(foodCat);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     };


    //     fetchFoodItems();
    //     fetchFoodCat();

    // }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Navbar />
            <Carousel />
            <div className="container">
                {/* <Cards foodItems={foodItems} foodCat={foodCat} /> */}
                <Cards/>
            </div>
            <Footer />
        </div>
    );
}
