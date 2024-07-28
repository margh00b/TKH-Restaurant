export const ordersData = [
  {
    orderNo: 1,
    fullName: "John Doe",
    contactNo: "123-456-7890",
    email: "john.doe@example.com",
    orderStatus: "Pending",
    orderDate: "2023-06-20",
    items: [
      {
        id: 1,
        title: "Chicken Korma",
        description:
          "Chicken marinated in yogurt, lemon juice, and plenty of spices, then grilled to perfection.",
        category: "MAIN_COURSE",
        price: "$14.99",
        image: "/ChickenKorma.png",
      },
      {
        id: 2,
        title: "Nihari",
        description:
          "Special cut beef with house spices, garlic, ginger. A traditional curry that is Cooked on slow heat.",
        category: "MAIN_COURSE",
        price: "$13.99",
        image: "/ChickenKorma.png",
      },
    ],
  },
  {
    orderNo: 2,
    fullName: "Jane Smith",
    contactNo: "098-765-4321",
    email: "jane.smith@example.com",
    orderStatus: "Pending",
    orderDate: "2023-06-21",
    items: {
      id: 2,
      title: "Nihari",
      description:
        "Special cut beef with house spices, garlic, ginger. A traditional curry that is Cooked on slow heat.",
      category: "MAIN_COURSE",
      price: "$13.99",
      image: "/ChickenKorma.png",
    },
  },
];
