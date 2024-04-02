var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const passport = require("passport");
const localStrategy = require("passport-local");
const upload = require("./multer");
const resUserModel = require("./restaurant");
const Order = require("./order");
const nodemailer = require("nodemailer");
passport.use(new localStrategy(userModel.authenticate()));
passport.use(new localStrategy(resUserModel.authenticate()));

router.get("/", function (req, res, next) {
  res.render("start", { nav: false });
});
router.get("/login", function (req, res, next) {
  res.render("index", { nav: false });
});
router.get("/register", function (req, res, next) {
  res.render("register", { nav: false });
});
router.get("/resregister", function (req, res, next) {
  res.render("restaurantsignup", { nav: false });
});
router.get("/restaurantlogin", function (req, res, next) {
  res.render("restaurantlogin", { nav: false });
});
router.get("/home", function (req, res) {
  res.render("home");
});
router.get("/about", function (req, res) {
  res.render("about");
});
router.get("/location", function (req, res) {
  res.render("location");
});
router.get("/Ordered", async function (req, res) {
  const userDetails = await Order.find({});
  return res.render("order", { Allorder: userDetails });
});

const restaurants = [
  {
    id: 1,
    name: "Out Of The Town",
    cuisine: "North Indian, Beverages",
    location: "Kukas",
    distance: "1.8",
    off: "40% OFF UPTO ₹80",
    image:
      "https://plus.unsplash.com/premium_photo-1676234917179-a7b1ca98c984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Vegetable Seekh Kebab",
        description: "Minced vegetables mixed with spices and grilled",
        price: 180,
      },
      {
        id: 2,
        name: "Mushroom Tikka",
        description: "Marinated mushrooms grilled to perfection",
        price: 200,
      },
      {
        id: 3,
        name: "Samosa Chaat",
        description: "Crispy samosas topped with tangy chutneys and yogurt",
        price: 150,
      },
      {
        id: 4,
        name: "Spinach Corn Sandwich",
        description: "Grilled sandwich with spinach, corn, and cheese",
        price: 120,
      },
      {
        id: 5,
        name: "Vegetable Biryani",
        description: "Flavorful rice dish with mixed vegetables",
        price: 220,
      },
      {
        id: 6,
        name: "Pav Bhaji",
        description: "Spicy mashed vegetable curry served with buttered bread",
        price: 180,
      },
      {
        id: 7,
        name: "Paneer Butter Masala",
        description: "Soft paneer cubes cooked in a creamy tomato-based sauce",
        price: 240,
      },
      {
        id: 8,
        name: "Aloo Gobi",
        description: "Potatoes and cauliflower cooked with spices",
        price: 160,
      },
      {
        id: 9,
        name: "Veg Momos",
        description: "Steamed dumplings filled with mixed vegetables",
        price: 130,
      },
      {
        id: 10,
        name: "Jeera Rice",
        description: "Basmati rice flavored with cumin seeds",
        price: 100,
      },
      {
        id: 11,
        name: "Veg Noodles",
        description: "Stir-fried noodles with mixed vegetables",
        price: 140,
      },
      {
        id: 12,
        name: "Masala Chaas",
        description: "Refreshing buttermilk with spices",
        price: 60,
      },
      {
        id: 13,
        name: "Gulab Jamun",
        description: "Deep-fried milk dumplings soaked in sugar syrup",
        price: 80,
      },
      {
        id: 14,
        name: "Kadai Vegetables",
        description: "Assorted vegetables cooked in a spicy gravy",
        price: 200,
      },
      {
        id: 15,
        name: "Veggie Pizza",
        description: "Pizza topped with assorted vegetables and cheese",
        price: 250,
      },
      {
        id: 16,
        name: "Mixed Vegetable Soup",
        description: "Healthy soup made with a variety of vegetables",
        price: 90,
      },
      {
        id: 17,
        name: "Corn Spinach Curry",
        description: "Corn and spinach cooked in a creamy sauce",
        price: 170,
      },
      {
        id: 18,
        name: "Veggie Wrap",
        description: "Assorted vegetables wrapped in a tortilla",
        price: 130,
      },
      {
        id: 19,
        name: "Falafel with Hummus",
        description: "Deep-fried chickpea patties served with hummus",
        price: 190,
      },
      {
        id: 20,
        name: "Coconut Ladoo",
        description: "Sweet coconut balls made with condensed milk",
        price: 70,
      },
    ],
  },
  {
    id: 2,
    name: "New Delhi Grand",
    cuisine: "North Indian",
    location: "Kukas",
    distance: "1.7",
    image:
      "https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Paneer Butter Masala",
        description: "Soft paneer cubes cooked in a creamy tomato-based sauce",
        price: 240,
      },
      {
        id: 2,
        name: "Dal Tadka",
        description: "Yellow lentils tempered with spices",
        price: 180,
      },
      {
        id: 3,
        name: "Vegetable Biryani",
        description: "Fragrant rice dish with mixed vegetables",
        price: 220,
      },
      {
        id: 4,
        name: "Aloo Paratha",
        description: "Whole wheat bread stuffed with spiced potatoes",
        price: 120,
      },
      {
        id: 5,
        name: "Chana Masala",
        description: "Spicy chickpea curry with onions and tomatoes",
        price: 170,
      },
      {
        id: 6,
        name: "Palak Paneer",
        description: "Creamy spinach curry with cubes of paneer",
        price: 220,
      },
      {
        id: 7,
        name: "Mixed Vegetable Curry",
        description: "Assorted vegetables cooked in a spiced gravy",
        price: 190,
      },
      {
        id: 8,
        name: "Vegetable Pulao",
        description: "Flavorful rice dish with mixed vegetables",
        price: 200,
      },
      {
        id: 9,
        name: "Bhindi Masala",
        description: "Okra cooked with onions, tomatoes, and spices",
        price: 160,
      },
      {
        id: 10,
        name: "Gobi Manchurian",
        description: "Cauliflower florets in a tangy sauce",
        price: 180,
      },
      {
        id: 11,
        name: "Rajma Masala",
        description: "Kidney beans cooked with tomatoes and spices",
        price: 190,
      },
      {
        id: 12,
        name: "Vegetable Pakora",
        description: "Assorted vegetables dipped in chickpea batter and fried",
        price: 150,
      },
      {
        id: 13,
        name: "Papadum",
        description: "Thin and crispy lentil wafers",
        price: 50,
      },
      {
        id: 14,
        name: "Vegetable Kathi Roll",
        description: "Mixed vegetables wrapped in a paratha",
        price: 130,
      },
      {
        id: 15,
        name: "Jeera Rice",
        description: "Basmati rice flavored with cumin seeds",
        price: 100,
      },
      {
        id: 16,
        name: "Matar Paneer",
        description: "Green peas and paneer cooked in a tomato-based sauce",
        price: 210,
      },
      {
        id: 17,
        name: "Veg Handi",
        description: "Assorted vegetables cooked in a rich and creamy gravy",
        price: 220,
      },
      {
        id: 18,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fried bread",
        price: 150,
      },
      {
        id: 19,
        name: "Vegetable Clear Soup",
        description: "Light and healthy soup with assorted vegetables",
        price: 80,
      },
      {
        id: 20,
        name: "Vegetable Kathi Roll",
        description: "Mixed vegetables wrapped in a paratha",
        price: 130,
      },
    ],
  },
  {
    id: 3,
    name: "Cafe LazyMojo",
    cuisine: "North Indian, Chinese",
    location: "Kukas",
    distance: "4.5 km",
    off: "40% OFF UPTO ₹80",
    image:
      "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Spring Rolls",
        description: "Crispy rolls filled with mixed vegetables",
        price: 120,
      },
      {
        id: 2,
        name: "Paneer Tikka",
        description: "Cubes of paneer marinated in spices and grilled",
        price: 200,
      },
      {
        id: 3,
        name: "Dal Makhani",
        description: "Slow-cooked lentils with cream and spices",
        price: 180,
      },
      {
        id: 5,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fried bread",
        price: 150,
      },
      {
        id: 6,
        name: "Aloo Paratha",
        description: "Whole wheat bread stuffed with spiced potatoes",
        price: 120,
      },
      {
        id: 7,
        name: "Palak Paneer",
        description: "Creamy spinach curry with cubes of paneer",
        price: 220,
      },
      {
        id: 9,
        name: "Vegetable Biryani",
        description: "Flavorful rice dish with mixed vegetables",
        price: 220,
      },
      {
        id: 16,
        name: "Vegetable Manchurian",
        description: "Assorted vegetables balls in a tangy sauce",
        price: 180,
      },
      {
        id: 17,
        name: "Veg Fried Rice",
        description: "Stir-fried rice with mixed vegetables",
        price: 160,
      },
      {
        id: 18,
        name: "Chilli Paneer",
        description: "Crispy paneer cubes in a spicy sauce",
        price: 200,
      },
      {
        id: 19,
        name: "Veg Hakka Noodles",
        description: "Stir-fried noodles with mixed vegetables",
        price: 180,
      },
    ],
  },
  {
    id: 4,
    name: "Gulabji Sweets & Restaurant",
    cuisine: "South Indian, Chinese",
    location: "Kukas",
    distance: "1.8",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Dosa",
        description: "Thin crepe made from fermented rice and lentil batter",
        price: 80,
      },
      {
        id: 2,
        name: "Idli",
        description:
          "Steamed rice cakes made from fermented rice and lentil batter",
        price: 60,
      },
      {
        id: 3,
        name: "Vada",
        description: "Crispy lentil donuts served with chutney and sambar",
        price: 50,
      },
      {
        id: 4,
        name: "Masala Dosa",
        description: "Dosa filled with spiced mashed potatoes",
        price: 100,
      },
      {
        id: 5,
        name: "Uttapam",
        description: "Thick pancake topped with vegetables",
        price: 90,
      },
      {
        id: 6,
        name: "Vegetable Manchurian",
        description: "Assorted vegetables balls in a tangy sauce",
        price: 180,
      },
      {
        id: 7,
        name: "Gobi Manchurian",
        description: "Cauliflower florets in a tangy sauce",
        price: 170,
      },
      {
        id: 8,
        name: "Chilli Paneer",
        description: "Crispy paneer cubes in a spicy sauce",
        price: 200,
      },
      {
        id: 9,
        name: "Veg Fried Rice",
        description: "Stir-fried rice with mixed vegetables",
        price: 160,
      },
      {
        id: 10,
        name: "Hakka Noodles",
        description: "Stir-fried noodles with vegetables",
        price: 150,
      },
      {
        id: 11,
        name: "Schezwan Dosa",
        description: "Dosa filled with spicy Schezwan sauce",
        price: 120,
      },
      {
        id: 12,
        name: "Manchow Soup",
        description: "Spicy and tangy soup with vegetables and noodles",
        price: 70,
      },
      {
        id: 13,
        name: "Gulab Jamun",
        description: "Deep-fried milk dumplings soaked in sugar syrup",
        price: 80,
      },
      {
        id: 14,
        name: "Vegetable Spring Rolls",
        description: "Crispy rolls filled with mixed vegetables",
        price: 100,
      },
      {
        id: 15,
        name: "Chilli Chicken",
        description: "Spicy and tangy chicken dish with peppers and onions",
        price: 220,
      },
      {
        id: 16,
        name: "Gobi Manchurian",
        description: "Cauliflower florets in a tangy sauce",
        price: 180,
      },
      {
        id: 17,
        name: "Veg Manchow Soup",
        description: "Spicy and tangy soup with vegetables and noodles",
        price: 90,
      },
      {
        id: 18,
        name: "Chowmein",
        description: "Stir-fried noodles with vegetables",
        price: 120,
      },
      {
        id: 19,
        name: "Gobi Manchurian",
        description: "Cauliflower florets in a tangy sauce",
        price: 180,
      },
      {
        id: 20,
        name: "Veg Sweet Corn Soup",
        description: "Light and healthy soup with sweet corn and vegetables",
        price: 80,
      },
    ],
  },
  {
    id: 5,
    name: "Manas Restaurant",
    cuisine: "North Indian",
    location: "Kukas",
    distance: "2.5",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Paneer Lababdar",
        description: "Soft paneer cubes cooked in a rich tomato-based gravy",
        price: 220,
      },
      {
        id: 2,
        name: "Palak Paneer",
        description: "Creamy spinach curry with cubes of paneer",
        price: 200,
      },
      {
        id: 3,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fried bread",
        price: 180,
      },
      {
        id: 4,
        name: "Dal Makhani",
        description: "Slow-cooked creamy lentils with butter and cream",
        price: 200,
      },
      {
        id: 5,
        name: "Aloo Gobi",
        description: "Potatoes and cauliflower cooked with spices",
        price: 180,
      },
      {
        id: 6,
        name: "Vegetable Biryani",
        description: "Fragrant rice dish with mixed vegetables",
        price: 220,
      },
      {
        id: 7,
        name: "Malai Kofta",
        description:
          "Creamy and rich kofta balls served in a mildly spiced gravy",
        price: 210,
      },
      {
        id: 8,
        name: "Paneer Tikka Masala",
        description:
          "Grilled paneer tikka cooked in a rich and creamy tomato-based sauce",
        price: 240,
      },
      {
        id: 9,
        name: "Aloo Paratha",
        description: "Whole wheat bread stuffed with spiced mashed potatoes",
        price: 100,
      },
      {
        id: 10,
        name: "Vegetable Pulao",
        description: "Fragrant rice cooked with mixed vegetables",
        price: 180,
      },
      {
        id: 11,
        name: "Navratan Korma",
        description: "Mixed vegetables cooked in a creamy and nutty gravy",
        price: 190,
      },
      {
        id: 12,
        name: "Baingan Bharta",
        description: "Smoky mashed eggplant cooked with onions and tomatoes",
        price: 190,
      },
      {
        id: 13,
        name: "Vegetable Pakora",
        description: "Assorted vegetables dipped in chickpea batter and fried",
        price: 150,
      },
      {
        id: 14,
        name: "Paneer Butter Masala",
        description: "Soft paneer cubes cooked in a creamy tomato-based sauce",
        price: 220,
      },
      {
        id: 15,
        name: "Matar Paneer",
        description: "Green peas and paneer cooked in a tomato-based sauce",
        price: 210,
      },
      {
        id: 16,
        name: "Rajma Masala",
        description: "Kidney beans cooked with tomatoes and spices",
        price: 180,
      },
      {
        id: 17,
        name: "Vegetable Handi",
        description: "Assorted vegetables cooked in a rich and creamy gravy",
        price: 190,
      },
      {
        id: 18,
        name: "Paneer Bhurji",
        description:
          "Scrambled paneer cooked with onions, tomatoes, and spices",
        price: 200,
      },
      {
        id: 19,
        name: "Veg Pulav",
        description: "Fragrant rice cooked with mixed vegetables",
        price: 160,
      },
      {
        id: 20,
        name: "Paneer Pakora",
        description: "Crispy paneer fritters served with chutney",
        price: 180,
      },
    ],
  },
  {
    id: 6,
    name: "Chouhan Dhaba",
    cuisine: "North Indian",
    location: "Kukas",
    distance: "0.2",
    image:
      "https://images.unsplash.com/photo-1606471191009-63994c53433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Sarson Ka Saag",
        description:
          "A traditional Punjabi dish made from mustard greens and spices",
        price: 180,
      },
      {
        id: 2,
        name: "Makki Ki Roti",
        description:
          "Flatbread made from cornmeal, best paired with Sarson Ka Saag",
        price: 120,
      },
      {
        id: 3,
        name: "Chole Bhature",
        description: "Spicy chickpea curry served with fried bread",
        price: 150,
      },
      {
        id: 4,
        name: "Dal Tadka",
        description: "Yellow lentils tempered with spices",
        price: 140,
      },
      {
        id: 5,
        name: "Paneer Tikka",
        description: "Marinated paneer cubes grilled to perfection",
        price: 200,
      },
      {
        id: 6,
        name: "Paneer Butter Masala",
        description: "Soft paneer cubes cooked in a creamy tomato-based sauce",
        price: 210,
      },
      {
        id: 7,
        name: "Aloo Paratha",
        description: "Whole wheat bread stuffed with spiced mashed potatoes",
        price: 100,
      },
      {
        id: 8,
        name: "Rajma Chawal",
        description:
          "Kidney beans cooked in a spiced tomato gravy, served with rice",
        price: 180,
      },
      {
        id: 9,
        name: "Punjabi Kadhi Pakora",
        description:
          "Yogurt-based curry with gram flour dumplings, flavored with spices",
        price: 160,
      },
      {
        id: 10,
        name: "Baingan Bharta",
        description: "Smoky mashed eggplant cooked with onions and tomatoes",
        price: 170,
      },
      {
        id: 11,
        name: "Mutter Paneer",
        description: "Green peas and paneer cooked in a tomato-based sauce",
        price: 190,
      },
      {
        id: 12,
        name: "Chana Masala",
        description: "Spicy chickpea curry with onions and tomatoes",
        price: 160,
      },
      {
        id: 13,
        name: "Vegetable Pulao",
        description: "Fragrant rice cooked with mixed vegetables",
        price: 150,
      },
      {
        id: 14,
        name: "Paneer Bhurji",
        description:
          "Scrambled paneer cooked with onions, tomatoes, and spices",
        price: 180,
      },
      {
        id: 15,
        name: "Gobi Paratha",
        description: "Whole wheat bread stuffed with spiced cauliflower",
        price: 110,
      },
      {
        id: 16,
        name: "Aloo Gobi",
        description: "Potatoes and cauliflower cooked with spices",
        price: 170,
      },
      {
        id: 17,
        name: "Kadai Paneer",
        description: "Paneer cooked with bell peppers, onions, and spices",
        price: 200,
      },
      {
        id: 18,
        name: "Vegetable Samosa",
        description: "Crispy pastry filled with spiced mixed vegetables",
        price: 80,
      },
      {
        id: 19,
        name: "Papadum",
        description: "Thin and crispy lentil wafers",
        price: 40,
      },
      {
        id: 20,
        name: "Mix Veg Sabzi",
        description: "Assorted vegetables cooked in a rich and flavorful gravy",
        price: 160,
      },
    ],
  },
  {
    id: 7,
    name: "The Brother's Dhaba",
    cuisine: "Indian",
    location: "Kukas",
    distance: "2.4",
    off: "40% OFF UPTO ₹80",
    image:
      "https://images.unsplash.com/photo-1606525437679-037aca74a3e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3ByaW5nJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Vegetable Biryani",
        description:
          "Fragrant rice dish with mixed vegetables and aromatic spices",
        price: 180,
      },
      {
        id: 2,
        name: "Paneer Tikka Masala",
        description:
          "Grilled paneer cubes cooked in a creamy tomato-based sauce",
        price: 220,
      },
      {
        id: 3,
        name: "Aloo Gobi",
        description: "Potatoes and cauliflower cooked with spices",
        price: 160,
      },
      {
        id: 4,
        name: "Rajma Masala",
        description: "Kidney beans cooked in a spiced tomato gravy",
        price: 170,
      },
      {
        id: 5,
        name: "Vegetable Korma",
        description: "Mixed vegetables cooked in a rich and creamy gravy",
        price: 200,
      },
      {
        id: 6,
        name: "Palak Paneer",
        description: "Creamy spinach curry with cubes of paneer",
        price: 210,
      },
      {
        id: 7,
        name: "Vegetable Samosa",
        description: "Crispy pastry filled with spiced mixed vegetables",
        price: 80,
      },
      {
        id: 8,
        name: "Mushroom Masala",
        description: "Mushrooms cooked in a flavorful masala gravy",
        price: 190,
      },
      {
        id: 9,
        name: "Dal Fry",
        description: "Tempered lentils cooked with spices",
        price: 150,
      },
      {
        id: 10,
        name: "Vegetable Pulao",
        description: "Fragrant rice cooked with mixed vegetables",
        price: 160,
      },
      {
        id: 11,
        name: "Paneer Paratha",
        description: "Whole wheat bread stuffed with spiced paneer",
        price: 100,
      },
      {
        id: 12,
        name: "Masoor Dal",
        description: "Red lentils cooked with onions, tomatoes, and spices",
        price: 140,
      },
      {
        id: 13,
        name: "Chana Masala",
        description: "Spicy chickpea curry with onions and tomatoes",
        price: 160,
      },
      {
        id: 14,
        name: "Mixed Vegetable Curry",
        description: "Assorted vegetables cooked in a flavorful curry sauce",
        price: 180,
      },
      {
        id: 15,
        name: "Vegetable Manchurian",
        description: "Assorted vegetables balls in a tangy sauce",
        price: 190,
      },
      {
        id: 16,
        name: "Aloo Paratha",
        description: "Whole wheat bread stuffed with spiced mashed potatoes",
        price: 120,
      },
      {
        id: 17,
        name: "Vegetable Fried Rice",
        description: "Stir-fried rice with mixed vegetables",
        price: 170,
      },
      {
        id: 18,
        name: "Kadai Paneer",
        description: "Paneer cooked with bell peppers, onions, and spices",
        price: 210,
      },
      {
        id: 19,
        name: "Jeera Rice",
        description: "Basmati rice flavored with cumin seeds",
        price: 130,
      },
      {
        id: 20,
        name: "Mushroom Pulao",
        description: "Fragrant rice cooked with mushrooms and spices",
        price: 190,
      },
    ],
  },
  {
    id: 8,
    name: "Singh's Town Cafe",
    cuisine: "Beverages",
    location: "Kukas",
    distance: "3.0",
    image:
      "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    menu: [
      {
        id: 1,
        name: "Cold Coffee",
        description: "Chilled coffee served with ice and cream",
        price: 120,
      },
      {
        id: 2,
        name: "Masala Chai",
        description: "Indian spiced tea brewed with milk and spices",
        price: 100,
      },
      {
        id: 3,
        name: "Iced Tea",
        description: "Refreshing tea served chilled with lemon and mint",
        price: 110,
      },
      {
        id: 4,
        name: "Mango Shake",
        description: "Thick and creamy shake made with ripe mangoes and milk",
        price: 150,
      },
      {
        id: 5,
        name: "Strawberry Smoothie",
        description: "Smoothie blended with fresh strawberries and yogurt",
        price: 140,
      },
      {
        id: 6,
        name: "Veggie Burger",
        description:
          "Burger with a vegetable patty, lettuce, tomato, and sauce",
        price: 180,
      },
      {
        id: 7,
        name: "French Fries",
        description: "Crispy potato fries seasoned with salt",
        price: 90,
      },
      {
        id: 8,
        name: "Cheese Pizza",
        description: "Pizza topped with melted cheese and tomato sauce",
        price: 220,
      },
      {
        id: 9,
        name: "Paneer Wrap",
        description: "Wrap filled with paneer tikka, veggies, and sauce",
        price: 200,
      },
      {
        id: 10,
        name: "Veg Spring Rolls",
        description: "Crispy rolls filled with mixed vegetables",
        price: 120,
      },
      {
        id: 11,
        name: "Onion Rings",
        description: "Deep-fried battered onion rings",
        price: 100,
      },
      {
        id: 12,
        name: "Potato Wedges",
        description: "Wedges of potato fried or roasted",
        price: 110,
      },
      {
        id: 13,
        name: "Cheese Garlic Bread",
        description: "Garlic bread topped with melted cheese",
        price: 130,
      },
      {
        id: 14,
        name: "Vegetable Momos",
        description: "Steamed dumplings filled with mixed vegetables",
        price: 140,
      },
      {
        id: 15,
        name: "Nachos with Cheese",
        description: "Tortilla chips topped with melted cheese",
        price: 160,
      },
      {
        id: 16,
        name: "Veggie Pasta",
        description: "Pasta cooked with mixed vegetables in a creamy sauce",
        price: 190,
      },
      {
        id: 17,
        name: "Chilli Potato",
        description: "Crispy potatoes tossed in spicy sauce",
        price: 150,
      },
      {
        id: 18,
        name: "Paneer Tikka",
        description: "Marinated paneer cubes grilled to perfection",
        price: 210,
      },
      {
        id: 19,
        name: "Onion Bhaji",
        description: "Deep-fried onion fritters",
        price: 120,
      },
      {
        id: 20,
        name: "Vegetable Hakka Noodles",
        description: "Stir-fried noodles with mixed vegetables",
        price: 170,
      },
    ],
  },
  // Add more restaurants as needed
];
router.get("/api/restaurantslist", (req, res) => {
  res.json(restaurants);
});

router.get("/restaurant", (req, res) => {
  // Pass the list of restaurants to the view
  res.render("restaurant", { restaurants });
});
let cart = [];

router.get("/menu/:restaurantId", (req, res) => {
  const restaurantId = req.params.restaurantId;
  // Find the restaurant with the given ID
  const restaurant = restaurants.find((r) => r.id == restaurantId);
  if (!restaurant) {
    // If restaurant not found, return 404
    res.status(404).send("Restaurant not found");
    return;
  }
  // Render the menu view with the restaurant details
  res.render("menu", { restaurant });
});

router.post("/menu/add-to-cart", (req, res) => {
  const { restaurantId, itemId } = req.body;
  const restaurant = restaurants.find((r) => r.id == restaurantId);
  if (!restaurant) {
    res.status(404).send("Restaurant not found");
    return;
  }
  const item = restaurant.menu.find((item) => item.id == itemId);
  if (!item) {
    res.status(404).send("Item not found in menu");
    return;
  }
  req.session.cart = req.session.cart || {};
  req.session.cart[restaurantId] = req.session.cart[restaurantId] || [];
  req.session.cart[restaurantId].push(item);
  res.redirect(`/cart/${restaurantId}`);
});

router.get("/cart/:restaurantId", (req, res) => {
  const restaurantId = req.params.restaurantId;
  const cartItems =
    req.session.cart && req.session.cart[restaurantId]
      ? req.session.cart[restaurantId]
      : [];
  res.render("cart", { cart: cartItems });
});

router.post("/cart/remove-item", (req, res) => {
  const { restaurantId, index } = req.body;

  if (req.session.cart && req.session.cart[restaurantId]) {
    req.session.cart[restaurantId].splice(index, 1);

    // Update the cart variable in the session to match the new format
    req.session.cart[restaurantId] = req.session.cart[restaurantId].map(
      (item) => ({ name: item.name, price: item.price })
    );

    res.redirect(`/cart/${restaurantId}`);
  } else {
    res.redirect("/menu");
  }
});

router.post("/place-order", async (req, res) => {
  const { restaurantId, items, name, email, address } = req.body;

  // Parse the items variable from a stringified JSON object to an array of objects
  const itemObjects = JSON.parse(items).map((item) => ({
    name: item.name,
    price: item.price,
  }));

  // Calculate the total cost of the order
  const totalCost = itemObjects.reduce((sum, item) => sum + item.price, 0);

  const order = new Order({
    restaurantId,
    items: itemObjects,
    customerName: name,
    customerEmail: email,
    customerAddress: address,
    totalCost,
  });

  try {
    // Save the order to the database
    const savedOrder = await order.save();
    console.log("Order saved:", savedOrder);

    // Send order details to the restaurant via email
    sendOrderEmail(name, email, address, itemObjects, totalCost, restaurantId);

    res.redirect("/");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error saving order");
  }
});

// Function to send order details to the restaurant via email
function sendOrderEmail(name, email, address, items, totalCost, restaurantId) {
  try {
    // Create a SMTP transporter
    let transporter = nodemailer.createTransport({
      // Specify your email service and authentication details here
      service: "Gmail",
      auth: {
        user: "jainsanyam626@gmail.com",
        pass: "Sj@941464",
      },
    });

    // Construct email message
    let mailOptions = {
      from: "jainsanyam626@gmail.com",
      to: "07ajitjain@gmail.com",
      subject: "New Food Order",
      text: `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nItems: ${JSON.stringify(
        items
      )}\nTotal Cost: ${totalCost}`,
    };

    // Send mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully:", info.response);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

router.get("/profile", isLoggedIn, async function (req, res, next) {
  const user = await userModel
    .findOne({ username: req.session.passport.user })
    .populate("posts");
  res.render("profile", { user, nav: true });
});
router.get("/show/posts", isLoggedIn, async function (req, res, next) {
  const user = await userModel
    .findOne({ username: req.session.passport.user })
    .populate("posts");
  res.render("show", { user, nav: true });
});
router.get("/add", isLoggedIn, async function (req, res, next) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  res.render("add", { user, nav: true });
});
router.post(
  "/createpost",
  isLoggedIn,
  upload.single("postimage"),
  async function (req, res, next) {
    const user = await userModel.findOne({
      username: req.session.passport.user,
    });
    const post = await postModel.create({
      user: user._id,
      title: req.body.title,
      description: req.body.description,
      image: req.file.filename,
    });
    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
  }
);

router.post(
  "/fileupload",
  isLoggedIn,
  upload.single("image"),
  async function (req, res, next) {
    const user = await userModel.findOne({
      username: req.session.passport.user,
    });
    user.profileImage = req.file.filename;
    await user.save();
    res.redirect("/profile");
  }
);

router.post("/register", function (req, res, next) {
  const data = new userModel({
    username: req.body.username,
    email: req.body.email,
    contact: req.body.contact,
  });

  userModel.register(data, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/login");
    });
  });
});
router.post("/resregister", function (req, res, next) {
  const data = new resUserModel({
    username: req.body.resname,
    email: req.body.email,
    contact: req.body.contact,
    
  });

  resUserModel.register(data, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/restaurantlogin");
    });
  });
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/location",
  }),
  function (req, res, next) {}
);
router.post(
  "/reslogin",
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/location",
  }),
  function (req, res, next) {}
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}
module.exports = router;
