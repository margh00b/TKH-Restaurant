const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  /* await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: "$2a$10$JenYHRizTMmdLFPjHacKd.tHGTnAA1Ewle6P9c0lknK.tcMRdvxtO",
      name: "Admin",
      role: "ADMIN",
    },
  });
 */
  const menuItems = [
    // Curries
    {
      title: "Chicken Korma",
      price: 12.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/ChickenKorma.png",
    },
    {
      title: "Chicken Karahi",
      price: 15.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/ChickenKarahi.png",
    },
    {
      title: "Butter Chicken",
      price: 13.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/ButterChicken.png",
    },
    {
      title: "Chicken Tikka Masala",
      price: 13.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/ChickenTikkaMasala.png",
    },
    {
      title: "Bhindi Chicken",
      price: 12.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/BhindiChicken.png",
    },
    {
      title: "Bhindi Lamb",
      price: 14.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/BhindiLamb.png",
    },
    {
      title: "Karely Chicken",
      price: 12.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/KarelyChicken.png",
    },
    {
      title: "Daal Chicken",
      price: 12.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/DaalChicken.png",
    },
    {
      title: "Nihari",
      price: 14.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/Nihari.png",
    },
    {
      title: "Lamb Korma",
      price: 14.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/LambKorma.png",
    },
    {
      title: "Lamb Karahi",
      price: 19.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/LambKarahi.png",
    },
    {
      title: "Palak Chicken",
      price: 12.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/PalakChicken.png",
    },
    {
      title: "Palak Lamb",
      price: 14.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/PalakLamb.png",
    },
    {
      title: "Keema Aloo",
      price: 14.99,
      category: "CURRIES",
      description: "with 2 naan",
      image: "/KeemaAloo.png",
    },

    // Vegetarian
    {
      title: "Palak Paneer",
      price: 12.99,
      category: "VEGETARIAN",
      description: "with 2 naan",
      image: "/PalakPaneer.png",
    },
    {
      title: "Bhindi Masala",
      price: 12.99,
      category: "VEGETARIAN",
      description: "with 2 naan",
      image: "/BhindiMasala.png",
    },
    {
      title: "Chana Daal or Maash Daal",
      price: 11.99,
      category: "VEGETARIAN",
      description: "with 2 naan",
      image: "/ChanaDaal.png",
    },
    {
      title: "Karely Daal",
      price: 12.99,
      category: "VEGETARIAN",
      description: "with 2 naan",
      image: "/KarelyDaal.png",
    },
    {
      title: "Matar Paneer",
      price: 12.99,
      category: "VEGETARIAN",
      description: "with 2 naan",
      image: "/MatarPaneer.png",
    },
    {
      title: "Butter Paneer",
      price: 13.99,
      category: "VEGETARIAN",
      description: "with 2 naan",
      image: "/ButterPaneer.png",
    },

    // Wraps
    {
      title: "Beef Kabab Wrap",
      price: 8.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/BeefWrap.png",
    },
    {
      title: "Chicken Kabab Wrap",
      price: 8.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/ChickenWrap.png",
    },
    {
      title: "Fish Kabab Wrap",
      price: 11.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/FishWrap.png",
    },
    {
      title: "Butter Chicken Wrap",
      price: 11.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/ButterWrap.png",
    },
    {
      title: "Chicken Tikka Wrap",
      price: 11.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/TikkaWrap.png",
    },

    // Kabab
    {
      title: "Tandoori Chicken with rice",
      price: 16.99,
      category: "TANDOORI_KABAB",
      description: "2pcs full legs",
      image: "/TandooriChicken.png",
    },
    {
      title: "Tandoori Chicken Tikka with rice",
      price: 14.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/ChickenTikka.png",
    },
    {
      title: "Tandoori Beef Kabab with rice",
      price: 14.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/BeefKabab.png",
    },
    {
      title: "Tandoori Chicken Kabab with rice",
      price: 13.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/ChickenKabab.png",
    },
    {
      title: "Tandoori Fish Tikka with rice",
      price: 14.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/FishTikka.png",
    },
    {
      title: "Tandoori Platter",
      price: 27.99,
      category: "TANDOORI_KABAB",
      description: "",
      image: "/TandooriPlatter.png",
    },

    // Sides
    {
      title: "Veg Samosa (2pcs)",
      price: 3.99,
      category: "SIDES",
      description: "",
      image: "/Samosa.png",
    },
    {
      title: "Tandoori Naan",
      price: 1.75,
      category: "SIDES",
      description: "",
      image: "/TandooriNaan.png",
    },
    {
      title: "Whole Wheat Roti",
      price: 1.99,
      category: "SIDES",
      description: "",
      image: "/Roti.png",
    },
    {
      title: "Garlic Naan",
      price: 2.49,
      category: "SIDES",
      description: "",
      image: "/GarlicNaan.png",
    },
    {
      title: "Potato Naan",
      price: 5.99,
      category: "SIDES",
      description: "",
      image: "/PotatoNaan.png",
    },
    {
      title: "Beef Naan",
      price: 6.99,
      category: "SIDES",
      description: "",
      image: "/BeefNaan.png",
    },

    // Rice
    {
      title: "Vegetable Rice",
      price: 3.99,
      category: "RICE",
      description: "",
      image: "/VegRice.png",
    },
    {
      title: "Chicken Biryani",
      price: 11.49,
      category: "RICE",
      description: "",
      image: "/ChickenBiryani.png",
    },

    // Desserts
    {
      title: "Kheer (Rice Pudding)",
      price: 4.49,
      category: "DESSERT",
      description: "",
      image: "/Kheer.png",
    },
    {
      title: "Gulab Jamun",
      price: 4.49,
      category: "DESSERT",
      description: "",
      image: "/GulabJamun.png",
    },

    // Drinks
    {
      title: "Pop Can / Water Bottle",
      price: 2.0,
      category: "DRINKS",
      description: "",
      image: "/PopCan.png",
    },
    {
      title: "Lassi (sweet/salted)",
      price: 3.99,
      category: "DRINKS",
      description: "",
      image: "/Lassi.png",
    },
    {
      title: "Mango Lassi",
      price: 4.99,
      category: "DRINKS",
      description: "",
      image: "/MangoLassi.png",
    },
    {
      title: "Mango Milkshake",
      price: 4.99,
      category: "DRINKS",
      description: "",
      image: "/MangoMilkshake.png",
    },
    {
      title: "Pop 2 Litre",
      price: 4.99,
      category: "DRINKS",
      description: "",
      image: "/Pop2Litre.png",
    },
    {
      title: "Tea",
      price: 3.99,
      category: "DRINKS",
      description: "",
      image: "/Tea.png",
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
