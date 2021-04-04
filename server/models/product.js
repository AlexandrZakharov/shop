const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  images: [{ type: String }],
  description: {
    type: String,
    required: true,
  },
  rating: String,
  minPrice: {
    type: String,
    required: true,
  },
  configurations: [
    {
      memory: String,
      RAM: String,
      price: String,
    },
  ],
  colors: [{ hex: String, name: String }],
});

mongoose.model("Product", productSchema);

// {
//   "type": "Phones",
//   "link": "iphone-12",
//   "releaseDate": "2020",
//   "name": "Iphone 12",
//   "manufacturer": "Apple",
//   "images": [
//       "https://content2.onliner.by/catalog/device/header/bf14a99b6b00fa25711a3e8e7a87d23a.jpeg",
//       "https://cdn1.ozone.ru/s3/multimedia-b/wc1200/6025763807.jpg",
//       "https://cdn1.ozone.ru/s3/multimedia-h/wc1200/6025763813.jpg",
//       "https://cdn1.ozone.ru/s3/multimedia-e/wc1200/6025763810.jpg"
//   ],
//   "description": "Apple iOS, экран 6.1\" OLED (1170x2532), Apple A14 Bionic, ОЗУ 4 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 2815 мАч, 1 SIM",
//   "rating": "4.5",
//   "minPrice": "799",
  // "configurations": [
  //     {
  //         "memory": "64",
  //         "price": "799"
  //     },
  //     {
  //         "memory": "128",
  //         "price": "849"
  //     },
  //             {
  //         "memory": "256",
  //         "price": "949"
  //     }
  // ],
//   "colors": [
//       {
//           "hex": "#000000",
//           "name": "Midnight black"
//       },
//       {
//           "hex": "#ffffff",
//           "name": "White"
//       }
//   ]
// }
