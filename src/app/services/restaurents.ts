export interface IRestaurent {
    
    hName : string,
    location : string,
    image: string,
    type: string,
    timeOfArrival: string,
    description: string,
    rating: number,
    isInCart: boolean,
    foodItems  : any
}

export interface IFood{
fName : string,
cost : number,
type: string,
image: string,
description: string
}

export const restaurentArray = [
{
  hName : "Dominos",
  location : "Madurawada",
  image: 'assets/images/restaurents/grand-alpha.jpg',
  type: "North Indian",
  timeOfArrival: "23 Min",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
  rating: 4.5,
  isInCart: false,
  foodItems  : [
    {
      fName : "Margherita",
      cost : 241,
      type: "Non Veg",
      image: "../assets/images/restaurents/cashew.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Fresh Veggie",
      cost : 379,
      type: "Veg",
      image: "../assets/images/restaurents/pizza.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Pepper Barbecue & Onion",
      cost : 439,
      type: "Non Veg",
      image: "../assets/images/restaurents/pizza2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
  ]
},
{
  hName : "Grand Alpha",
  location : "Gajuwaka",
  type: "Indian, Tandoor, Biryani",
  image: 'assets/images/restaurents/biryani6.png',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
  timeOfArrival: "26 Min",
  rating: 3.8,
  isInCart: false,
  foodItems  : [
    {
      fName : "Chilli Chicken",
      cost : 251,
      type: "Non Veg",
      image: "../assets/images/restaurents/cashew.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Palak Paneer",
      cost : 249,
      type: "Veg",
      image: "../assets/images/restaurents/pizza.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Chicken Drumsticks (4 pcs)",
      cost : 241,
      type: "Non Veg",
      image: "../assets/images/restaurents/pizza2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
  ]
},
{
  hName : "Paradise Biryani",
  location : "Seethamadhara",
  image: 'assets/images/restaurents/biryani5.jpg',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
  type: "Kebabs, Tandoor",
  timeOfArrival: "29 Min",
  rating: 3.5,
  isInCart: false,
  foodItems  : [
    {
      fName : "Royal Chicken Biryani",
      cost : 245,
      type: "Non Veg",
      image: "../assets/images/restaurents/cashew.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Supreme Chicken Biryani",
      cost : 1275,
      type: "Non Veg",
      image: "../assets/images/restaurents/pizza.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Veg Biryani",
      cost : 255,
      type: "Veg",
      image: "../assets/images/restaurents/pizza2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
  ]
},
{
  hName : "Muntaj Hotel",
  location : "S Kota",
  image: 'assets/images/restaurents/paradise.jpg',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
  type: "Indian, Tandoor",
  timeOfArrival: "49 Min",
  rating: 4.5,
  isInCart: false,
  foodItems  : [
    {
      fName : "Royal Chicken Biryani",
      cost : 245,
      type: "Non Veg",
      image: "../assets/images/restaurents/cashew.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "special Chicken Biryani",
      cost : 1275,
      type: "Non Veg",
      image: "../assets/images/restaurents/pizza.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
    {
      fName : "Veg Biryani",
      cost : 255,
      type: "Veg",
      image: "../assets/images/restaurents/pizza2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
      quantity: 1,
      showAdd: true,
      showPM: false
    },
  ]
},
{
 hName : "Biryani connection",
 location : "S Kota",
 image: 'assets/images/restaurents/biryani.jpg',
 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
 type: "Indian, Tandoor",
 timeOfArrival: "49 Min",
 rating: 4.5,
 isInCart: false,
 foodItems  : [
   {
     fName : "Royal Chicken Biryani",
     cost : 245,
     type: "Non Veg",
     image: "../assets/images/restaurents/cashew.jpg",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
     quantity: 1,
     showAdd: true,
     showPM: false
   },
   {
     fName : "special Chicken Biryani",
     cost : 1275,
     type: "Non Veg",
     image: "../assets/images/restaurents/pizza.jpg",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
     quantity: 1,
     showAdd: true,
     showPM: false
   },
   {
     fName : "Veg Biryani",
     cost : 255,
     type: "Veg",
     image: "../assets/images/restaurents/pizza2.jpg",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
     quantity: 1,
     showAdd: true,
     showPM: false
   },
 ]
},
{
 hName : "Red Chillies Food",
 location : "Gajuwaku",
 image: 'assets/images/restaurents/biryani2.jpg',
 description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
 type: "Indian, Tandoor",
 timeOfArrival: "49 Min",
 rating: 4.5,
 isInCart: false,
 foodItems  : [
   {
     fName : "Royal Chicken Biryani",
     cost : 245,
     type: "Non Veg",
     image: "../assets/images/restaurents/cashew.jpg",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
     quantity: 1,
     showAdd: true,
     showPM: false
   },
   {
     fName : "special Chicken Biryani",
     cost : 1275,
     type: "Non Veg",
     image: "../assets/images/restaurents/pizza.jpg",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
     quantity: 1,
     showAdd: true,
     showPM: false
   },
   {
     fName : "Veg Biryani",
     cost : 255,
     type: "Veg",
     image: "../assets/images/restaurents/pizza2.jpg",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ",
     quantity: 1,
     showAdd: true,
     showPM: false
   },
 ]
}


]