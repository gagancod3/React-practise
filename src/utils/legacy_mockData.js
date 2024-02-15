//*data from backend apis comes in JSON format in similar pattern only
const resList = {
    data: [
      {
        type: "restaurant",
        data: {
          id:"0",
          resName: "ABC foods",
          desc: "Local & Exotic fruits, vegetables",
          cuisines: ["fruits", "vegetables", "berries"],
          ratings: "4.4",
          time: "30 mins away",
          imgSrc:
            "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=",
          costForTwo: 40000,
        },
      },
      {
        type: "restaurant",
        data: {
          id:"1",
          resName: "KFC",
          desc: "delicious chicken",
          cuisines: ["north Indian", "south Indian", "chinese"],
          ratings: "4.2",
          time: "20 mins away",
          imgSrc:
            "https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg",
          costForTwo: 35000,
        },
      },
      {
        type: "restaurant",
        data: {
          id:"2",
          resName: "Wendy's",
          desc: "delicious chicken",
          cuisines: ["north Indian", "south Indian", "chinese"],
          ratings: "3.9",
          time: "20 mins away",
          imgSrc:
            "https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg",
          costForTwo: 35000,
        },
      },{
        type: "restaurant",
        data: {
          id:"3",
          resName: "Burger club",
          desc: "delicious chicken",
          cuisines: ["north Indian", "south Indian", "chinese"],
          ratings: "4.3",
          time: "20 mins away",
          imgSrc:
            "https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg",
          costForTwo: 30000,
        },
      },{
        type: "restaurant",
        data: {
          id:"4",
          resName: "Burger King",
          desc: "delicious chicken",
          cuisines: ["north Indian", "south Indian", "chinese"],
          ratings: "4.1",
          time: "20 mins away",
          imgSrc:
            "https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg",
          costForTwo: 38000,
        },
      },{
        type: "restaurant",
        data: {
          id:"5",
          resName: "McD",
          desc: "delicious chicken",
          cuisines: ["north Indian", "south Indian", "chinese"],
          ratings: "4.0",
          time: "20 mins away",
          imgSrc:
            "https://pricemenu.in/wp-content/uploads/2023/08/Most-Famous-KFC-Food.jpg",
          costForTwo: 40000,
        },
      },
    ],
  };
export default resList;