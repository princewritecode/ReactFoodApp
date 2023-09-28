import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants.js";
const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="search" className="search-input" />
                <button
                    className="search-btn">
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {console.log(restaurantList)}
                {restaurantList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </div>
    );
};
export default Body;





