const products = [{
    id: 1,
    name: "Iced Americano",
    price: 10500,
    originalPrice: 21000,
    category: "AmericanoSeries",
    image: "https://files.catbox.moe/vtof6n.jpg"
  },
  {
    id: 2,
    name: "Hot Americano",
    price: 10500,
    originalPrice: 21000,
    category: "AmericanoSeries",
    image: "https://files.catbox.moe/qr4ch7.jpg"
  },
  {
    id: 3,
    name: "Iced Manuka Americano",
    price: 14500,
    originalPrice: 29000,
    category: "AmericanoSeries",
    image: "https://files.catbox.moe/11van8.jpg"
  },
  {
    id: 4,
    name: "Hot Manuka Americano",
    price: 14500,
    originalPrice: 29000,
    category: "AmericanoSeries",
    image: "https://files.catbox.moe/qr4ch7.jpg"
  },
  {
    id: 5,
    name: "Triple Peach Americano",
    price: 14500,
    originalPrice: 29000,
    category: "AmericanoSeries",
    image: "https://files.catbox.moe/sw3uqj.jpg"
  },
  {
    id: 6,
    name: "Berry Manuka Americano",
    price: 14500,
    originalPrice: 29000,
    category: "AmericanoSeries",
    image: "https://files.catbox.moe/fojru3.jpg"
  },
  {
    id: 7,
    name: "Iced Café Malt Latte",
    price: 16500,
    originalPrice: 33000,
    category: "Coffee",
    image: "https://files.catbox.moe/opu15a.jpg"
  },
  {
    id: 8,
    name: "Hot Café Malt Latte",
    price: 16500,
    originalPrice: 33000,
    category: "Coffee",
    image: "https://files.catbox.moe/wmoc8l.jpg"
  },
  {
    id: 9,
    name: "Iced Classic Latte",
    price: 12000,
    originalPrice: 24000,
    category: "Coffee",
    image: "https://files.catbox.moe/rdu4y1.jpg"
  },
  {
    id: 10,
    name: "Iced Cappuccino",
    price: 14500,
    originalPrice: 29000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/Capucino%20Iced%20(1).jpg"
  },
  {
    id: 11,
    name: "Hot Cappuccino",
    price: 14500,
    originalPrice: 29000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/Cappucino%20Hot%20(1).jpg"
  },
  {
    id: 12,
    name: "Double Iced Shaken Latte",
    price: 16500,
    originalPrice: 33000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/Double%20Iced%20Shaken%20Latte%20(1).jpg"
  },
  {
    id: 13,
    name: "Iced Café Latte",
    price: 14500,
    originalPrice: 29000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/Cafe%20Latte%20Iced.jpg"
  },
  {
    id: 14,
    name: "Hot Café Latte",
    price: 14500,
    originalPrice: 29000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/Cafe%20Latte%20Hot%20(1).jpg"
  },
  {
    id: 15,
    name: "Iced Salted Caramel Mocha",
    price: 16500,
    originalPrice: 33000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/saltedcarameliced173.jpg"
  },
  {
    id: 16,
    name: "Hot Salted Caramel Mocha",
    price: 16500,
    originalPrice: 33000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/salted-caramel173.jpg"
  },
  {
    id: 17,
    name: "Nutty Oat Latte",
    price: 19500,
    originalPrice: 39000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg"
  },
  {
    id: 18,
    name: "Hot Espresso",
    price: 9500,
    originalPrice: 19000,
    category: "Coffee",
    image: "https://static.fore.coffee/product/espresso173.jpg"
  },
  {
    "id": 19,
    "name": "Butterscotch Sea Salt Latte 1L",
    "price": 89000,
    "originalPrice": 124000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/butterscotchssl1l1402.jpg"
  },
  {
    "id": 20,
    "name": "Aren Latte 1L",
    "price": 55000,
    "originalPrice": 90000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/ArenLatte1L3006.jpg"
  },
  {
    "id": 21,
    "name": "Caramel Praline Macchiato 1L",
    "price": 60000,
    "originalPrice": 95000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/CaramelPralineMacchiato1L3006.jpg"
  },
  {
    "id": 22,
    "name": "Pandan Latte 1L",
    "price": 55000,
    "originalPrice": 90000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/pandanlatte1L3006.jpg"
  },
  {
    "id": 23,
    "name": "Café Malt Latte 1L",
    "price": 60000,
    "originalPrice": 95000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/cafe%20malt.jpg"
  },
  {
    "id": 24,
    "name": "Café Latte 1L",
    "price": 55000,
    "originalPrice": 90000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/latte1L3006.jpg"
  },
  {
    "id": 25,
    "name": "Classic Latte 1L",
    "price": 45000,
    "originalPrice": 80000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/ClassicLatte1L3006.jpg"
  },
  {
    "id": 26,
    "name": "Nutty Oat Latte 1L",
    "price": 89000,
    "originalPrice": 124000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/1L-nutty-oat.jpeg"
  },
  {
    "id": 27,
    "name": "Almond Choco 1L",
    "price": 89000,
    "originalPrice": 124000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/RTD.jpg"
  },
  {
    "id": 28,
    "name": "Matcha Green Tea 1L",
    "price": 60000,
    "originalPrice": 95000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/matcha1L3006.jpg"
  },
  {
    "id": 29,
    "name": "Tropical Manuka Hibiscus 1L",
    "price": 60000,
    "originalPrice": 95000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/1L-hibi-manuka3006.jpeg"
  },
  {
    "id": 30,
    "name": "Gula Merah Latte 1L",
    "price": 45000,
    "originalPrice": 80000,
    "category": "FOREveryone1L",
    "image": "https://static.fore.coffee/product/GulamerahLatte1L3006.jpg"
  },
  {
    id: 31,
    name: "Pain au Tiramisu",
    price: 18000,
    originalPrice: 36000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Pain%20au%20Tiramisu.png"
  }, {
    id: 32,
    name: "Matcha Strawberry Cake",
    price: 13500,
    originalPrice: 27000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Strawberry%20Matcha%20Cake%20Zoomed%20(1).png"
  }, {
    id: 33,
    name: "Mushroom Truffle Sandwich",
    price: 21000,
    originalPrice: 42000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Mushroom%20Truffle%20Sandwich.png"
  }, {
    id: 34,
    name: "Cheesy Tuna Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Cheesy%20Tuna%20Sandwich.png"
  }, {
    id: 35,
    name: "Chicken Teriyaki Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Chicken%20Teriyaki%20Sandwich.png"
  }, {
    id: 36,
    name: "Smoked Beef Cheese Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Smoked%20Beef%20&%20Cheese%20Sandwich.png"
  }, {
    id: 37,
    name: "Blueberry Cheese Muffin",
    price: 18000,
    originalPrice: 36000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Blueberry%20Cheese%20Muffin.png"
  }, {
    id: 38,
    name: "Choco Melt Muffin",
    price: 18000,
    originalPrice: 36000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Choco%20Melt%20Muffin.png"
  }, {
    id: 39,
    name: "Tuna Mayo Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Tuna%20Mayo.jpg"
  }, {
    id: 40,
    name: "Chicken Curry Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Chicken%20curry.jpg"
  }, {
    id: 41,
    name: "Asian Beef Black Pepper Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/beef%20bpp.jpg"
  }, {
    id: 42,
    name: "Smoked Beef Cheese Croissant",
    price: 18000,
    originalPrice: 36000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Smoked%20Beef%20_%20Cheese%20Croissant.jpg"
  }, {
    id: 43,
    name: "Triple Cheese Danish",
    price: 16500,
    originalPrice: 33000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Triple%20Cheese%20Danish.jpg"
  }, {
    id: 44,
    name: "Almond Croissant",
    price: 16500,
    originalPrice: 33000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Almond%20Croissant%20-1.jpg"
  }, {
    id: 45,
    name: "Blueberry Muffin",
    price: 16500,
    originalPrice: 33000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Blueberry%20Muffin--1.jpg"
  }, {
    id: 46,
    name: "Chocolate Muffin",
    price: 16500,
    originalPrice: 33000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Chocolate%20Muffin%20-%201.jpg"
  }, {
    id: 47,
    name: "Smoky Beef Barbecue Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Spice%20Beef%20BBQ%20Sandwich.jpg"
  }, {
    id: 48,
    name: "Creamy Beef Mentai Sandwich",
    price: 19500,
    originalPrice: 39000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Beef%20Mentai.jpg"
  }, {
    id: 49,
    name: "Banana Chocolate Cake",
    price: 13500,
    originalPrice: 27000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/thumbbbb.jpg"
  }, {
    id: 50,
    name: "Cempedak Cake",
    price: 13500,
    originalPrice: 27000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/cempedak-80.jpg"
  }, {
    id: 51,
    name: "Butter Croissant",
    price: 12000,
    originalPrice: 24000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Butter%20Croissant%20_-80.jpg"
  }, {
    id: 52,
    name: "Pain au Chocolat",
    price: 14500,
    originalPrice: 29000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/painauchocolat2403.jpg"
  }, {
    id: 53,
    name: "Kouign-Amann",
    price: 14500,
    originalPrice: 29000,
    category: "ForeDeli",
    image: "https://static.fore.coffee/product/Kouign%20amann-.jpg"
  }, {
    id: 54,
    name: "Iced Butterscotch Milk Crumble",
    price: 14500,
    originalPrice: 29000,
    category: "ForeJunior",
    image: "https://static.fore.coffee/product/butterscotch.jpg"
  }, {
    id: 55,
    name: "Iced Vanilla O Crumbs",
    price: 14500,
    originalPrice: 29000,
    category: "ForeJunior",
    image: "https://static.fore.coffee/product/vanila%20o'crumbs.jpg"
  }, {
    id: 56,
    name: "Iced Choco Caramel Cloud",
    price: 14500,
    originalPrice: 29000,
    category: "ForeJunior",
    image: "https://static.fore.coffee/product/choco%20caramel%20cloud.jpg"
  }, {
    id: 57,
    name: "Iced Banggo Fruity Jelly",
    price: 14500,
    originalPrice: 29000,
    category: "ForeJunior",
    image: "https://static.fore.coffee/product/banggo.jpg"
  }, {
    "id": 58,
    "name": "Iced Cappuccino Caramello",
    "price": 14500,
    "originalPrice": 29000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Thumbnail_Menu_Cappuccino.jpg"
  },
  {
    "id": 59,
    "name": "Iced Butterscotch Sea Salt Latte",
    "price": 15500,
    "originalPrice": 31000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Butterscoth%20Iced.jpg"
  },
  {
    "id": 60,
    "name": "Iced Buttercream Latte",
    "price": 14500,
    "originalPrice": 29000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Buttercream%20Latte%20(1).jpg"
  },
  {
    "id": 61,
    "name": "Iced Aren Latte",
    "price": 14500,
    "originalPrice": 29000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Aren%20Latte%20Ice.jpg"
  },
  {
    "id": 62,
    "name": "Hot Aren Latte",
    "price": 14500,
    "originalPrice": 29000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Aren%20Latte%20Hot.jpg"
  },
  {
    "id": 63,
    "name": "Iced Pandan Latte",
    "price": 14500,
    "originalPrice": 29000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Pandan%20Latte%20Iced.jpg"
  },
  {
    "id": 64,
    "name": "Hot Pandan Latte",
    "price": 14500,
    "originalPrice": 29000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Pandan%20Latte%20Hot.jpg"
  },
  {
    "id": 65,
    "name": "Iced Buttercream Tiramisu Latte",
    "price": 16500,
    "originalPrice": 33000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Buttercream%20Tiramisu%20Latte.jpg"
  },
  {
    "id": 66,
    "name": "Iced Caramel Praline Macchiato",
    "price": 16500,
    "originalPrice": 33000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Caramel%20Praline%20Macchiato%20Iced%20(1).jpg"
  },
  {
    "id": 67,
    "name": "Hot Caramel Praline Macchiato",
    "price": 16500,
    "originalPrice": 33000,
    "category": "ForeSignature",
    "image": "https://static.fore.coffee/product/Caramel%20Praline%20Macchiato%20Hot.jpg"
  },
  {
    "id": 68,
    "name": "Caramel Praline Coffee Ice Blended",
    "price": 16500,
    "originalPrice": 33000,
    "category": "IceBlended",
    "image": "https://static.fore.coffee/product/caramelpralinecoffee173.jpg"
  }, {
    "id": 69,
    "name": "Matcha Ice Blended",
    "price": 16500,
    "originalPrice": 33000,
    "category": "IceBlended",
    "image": "https://static.fore.coffee/product/matchablended173.jpg"
  }, {
    "id": 70,
    "name": "Strawberry Ice Blended",
    "price": 16500,
    "originalPrice": 33000,
    "category": "IceBlended",
    "image": "https://static.fore.coffee/product/strawberryblend173.jpg"
  }, {
    "id": 71,
    "name": "Chocolate Ice Blended",
    "price": 16500,
    "originalPrice": 33000,
    "category": "IceBlended",
    "image": "https://static.fore.coffee/product/chocolateblend173.jpg"
  },
  {
    "id": 72,
    "name": "Iced Dark Chocolate",
    "price": 16500,
    "originalPrice": 33000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/darkchocolate-01.jpg"
  }, {
    "id": 73,
    "name": "Hot Dark Chocolate",
    "price": 16500,
    "originalPrice": 33000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/darkchocolate-02.jpg"
  }, {
    "id": 74,
    "name": "Iced Almond Choco",
    "price": 19500,
    "originalPrice": 39000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/almondchocoiced173.jpg"
  }, {
    "id": 75,
    "name": "Hot Almond Choco",
    "price": 19500,
    "originalPrice": 39000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/almondchocohot173.jpg"
  }, {
    "id": 76,
    "name": "Iced Matcha Green Tea",
    "price": 16500,
    "originalPrice": 33000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/matchagreentealatte173.jpg"
  }, {
    "id": 77,
    "name": "Hot Matcha Green Tea",
    "price": 16500,
    "originalPrice": 33000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/matchagreeteahot173.jpg"
  }, {
    "id": 78,
    "name": "Iced Classic Milo",
    "price": 12000,
    "originalPrice": 24000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/classicmiloiced173.jpg"
  }, {
    "id": 79,
    "name": "Hot Classic Milo",
    "price": 12000,
    "originalPrice": 24000,
    "category": "NonCoffee",
    "image": "https://static.fore.coffee/product/classicmilohot173.jpg"
  }, {
    "id": 80,
    "name": "Hibiscus Lychee Peach Yakult",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Refresher",
    "image": "https://static.fore.coffee/product/hibiscuslychee173.jpg"
  }, {
    "id": 81,
    "name": "Sunny Citrus Jasmine",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Refresher",
    "image": "https://static.fore.coffee/product/sunnycitrus173.jpg"
  }, {
    "id": 82,
    "name": "Iced Coco Peach Citrus",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Refresher",
    "image": "https://static.fore.coffee/product/Coco%20Peach%20Citrus.jpeg"
  }, {
    "id": 83,
    "name": "Tropical Manuka Hibiscus",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Refresher",
    "image": "https://static.fore.coffee/product/tropicalmanukahibi173.jpg"
  }, {
    "id": 84,
    "name": "Iced English Breakfast",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/englishbreakfasticed173.jpg"
  }, {
    "id": 85,
    "name": "Hot English Breakfast",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/englishbreakfast173.jpg"
  }, {
    "id": 86,
    "name": "Iced Green Tea Jasmine",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/greenteajasmineiced173.jpg"
  }, {
    "id": 87,
    "name": "Hot Green Tea Jasmine",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/greenteajasmine173.jpg"
  }, {
    "id": 88,
    "name": "Iced Pure Chamomile",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/purechamomileiced173.jpg"
  }, {
    "id": 89,
    "name": "Hot Pure Chamomile",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/purechamomile173.jpg"
  }, {
    "id": 90,
    "name": "Iced Lady Grey",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/ladygreyiced173.jpg"
  }, {
    "id": 91,
    "name": "Hot Lady Grey",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/ladygrey173.jpg"
  }, {
    "id": 92,
    "name": "Iced Creme Caramel Tea",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/cremecaramelteaiced173.jpg"
  }, {
    "id": 93,
    "name": "Hot Creme Caramel Tea",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/cremecarameltea173.jpg"
  }, {
    "id": 94,
    "name": "Iced Green Tea Mint",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/greenteaminticed173.jpg"
  }, {
    "id": 95,
    "name": "Hot Green Tea Mint",
    "price": 14500,
    "originalPrice": 29000,
    "category": "Tea",
    "image": "https://static.fore.coffee/product/greenteamint173.jpg"
  }


];
