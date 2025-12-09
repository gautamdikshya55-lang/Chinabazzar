export type Product = {
  id: number;
  title: string;
  oldPrice?: string;
  price: string;
  rating: number;
  image: string;
  badge?: string;
};

export const todayDeals: Product[] = [
  {
    id: 1,
    title: "Classic Wrist Watch",
    oldPrice: "₹5,999",
    price: "₹3,599",
    rating: 4.8,
    image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "HOT",
  },
  {
    id: 2,
    title: "Gentleman Perfume",
    oldPrice: "₹2,499",
    price: "₹1,799",
    rating: 4.5,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "SALE",
  },
  {
    id: 3,
    title: "Luxury Skin Care Set",
    oldPrice: "₹3,999",
    price: "₹2,499",
    rating: 4.6,
    image: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "NEW",
  },
  {
    id: 4,
    title: "Hair Styling Kit",
    oldPrice: "₹1,899",
    price: "₹1,199",
    rating: 4.4,
    image: "https://images.pexels.com/photos/3738342/pexels-photo-3738342.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "BEST",
  },
];

export const flashDeals: Product[] = [
  {
    id: 5,
    title: "Wireless Headphones",
    oldPrice: "₹4,999",
    price: "₹2,999",
    rating: 4.7,
    image: "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "FLASH",
  },
  {
    id: 6,
    title: "Sneakers Limited Edition",
    oldPrice: "₹3,499",
    price: "₹1,749",
    rating: 4.9,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "50% OFF",
  },
  {
    id: 7,
    title: "Minimal Backpack",
    oldPrice: "₹2,899",
    price: "₹1,899",
    rating: 4.5,
    image: "https://images.pexels.com/photos/374574/pexels-photo-374574.jpeg?auto=compress&cs=tinysrgb&w=800",
    badge: "TREND",
  },
 {
  id: 8,
  title: "Smart Phone",
  oldPrice: "₹5,499",
  price: "₹3,499",
  rating: 4.6,
  image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
  badge: "NEW",
},

];

export const specialOffers: Product[] = [
  {
    id: 9,
    title: "Ceramic Coffee Mug",
    price: "₹499",
    rating: 4.2,
    image: "https://images.pexels.com/photos/1410225/pexels-photo-1410225.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    title: "Indoor Plant Pot",
    price: "₹699",
    rating: 4.5,
    image: "https://images.pexels.com/photos/3094208/pexels-photo-3094208.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 11,
    title: "Minimal Table Lamp",
    price: "₹1,099",
    rating: 4.6,
    image: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
{
  id: 12,
  title: "Hair Curler",
  price: "₹1,499",
  rating: 4.3,
  image: "https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=800",
},

];
