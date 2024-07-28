const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

async function main() {
	await prisma.user.upsert({
		where: { username: "admin" },
		update: {},
		create: {
			username: "admin",
			password:
				"$2a$10$JenYHRizTMmdLFPjHacKd.tHGTnAA1Ewle6P9c0lknK.tcMRdvxtO",
			name: "Admin",
			role: "ADMIN",
		},
	});

	const menuItems = [
		{
			title: "Chicken Korma",
			description:
				"Chicken marinated in yogurt, lemon juice, and plenty of spices, then grilled to perfection.",
			category: "MAIN_COURSE",
			price: 14.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Nihari",
			description:
				"Special cut beef with house spices, garlic, ginger. A traditional curry that is Cooked on slow heat.",
			category: "MAIN_COURSE",
			price: 13.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Keema Aloo",
			description:
				"Ground beef cooked with chopped onion, tomatoes & potatoes.",
			category: "MAIN_COURSE",
			price: 13.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Butter Chicken",
			description:
				"Boneless morsels of tandoori chicken covered in a tomato and butter cream sauce.",
			category: "MAIN_COURSE",
			price: 13.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Chicken Tikka Masala",
			description:
				"Chicken with bone cooked with chopped onion, bell pepper & tomatoes.",
			category: "MAIN_COURSE",
			price: 13.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Lamb Korma",
			description:
				"Cooked with tomatoes, onion ginger, chilies and a blend of house spices.",
			category: "MAIN_COURSE",
			price: 14.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Palak Gosht",
			description:
				"Curry made with lamb lathered in a spicy spinach masala",
			category: "MAIN_COURSE",
			price: 14.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Chicken Karahi",
			description: "Chicken cooked in curry sauce tomatoes and ginger",
			category: "MAIN_COURSE",
			price: 15.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Lamb Karahi",
			description:
				"Boneless mutton cooked with tomatoes, ginger chilli and curry.",
			category: "MAIN_COURSE",
			price: 19.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Palak Paneer",
			description: "Spinach leaves cooked with curry sauce.",
			category: "MAIN_COURSE",
			price: 11.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Bhindi Masala",
			description:
				"A dry based Okra curry with spices, onions, tomatoes, garlic and ginger.",
			category: "MAIN_COURSE",
			price: 11.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Chana Daal",
			description: "Lentils cooked in ground spices, ginger and garlic.",
			category: "MAIN_COURSE",
			price: 10.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Haleem",
			description:
				"Special blend of lentils cooked with beef mashed together.",
			category: "MAIN_COURSE",
			price: 12.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Karaly Daal",
			description: "bitter melon with lentil",
			category: "MAIN_COURSE",
			price: 11.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Lamb Karahi",
			description:
				"Boneless mutton cooked with tomatoes, ginger chilli and curry.",
			category: "STARTERS",
			price: 19.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Palak Paneer",
			description: "Spinach leaves cooked with curry sauce.",
			category: "STARTERS",
			price: 11.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Bhindi Masala",
			description:
				"A dry based Okra curry with spices, onions, tomatoes, garlic and ginger.",
			category: "STARTERS",
			price: 11.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Chana Daal",
			description: "Lentils cooked in ground spices, ginger and garlic.",
			category: "STARTERS",
			price: 10.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Haleem",
			description:
				"Special blend of lentils cooked with beef mashed together.",
			category: "STARTERS",
			price: 12.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Karaly Daal",
			description: "bitter melon with lentil",
			category: "STARTERS",
			price: 11.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Pop can/Water bottle",
			description: "Choose your favorite beverage.",
			category: "DRINKS",
			price: 1.5,
			image: "/ChickenKorma.png",
		},
		{
			title: "Lassi (Sweet/Salted)",
			description: "Refreshing yogurt-based drink.",
			category: "DRINKS",
			price: 4.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Lassi (Mango)",
			description: "Sweet and tangy mango lassi.",
			category: "DRINKS",
			price: 4.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Milkshake (Mango)",
			description: "Creamy and delicious mango milkshake.",
			category: "DRINKS",
			price: 4.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "2 Liter Pop",
			description: "Large bottle of your favorite soda.",
			category: "DRINKS",
			price: 4.99,
			image: "/ChickenKorma.png",
		},
		{
			title: "Tea",
			description: "Hot or iced tea.",
			category: "DRINKS",
			price: 2.0,
			image: "/ChickenKorma.png",
		},
		{
			title: "Kheer (Rice Pudding)",
			description: "Sweet and creamy rice pudding.",
			category: "DESSERTS",
			price: 4.49,
			image: "/ChickenKorma.png",
		},
		{
			title: "Gulab Jamun",
			description: "Syrup-soaked deep-fried dumplings.",
			category: "DESSERTS",
			price: 4.49,
			image: "/ChickenKorma.png",
		},
	];

	for (const item of menuItems) {
		await prisma.menuItem.create({
			data: {
				title: item.title,
				description: item.description,
				category: item.category as any,
				price: item.price,
				image: item.image
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
