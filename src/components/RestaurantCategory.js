import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
    // console.log(props);
    const {data, showItems, setShowIndex, dummy} = props;
    // console.log('data',data.itemCards.length, setShowIndex);
    const handleClick = () =>{
        setShowIndex();
        // setShow(!show)
    }
    return(
        <div>
            {/* header */}
            <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4 text-center">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data?.title} ({data.itemCards.length})</span>
                <span className="font-bold">⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards} dummy = {dummy}/>}
            </div>
            {/* body */}
        </div>
    )
}
export default RestaurantCategory;