import React from "react";
import ReactDOM from "react-dom/client";
import { AiFillStar } from "react-icons/ai";

// const ele = document.createElement("h1")
// ele.innerHTML = "hello from js"
// const root = document.getElementById("root")
// root.appendChild(ele)


// const heading = React.createElement("h1", {}, "hello from react")
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// const firstName = React.createElement("h1", {
//     id: "title",
//     key: "2"
// }, "Abdul Rehman Mujtaba")

// console.log(firstName);

// const lastName = React.createElement("h1", {
//     id: "title",
// }, "Khan")

// const fullName = React.createElement("div", {}, [firstName, lastName])

/**Component : everything is a component in react , a component is function that returns a react element or anything
 * 
 * 1 Functional Component: returns a function
 * 2 Class Based Component: 
 */

// const jsx = (
//    <li key="1">this is jsx</li>
// )

// const ReactComponent = () => {
//     return (
//         <>
//           {/* {lastName}   //use JSX in react Component with Curly Braces */}
//            <ul>
//               <li>Name</li>
//               <li>Area</li>
//               <li>Work</li>
//            </ul>
//             {/* <ReactComponent1 /> */}

//             {jsx}

//             {ReactComponent1()}
//         </>
//     )
// }

// const ReactComponent1 = () => (
//     <>
//         <h1>React Component 1</h1>
//         <h2>This is a React Component</h2>
//     </>
// )

/** Header component
 *  Logo on left
 * search bar in middle
 * User icon on right
 *  CSS to make it look nice
 */

// const HeaderComponent = () => {
//     return(
//         <div style={{display:"flex", justifyContent:"space-evenly"}}>
//            <div>Logo</div>
//            <input placeholder="Search" type="text"></input>
//            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Fimage%2F153794&psig=AOvVaw0pBX6OjZKlJqKBExT2UuMo&ust=1699516908350000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCMihkf33s4IDFQAAAAAdAAAAABAE"></img>

//         </div>
//     )
// }

/**
 * HEADER
 * BODY
 * FOOTER
*/
const Header = () => {
    return (
        <div className="header" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <img style={{ width: "100px" }} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
            <input style={{ height: "20px", marginTop: "40px" }} placeholder="Search" type="text"></input>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>React</li>
                <li>Mujju</li>
            </ul>
        </div>
    )
}

const ShoesList =
    [

        {
            img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            title: "Nike Air Monarch IV",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "white",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
            title: "Nike Air Vapormax Plus",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "red",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
            title: "Nike Waffle One Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
            title: "Adidas Running Shoe",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Adidas",
            color: "black",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
            title: "Flat Slip On Pumps",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Vans",
            color: "green",
            category: "flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
            title: "Adidas Knit Ballet Flat",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Adidas",
            color: "black",
            category: "flats",
        },

        {
            img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
            title: "Vans Loafer Flats",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Vans",
            color: "white",
            category: "flats",
        },

        {
            img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
            title: "Nike Zoom Freak",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "green",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
            title: "Adidas Men's Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Adidas",
            color: "blue",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
            title: "PUMA BLACK-OCE",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Puma",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
            title: "Puma Pacer Future Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Puma",
            color: "red",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
            title: "Unisex-Adult Super",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Puma",
            color: "black",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
            title: "Puma Roma Basic Sneaker",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Puma",
            color: "white",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
            title: "Puma Pacer Future Doubleknit",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Puma",
            color: "black",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
            title: "Puma Fusion Evo Golf Shoe",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "100",
            company: "Puma",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
            title: "Vans Rainbow Chex Skate",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "100",
            company: "Vans",
            color: "red",
            category: "flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
            title: "Vans Low-Top Trainers",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "100",
            company: "Vans",
            color: "white",
            category: "sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
            title: "Vans Unisex Low-Top",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "100",
            company: "Vans",
            color: "blue",
            category: "sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
            title: "Nike Classic Bandana Sneakers",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Nike",
            color: "black",
            category: "sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
            title: "Vans Chunky High Heel",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Vans",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
            title: "Puma Slip On Stiletto High Heel",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "100",
            company: "puma",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
            title: "Nike DREAM PAIRS Court Shoes",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Nike",
            color: "red",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
            title: "Nike Air Vapormax Plus",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "red",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
            title: "Low Mid Block Heels",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "200",
            company: "Nike",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
            title: "Adidas Chunky High Heel",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Adidas",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
            title: "Adidas Amore Fashion Stilettos",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "150",
            company: "Adidas",
            color: "white",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
            title: "Adidas Bridal Sandals Glitter",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Adidas",
            color: "black",
            category: "heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
            title: "Adidas Wedding Prom Bridal",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "50",
            company: "Adidas",
            color: "black",
            category: "flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            title: "Nike Air Monarch IV",
            star: <AiFillStar className="rating-star" />,
            reviews: "(123 reviews)",
            prevPrice: "$140.00",
            newPrice: "200.00",
            company: "Nike",
            color: "White",
            category: "Sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71ZmRMKEZAL._AC_UL400_.jpg",
            title: "Nike Comfortable Flat Shoes",
            star: <AiFillStar className="rating-star" />,
            reviews: "(75 reviews)",
            prevPrice: "$65.00",
            newPrice: "50.00",
            company: "Nike",
            color: "Black",
            category: "Flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/41EFuiapfEL._AC_UL400_.jpg",
            title: "Adidas Elegant High Heels",
            star: <AiFillStar className="rating-star" />,
            reviews: "(90 reviews)",
            prevPrice: "$90.00",
            newPrice: "80.00",
            company: "Adidas",
            color: "Red",
            category: "Heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/71yFPJIvFXL._AC_UL400_.jpg",
            title: "Adidas Ultraboost",
            star: <AiFillStar className="rating-star" />,
            reviews: "(150 reviews)",
            prevPrice: "$180.00",
            newPrice: "160.00",
            company: "Adidas",
            color: "Black/White",
            category: "Sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/81DhgZxyOhL._AC_UL400_.jpg",
            title: "Nike Classic Ballet Flats",
            star: <AiFillStar className="rating-star" />,
            reviews: "(60 reviews)",
            prevPrice: "$50.00",
            newPrice: "40.00",
            company: "Nike",
            color: "Beige",
            category: "Flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/510qHKPn-7L._AC_UL400_.jpg",
            title: "Adidas Strappy Beach Sandals",
            star: <AiFillStar className="rating-star" />,
            reviews: "(45 reviews)",
            prevPrice: "$55.00",
            newPrice: "35.00",
            company: "Adidas",
            color: "Yellow",
            category: "Sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/51iyqgRaUPL._AC_UL400_.jpg",
            title: "Adidas Platform Heels",
            star: <AiFillStar className="rating-star" />,
            reviews: "(80 reviews)",
            prevPrice: "$75.00",
            newPrice: "65.00",
            company: "Adidas",
            color: "Black",
            category: "Heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/817Cya3EFSL._AC_UL400_.jpg",
            title: "Puma Running Shoes",
            star: <AiFillStar className="rating-star" />,
            reviews: "(110 reviews)",
            prevPrice: "$120.00",
            newPrice: "100.00",
            company: "Puma",
            color: "Gray/Red",
            category: "Sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/61gVdOyc+rL._AC_UL400_.jpg",
            title: "Nike Casual Slip-On Flats",
            star: <AiFillStar className="rating-star" />,
            reviews: "(70 reviews)",
            prevPrice: "$55.00",
            newPrice: "45.00",
            company: "Nike",
            color: "Navy Blue",
            category: "Flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/61QAZMeQ6gL._AC_UL400_.jpg",
            title: "Puma Leather Strap Sandals",
            star: <AiFillStar className="rating-star" />,
            reviews: "(65 reviews)",
            prevPrice: "$65.00",
            newPrice: "50.00",
            company: "Puma",
            color: "Brown",
            category: "Sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/51lFGrnWJnL._AC_UL400_.jpg",
            title: "Puma Classic Red Heels",
            star: <AiFillStar className="rating-star" />,
            reviews: "(95 reviews)",
            prevPrice: "$85.00",
            newPrice: "75.00",
            company: "Puma",
            color: "Red",
            category: "Heels",
        },
        {
            img: "https://m.media-amazon.com/images/I/715pLoSuQ1L._AC_UL400_.jpg",
            title: "Nike Balance Running Shoes",
            star: <AiFillStar className="rating-star" />,
            reviews: "(130 reviews)",
            prevPrice: "$150.00",
            newPrice: "120.00",
            company: "Nike",
            color: "Blue/White",
            category: "Sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/61j0fnLgRBL._AC_UL400_.jpg",
            title: "Adidas Casual Suede Flats",
            star: <AiFillStar className="rating-star" />,
            reviews: "(80 reviews)",
            prevPrice: "$60.00",
            newPrice: "45.00",
            company: "Adidas",
            color: "Taupe",
            category: "Flats",
        },
        {
            img: "https://m.media-amazon.com/images/I/513m1OoYi9L._AC_UL400_.jpg",
            title: "Puma Sporty Sandals",
            star: <AiFillStar className="rating-star" />,
            reviews: "(55 reviews)",
            prevPrice: "$40.00",
            newPrice: "30.00",
            company: "Puma",
            color: "Green/Black",
            category: "Sandals",
        },
        {
            img: "https://m.media-amazon.com/images/I/614funj30UL._AC_UL400_.jpg",
            title: "Puma Glamorous High Heels",
            star: <AiFillStar className="rating-star" />,
            reviews: "(100 reviews)",
            prevPrice: "$95.00",
            newPrice: "80.00",
            company: "Puma",
            color: "Silver",
            category: "Heels",
        },


    ];

//   img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
//   title: "Nike Air Monarch IV",
//   star: <AiFillStar className="rating-star" />,
//   reviews: "(123 reviews)",
//   prevPrice: "$140,00",
//   newPrice: "200",
//   company: "Nike",
//   color: "white",
//   category: "sneakers",

const ShoeCard = ({img, title, category, newPrice}) => {
   

   console.log();
    return (
        <div className="card">
            <img src={ img} alt={ title} />
            <h1>{title}</h1>
            <h4>{ category}</h4>
            <h3>{`${ newPrice}`}</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="shoecard">

            <ShoeCard {...ShoesList[0]}/>
            <ShoeCard {...ShoesList[1]} />
            <ShoeCard {...ShoesList[2]} />
            <ShoeCard {...ShoesList[3]} />
            <ShoeCard {...ShoesList[4]} />
            <ShoeCard {...ShoesList[5]} />
            <ShoeCard {...ShoesList[6]} />
            <ShoeCard {...ShoesList[7]} />
            <ShoeCard {...ShoesList[8]} />
            <ShoeCard {...ShoesList[9]} />
            <ShoeCard {...ShoesList[10]} />
            <ShoeCard {...ShoesList[11]} />
            <ShoeCard {...ShoesList[12]} />
            <ShoeCard {...ShoesList[13]} />
        </div>
    )
}

const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}


const AppLayout = () => {
    return (

        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(ReactComponent())
// root.render(<HeaderComponent />)

root.render(AppLayout())