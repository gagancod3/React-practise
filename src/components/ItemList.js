import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { items, dummy } = props;
  // console.log(items, dummy);

  //*Initialize the dispatch functionality
  //* useDispatch - Returns the dispatch function from the Redux store.
  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    console.log('called111  ', item);
    //dispatch an action
     dispatch(addItem(item));

  }
  return (
    <div>
      {items.map((item) => (
        <div data-testid="foodItems" key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"> 
            <div className="w-9/12">
            <div className="py-2">
            <span className="font-medium">{item?.card?.info?.name}</span>
            <span className="font-medium">
              - Rs.{item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>  
            </div>
            <p className="text-sm">{item?.card?.info?.description
                ? item?.card?.info?.description
                : item?.card?.info?.category}
            </p>
          </div>
          {item?.card?.info?.imageId ? (
            <div className="w-3/12 p-4">
             <img src={IMG_CDN_URL + item?.card?.info?.imageId} className="w-full"/>
             <div className="absolute">
                <button className="p-2 mb-3 bg-white text-black shadow-lg  rounded-md hover:bg-slate-300"
                onClick={() => handleAddItem(item)}
                >Add +</button>
             </div>
            </div>) : null}

        </div>
      ))}
    </div>
  );
};
export default ItemList;