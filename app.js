import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// RestaurantList is JSON Data for displaying cards
const AppLayOut = () => {
    return (
        // header
        <React.Fragment>
            <Header />
            <Body />
        </React.Fragment>
    );
};
// passing prop to function is like passing argument to function
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut></AppLayOut>);