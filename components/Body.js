import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants.js";
const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" placeholder="search" className="search-input" />
                <button onClick={() => {
                    restaurantList = restaurantList.filter((res) => {

                        return res?.data.avgRating > 4;
                    });
                    console.log(restaurantList);
                }}
                    className="search-btn">
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant) => {
                    return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};
export default Body;





