const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: "$2a$10$JenYHRizTMmdLFPjHacKd.tHGTnAA1Ewle6P9c0lknK.tcMRdvxtO",
      name: "Admin",
      role: "ADMIN",
    },
  });

  const menuItems = [
    // Curries
    {
      title: "Chicken Korma",
      price: 12.99,
      category: "CURRIES",
      image: "/ChickenKorma.png",
      description:
        "A rich, creamy curry with tender chicken and aromatic spices.",
    },
    {
      title: "Chicken Karahi",
      price: 15.99,
      category: "CURRIES",
      image: "/ChickenKarahi.png",
      description: "A spicy, tangy chicken curry cooked in a traditional wok.",
    },
    {
      title: "Butter Chicken",
      price: 13.99,
      category: "CURRIES",
      image: "/ButterChicken.png",
      description:
        "A creamy, mildly spiced curry with succulent chicken pieces.",
    },
    {
      title: "Chicken Tikka Masala",
      price: 13.99,
      category: "CURRIES",
      image: "/ChickenTikkaMasala.png",
      description: "Tender chicken pieces in a spiced tomato-based sauce.",
    },
    {
      title: "Bhindi Chicken",
      price: 12.99,
      category: "CURRIES",
      image: "/BhindiChicken.png",
      description:
        "A unique combination of okra and chicken cooked in a flavorful curry.",
    },
    {
      title: "Bhindi Lamb",
      price: 14.99,
      category: "CURRIES",
      image: "/BhindiLamb.png",
      description: "Lamb and okra cooked in a rich, aromatic curry.",
    },
    {
      title: "Karely Chicken",
      price: 12.99,
      category: "CURRIES",
      image: "/KarelyChicken.png",
      description:
        "A savory chicken curry with bitter gourd for a unique taste.",
    },
    {
      title: "Daal Chicken",
      price: 12.99,
      category: "CURRIES",
      image: "/DaalChicken.png",
      description: "A comforting chicken curry with lentils.",
    },
    {
      title: "Nihari",
      price: 14.99,
      category: "CURRIES",
      image: "/Nihari.png",
      description:
        "A rich, slow-cooked stew with tender beef and aromatic spices.",
    },
    {
      title: "Lamb Korma",
      price: 14.99,
      category: "CURRIES",
      image: "/LambKorma.png",
      description: "A mild, creamy curry made with tender lamb and yogurt.",
    },
    {
      title: "Lamb Karahi",
      price: 19.99,
      category: "CURRIES",
      image: "/LambKarahi.png",
      description: "Lamb cooked in a wok with a blend of spices and tomatoes.",
    },
    {
      title: "Palak Chicken",
      price: 12.99,
      category: "CURRIES",
      image: "/PalakChicken.png",
      description: "Chicken cooked with spinach and a flavorful mix of spices.",
    },
    {
      title: "Palak Lamb",
      price: 14.99,
      category: "CURRIES",
      image: "/PalakLamb.png",
      description: "Tender lamb pieces cooked with fresh spinach.",
    },
    {
      title: "Keema Aloo",
      price: 14.99,
      category: "CURRIES",
      image: "/KeemaAloo.png",
      description: "Ground meat and potatoes cooked with aromatic spices.",
    },
    {
      title: "Haleem",
      price: 15.99,
      category: "CURRIES",
      image: "/Haleem.png",
      description:
        "A slow-cooked stew of meat, lentils, and wheat with rich flavors.",
    },

    // Vegetarian
    {
      title: "Palak Paneer",
      price: 12.99,
      category: "VEGETARIAN",
      image: "/PalakPaneer.png",
      description: "A creamy curry with spinach and paneer (Indian cheese).",
    },
    {
      title: "Bhindi Masala",
      price: 12.99,
      category: "VEGETARIAN",
      image: "/BhindiMasala.png",
      description: "Spicy stir-fried okra with Indian spices.",
    },
    {
      title: "Chana Daal or Maash Daal",
      price: 11.99,
      category: "VEGETARIAN",
      image: "/ChanaDaal.png",
      description: "A comforting lentil dish, perfect as a side or main.",
    },
    {
      title: "Karely Daal",
      price: 12.99,
      category: "VEGETARIAN",
      image: "/KarelyDaal.png",
      description: "A unique combination of lentils and bitter gourd.",
    },
    {
      title: "Matar Paneer",
      price: 12.99,
      category: "VEGETARIAN",
      image: "/MatarPaneer.png",
      description: "Paneer and peas cooked in a savory curry.",
    },
    {
      title: "Butter Paneer",
      price: 13.99,
      category: "VEGETARIAN",
      image: "/ButterPaneer.png",
      description: "Paneer cooked in a rich, creamy tomato gravy.",
    },

    // Tandoori Kabab
    {
      title: "Tandoori Chicken with rice",
      price: 16.99,
      category: "TANDOORI_KABAB",
      image: "/TandooriChicken.png",
      description:
        "Juicy chicken marinated in spices and cooked in a tandoor, served with rice.",
    },
    {
      title: "Tandoori Chicken Tikka with rice",
      price: 14.99,
      category: "TANDOORI_KABAB",
      image: "/ChickenTikka.png",
      description: "Spicy, grilled chicken pieces served with rice.",
    },
    {
      title: "Tandoori Beef Kabab with rice",
      price: 14.99,
      category: "TANDOORI_KABAB",
      image: "/BeefKabab.png",
      description: "Beef kababs grilled in a tandoor and served with rice.",
    },
    {
      title: "Tandoori Chicken Kabab with rice",
      price: 13.99,
      category: "TANDOORI_KABAB",
      image: "/ChickenKabab.png",
      description:
        "Grilled chicken kababs marinated with Indian spices, served with rice.",
    },
    {
      title: "Tandoori Fish Tikka with rice",
      price: 14.99,
      category: "TANDOORI_KABAB",
      image: "/FishTikka.png",
      description:
        "Fish marinated in spices and grilled to perfection, served with rice.",
    },
    {
      title: "Tandoori Platter",
      price: 27.99,
      category: "TANDOORI_KABAB",
      image: "/TandooriPlatter.png",
      description: "A mixed platter of grilled tandoori meats and rice.",
    },

    // Rice
    {
      title: "Vegetable Rice",
      price: 3.99,
      category: "RICE",
      image: "/VegRice.png",
      description: "Fragrant rice cooked with vegetables and mild spices.",
    },
    {
      title: "Chicken Biryani",
      price: 11.49,
      category: "RICE",
      image: "/ChickenBiryani.png",
      description: "Aromatic spiced rice layered with tender chicken.",
    },

    // Desserts
    {
      title: "Kheer (Rice Pudding)",
      price: 4.49,
      category: "DESSERT",
      image: "/Kheer.png",
      description: "A sweet, creamy rice pudding with cardamom.",
    },
    {
      title: "Gulab Jamun",
      price: 4.49,
      category: "DESSERT",
      image: "/GulabJamun.png",
      description: "Deep-fried dough balls soaked in a sugary syrup.",
    },

    // Drinks
    {
      title: "Pop Can / Water Bottle",
      price: 2.0,
      category: "DRINKS",
      image: "/PopCan.png",
      description: "Choose from a variety of soft drinks or water.",
    },
    {
      title: "Lassi (sweet/salted)",
      price: 3.99,
      category: "DRINKS",
      image: "/Lassi.png",
      description: "A refreshing yogurt drink, available sweet or salted.",
    },
    {
      title: "Mango Lassi",
      price: 4.99,
      category: "DRINKS",
      image: "/MangoLassi.png",
      description: "A sweet and creamy mango yogurt drink.",
    },
    {
      title: "Mango Milkshake",
      price: 4.99,
      category: "DRINKS",
      image: "/MangoMilkshake.png",
      description: "A rich, refreshing milkshake made with mangoes.",
    },
    {
      title: "Pop 2 Litre",
      price: 4.99,
      category: "DRINKS",
      image: "/Pop2Litre.png",
      description: "A large bottle of your favorite soft drink.",
    },
    {
      title: "Tea",
      price: 3.99,
      category: "DRINKS",
      image: "/Tea.png",
      description: "A soothing cup of traditional tea.",
    },

    // Wraps
    {
      title: "Beef Kabab Wrap",
      price: 8.99,
      category: "WRAPS",
      image: "/BeefWrap.png",
      description: "A delicious beef kabab wrapped in a soft flatbread.",
    },
    {
      title: "Chicken Kabab Wrap",
      price: 8.99,
      category: "WRAPS",
      image: "/ChickenWrap.png",
      description: "Grilled chicken kababs wrapped in a fresh flatbread.",
    },
    {
      title: "Fish Kabab Wrap",
      price: 11.99,
      category: "WRAPS",
      image: "/FishWrap.png",
      description: "Tender fish kababs wrapped in a soft flatbread.",
    },
    {
      title: "Butter Chicken Wrap",
      price: 11.99,
      category: "WRAPS",
      image: "/ButterWrap.png",
      description: "Creamy butter chicken wrapped in soft flatbread.",
    },
    {
      title: "Chicken Tikka Wrap",
      price: 11.99,
      category: "WRAPS",
      image: "/TikkaWrap.png",
      description: "Spicy chicken tikka wrapped in warm flatbread.",
    },

    // Sides
    {
      title: "Veg Samosa (2pcs)",
      price: 3.99,
      category: "SIDES",
      image: "/Samosa.png",
      description: "Crispy, golden pastry filled with spiced vegetables.",
    },
    {
      title: "Tandoori Naan",
      price: 1.75,
      category: "SIDES",
      image: "/TandooriNaan.png",
      description: "Soft, pillowy naan bread baked in a tandoor.",
    },
    {
      title: "Whole Wheat Roti",
      price: 1.99,
      category: "SIDES",
      image: "/Roti.png",
      description: "A healthier, whole wheat version of traditional roti.",
    },
    {
      title: "Garlic Naan",
      price: 2.49,
      category: "SIDES",
      image: "/GarlicNaan.png",
      description: "A fragrant, garlic-infused naan bread.",
    },
    {
      title: "Potato Naan",
      price: 5.99,
      category: "SIDES",
      image: "/PotatoNaan.png",
      description: "Naan stuffed with spiced potatoes for extra flavor.",
    },
    {
      title: "Beef Naan",
      price: 6.99,
      category: "SIDES",
      image: "/BeefNaan.png",
      description: "Naan stuffed with flavorful beef filling.",
    },
  ];

  for (const item of menuItems) {
    await prisma.menuItem.create({
      data: {
        title: item.title,
        description: item.description,
        category: item.category as any,
        price: item.price,
        image: item.image,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
