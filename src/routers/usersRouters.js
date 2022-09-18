import express from "express";
import {
  listHomePageProducts,
  productInsertion,
  showProductList,
} from "../controllers/productsControllers.js";
import { userLogin, userSignup } from "../controllers/usersControllers.js";
import { signupValidator } from "../middlewares/signupValidationMiddleware.js";
import { loginValidator } from "../middlewares/loginValidationMiddleWare.js";
import { productValidator } from "../middlewares/productsValidationMiddleware.js";

const router = express.Router();

router.post("/signup", signupValidator, userSignup);
router.post("/login", loginValidator, userLogin);
router.post("/", productInsertion);
router.get("/", listHomePageProducts);
router.get("/productlist", showProductList);

export default router;

[
  {
    category: "mugs",
    title: "Magic Mugs",
    products: [
      {
        name: "Witch Mug",
        image: "https://bit.ly/3DsY0e9",
        price: 10.0,
        category: "mugs",
        productId: "0",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Hexy Mug",
        image: "https://bit.ly/3BlRinq",
        price: 10.0,
        category: "mugs",
        productId: "1",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Purrfect Mug",
        image: "https://bit.ly/3qIBbLJ",
        price: 12.0,
        category: "mugs",
        productId: "2",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Potion Mug",
        image: "https://bit.ly/3RQ5sEr",
        price: 12.0,
        category: "mugs",
        productId: "3",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Bat Mug",
        image: "https://bit.ly/3f04pmZ",
        price: 13.0,
        category: "mugs",
        productId: "4",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Cauldron Mug",
        image: "https://bit.ly/3QPZoKO",
        price: 18.0,
        category: "mugs",
        productId: "5",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "GOT Mug",
        image: "https://bit.ly/3xvkPK9",
        price: 20.0,
        category: "mugs",
        productId: "6",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Stark Mug",
        image: "https://bit.ly/3S1bC4i",
        price: 20.0,
        category: "mugs",
        productId: "7",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Targaryen Mug",
        image: "https://bit.ly/3drA93H",
        price: 20.0,
        category: "mugs",
        productId: "8",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Frankenstein Mug",
        image: "https://bit.ly/3drxmYh",
        price: 22.0,
        category: "mugs",
        productId: "9",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Vampire Mug",
        image: "https://bit.ly/3xxyP6q",
        price: 22.0,
        category: "mugs",
        productId: "10",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Monster Mug",
        image: "https://bit.ly/3BN9U1d",
        price: 22.0,
        category: "mugs",
        productId: "11",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Monster Mug",
        image: "https://bit.ly/3eLxodQ",
        price: 22.0,
        category: "mugs",
        productId: "12",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Vampster Mug",
        image: "https://bit.ly/3qLtLrc",
        price: 22.0,
        category: "mugs",
        productId: "13",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Hurrster Mug",
        image: "https://bit.ly/3QOfMeL",
        price: 20.0,
        category: "mugs",
        productId: "14",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "IT Mug",
        image: "https://bit.ly/3r3cQAJ",
        price: 20.0,
        category: "mugs",
        productId: "15",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Walker Mug",
        image: "https://bit.ly/3eXqrGT",
        price: 21.0,
        category: "mugs",
        productId: "16",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Zombie Mug",
        image: "https://bit.ly/3SdvXDk",
        price: 17.0,
        category: "mugs",
        productId: "17",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Burned Mug",
        image: "https://bit.ly/3Ua0JyS",
        price: 18.0,
        category: "mugs",
        productId: "18",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "IT Mug",
        image: "https://bit.ly/3LArIA1",
        price: 19.0,
        category: "mugs",
        productId: "19",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "IT Mug",
        image: "https://bit.ly/3BqS8PE",
        price: 19.0,
        category: "mugs",
        productId: "20",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Jason Mug",
        image: "https://bit.ly/3xvas9e",
        price: 20.0,
        category: "mugs",
        productId: "21",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
      {
        name: "Chucky Mug",
        image: "https://bit.ly/3xuLQ0w",
        price: 20.0,
        category: "mugs",
        productId: "22",
        description:
          "Have the sweetest Halloween ever by using this Enchanted Mug! It's ideal for an extra-large mug of hot chocolate with marshmallows! ",
      },
    ],
  },

  {
    category: "vinyl",
    title: "Rock Vinyl",
    products: [
      {
        name: "Iron Maiden",
        image: "https://bit.ly/3DNypNh",
        price: 33.0,
        category: "vinyl",
        productId: "0",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Guns n'Roses",
        image: "https://bit.ly/3eVzg3Q",
        price: 30.0,
        category: "vinyl",
        productId: "1",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Ramones",
        image: "https://bit.ly/3UhC7UR",
        price: 28.0,
        category: "vinyl",
        productId: "2",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Misfits",
        image: "https://bit.ly/3eSNAtY",
        price: 25.0,
        category: "vinyl",
        productId: "3",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Smashing Pumpkins",
        image: "https://bit.ly/3Dv4MzW",
        price: 30.0,
        category: "vinyl",
        productId: "4",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "The Beatles",
        image: "https://bit.ly/3QQ0y98",
        price: 30.0,
        category: "vinyl",
        productId: "5",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Artict Monkeys",
        image: "https://bit.ly/3Ue1BCG",
        price: 30.0,
        category: "vinyl",
        productId: "6",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Oasis",
        image: "https://bit.ly/3eQwoFn",
        price: 25.0,
        category: "vinyl",
        productId: "7",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Foo Fighters",
        image: "https://bit.ly/3BNqgHa",
        price: 28.0,
        category: "vinyl",
        productId: "8",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Green Day",
        image: "https://bit.ly/3f06nnn",
        price: 28.0,
        category: "vinyl",
        productId: "9",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Linkin Park",
        image: "https://bit.ly/3QQ1x9k",
        price: 28.0,
        category: "vinyl",
        productId: "10",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Metallica",
        image: "https://bit.ly/3xvZm3N",
        price: 29.0,
        category: "vinyl",
        productId: "11",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Slipknot",
        image: "https://bit.ly/3LoSH1m",
        price: 25.0,
        category: "vinyl",
        productId: "12",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Avril Lavigne",
        image: "https://bit.ly/3eXsGK2",
        price: 27.0,
        category: "vinyl",
        productId: "13",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Mod Sun",
        image: "https://bit.ly/3qNvRqB",
        price: 25.0,
        category: "vinyl",
        productId: "14",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "MGK",
        image: "https://bit.ly/3BMEfN8",
        price: 25.0,
        category: "vinyl",
        productId: "15",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Pixies",
        image: "https://bit.ly/3qKvH37",
        price: 25.0,
        category: "vinyl",
        productId: "16",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "The Smiths",
        image: "https://bit.ly/3BM83cL",
        price: 26.0,
        category: "vinyl",
        productId: "17",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Muse",
        image: "https://bit.ly/3S3IOby",
        price: 26.0,
        category: "vinyl",
        productId: "18",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Radiohead",
        image: "https://bit.ly/3RRrhDA",
        price: 29.0,
        category: "vinyl",
        productId: "19",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "The Offspring",
        image: "https://bit.ly/3BMEUOC",
        price: 25.0,
        category: "vinyl",
        productId: "20",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Scorpions",
        image: "https://bit.ly/3di1iGv",
        price: 30.0,
        category: "vinyl",
        productId: "21",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Pink Floyd",
        image: "https://bit.ly/3eLQ0dK",
        price: 30.0,
        category: "vinyl",
        productId: "22",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Rolling Stones",
        image: "https://bit.ly/3BKCG2i",
        price: 30.0,
        category: "vinyl",
        productId: "23",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
      {
        name: "Nirvana",
        image: "https://bit.ly/3DyLAS4",
        price: 26.0,
        category: "vinyl",
        productId: "24",
        description:
          "Digitally remastered edition. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen,Denmark.",
      },
    ],
  },

  {
    category: "guitars",
    title: "Coolest Guitars",
    products: [
      {
        name: "Black Fender",
        image: "https://bit.ly/3QSjDaJ",
        price: 893.0,
        category: "guitars",
        productId: "0",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Red Classic",
        image: "https://bit.ly/3RQXFX3",
        price: 450.0,
        category: "guitars",
        productId: "1",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Black Classic",
        image: "https://bit.ly/3RT3ZNw",
        price: 800.0,
        category: "guitars",
        productId: "2",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Red Guitar",
        image: "https://bit.ly/3RWioZp",
        price: 556.0,
        category: "guitars",
        productId: "3",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Pink Gibson",
        image: "https://bit.ly/3Scz9za",
        price: 789.45,
        category: "guitars",
        productId: "4",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Pink Fender",
        image: "https://bit.ly/3QK7nZO",
        price: 510.12,
        category: "guitars",
        productId: "5",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Blue Fender",
        image: "https://bit.ly/3LjHMps",
        price: 480.12,
        category: "guitars",
        productId: "6",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Flamed Classic",
        image: "https://bit.ly/3RJOzLz",
        price: 700.0,
        category: "guitars",
        productId: "7",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Blue Classic",
        image: "https://bit.ly/3Bn9Wvg",
        price: 390.99,
        category: "guitars",
        productId: "8",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Limited Edition",
        image: "https://bit.ly/3Ln7iu3",
        price: 989.52,
        category: "guitars",
        productId: "9",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Black Acoustic",
        image: "https://bit.ly/3RSw9YW",
        price: 300.0,
        category: "guitars",
        productId: "10",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Classic Acoustic",
        image: "https://bit.ly/3eXzSGj",
        price: 350.8,
        category: "guitars",
        productId: "11",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Acoustic",
        image: "https://bit.ly/3UhO2lF",
        price: 632.2,
        category: "guitars",
        productId: "12",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Classic",
        image: "https://bit.ly/3DNFfCr",
        price: 420.0,
        category: "guitars",
        productId: "13",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Pink Classic",
        image: "https://bit.ly/3Dy1njV",
        price: 750.0,
        category: "guitars",
        productId: "14",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Purple Classic",
        image: "https://bit.ly/3xxTaZb",
        price: 299.99,
        category: "guitars",
        productId: "15",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Black Electric",
        image: "https://bit.ly/3qLuA3i",
        price: 250.0,
        category: "guitars",
        productId: "16",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
      {
        name: "Green Electric",
        image: "https://bit.ly/3xuGWR7",
        price: 255.0,
        category: "guitars",
        productId: "17",
        description:
          "GUITAR with onboard 18-watt amp, discrete analog effects, and stereo speakers. Get amazing cabinet-like tone-to-go right out of the guitar. ",
      },
    ],
  },

  {
    category: "books",
    title: "Scary Novels",
    products: [
      {
        name: "Frankenstein",
        image: "https://bit.ly/3S8Ncpx",
        price: 55.0,
        category: "books",
        productId: "0",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "Dracula",
        image: "https://bit.ly/3diVFaS",
        price: 27.8,
        category: "books",
        productId: "1",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "IT",
        image: "https://bit.ly/3xwcuGi",
        price: 28.7,
        category: "books",
        productId: "2",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "Hill House",
        image: "https://bit.ly/3qM86ze",
        price: 30.0,
        category: "books",
        productId: "3",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "Interview with the Vampire",
        image: "https://bit.ly/3xuUtrZ",
        price: 26.4,
        category: "books",
        productId: "4",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "The Shining",
        image: "https://bit.ly/3DC2yPv",
        price: 40.0,
        category: "books",
        productId: "5",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "The Woman in Black",
        image: "https://bit.ly/3BqjWUo",
        price: 45.33,
        category: "books",
        productId: "6",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "Bird Box",
        image: "https://bit.ly/3RPGncB",
        price: 32.15,
        category: "books",
        productId: "7",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "World War Z",
        image: "https://bit.ly/3Ufr0fk",
        price: 27.99,
        category: "books",
        productId: "8",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "The Hunger",
        image: "https://bit.ly/3QU6az4",
        price: 37.21,
        category: "books",
        productId: "9",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "Sanatorium",
        image: "https://bit.ly/3qLOWt4",
        price: 65.0,
        category: "books",
        productId: "10",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "RoseMary's Baby",
        image: "https://bit.ly/3dnVnQ6",
        price: 58.71,
        category: "books",
        productId: "11",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
      {
        name: "Carmilla",
        image: "https://bit.ly/3BHPsxB",
        price: 45.74,
        category: "books",
        productId: "12",
        description:
          "Research shows reading helps prevent stress and depression. Reading the best sales books can even lead to higher income and more meaningful careers.",
      },
    ],
  },
];
