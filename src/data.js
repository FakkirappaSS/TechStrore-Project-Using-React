const products = [
  {
    id: 1,
    name: "Apple iMac 27, 1TB HDD, Retina 5K",
    brand: "Apple",
    price: 169999,
    originalPrice: 199999,
    discount: "35% OFF",
    rating: 5.0,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Desktops/Images/311754_0_p4etiv.png",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max, 1TB",
    brand: "Apple",
    price: 129999,
    originalPrice: 149999,
    discount: "15% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?updatedAt=1757529273198",
    isBestSeller: true,
  },
  {
    id: 3,
    name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
    brand: "Apple",
    price: 89999,
    originalPrice: 119999,
    discount: "30% OFF",
    rating: 4.8,
    image:
      "https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264226_fefcjf.png",
  },
  {
    id: 4,
    name: "MacBook Air M4",
    brand: "Apple",
    price: 114999,
    originalPrice: 129999,
    discount: "12% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/314085_0_f9seci.png?tr=w-400",
  },
  {
    id: 5,
    name: "MacBook Pro M4",
    brand: "Apple",
    price: 189999,
    originalPrice: 209999,
    discount: "10% OFF",
    rating: 5.0,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/318768_0_L0vSEGrzq.png?updatedAt=1760607090837&tr=w-400",
  },
  {
    id: 6,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    price: 124999,
    originalPrice: 139999,
    discount: "11% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/313330_0_ZajaZoEOW.png?updatedAt=1766431297809&tr=w-400"
  },
  {
    id: 7,
    name: "Samsung Galaxy Tab S10 Ultra",
    brand: "Samsung",
    price: 99999,
    originalPrice: 114999,
    discount: "13% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/311495_0_j59u3y.png?tr=w-400"
  },
  {
    id: 8,
    name: "Sony WH-1000XM6",
    brand: "Sony",
    price: 29999,
    originalPrice: 34999,
    discount: "14% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/319024_0_gsCP0dUmT.png?updatedAt=1763650220727&tr=w-400"
  },
  {
    id: 9,
    name: "Apple Watch Ultra 3",
    brand: "Apple",
    price: 79999,
    originalPrice: 89999,
    discount: "11% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317775_0_bW0t9hlT0.png?updatedAt=1757600929912&tr=w-400"
  },
  {
    id: 10,
    name: "AirPods Pro 3",
    brand: "Apple",
    price: 24999,
    originalPrice: 29999,
    discount: "17% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Headphones%20And%20Earphones/Images/317553_0_rluFxUkngM.png?updatedAt=1757512635169&tr=w-400"
  },
  {
    id: 11,
    name: "Dell XPS 15 OLED",
    brand: "Dell",
    price: 159999,
    originalPrice: 179999,
    discount: "11% OFF",
    rating: 4.7,
    image:
      "https://www.croma.com/dell-g15-5530-intel-core-i5-13th-gen-gaming-laptop-with-rgb-keyboard-16gb-512gb-ssd-windows-11-6gb-graphics-15-6-inch-120-hz-fhd-display-ms-office-2021-dark-shadow-gray-2-97-kg-/p/273309"
  },
  {
    id: 12,
    name: "HP Spectre x360",
    brand: "HP",
    price: 129999,
    originalPrice: 144999,
    discount: "10% OFF",
    rating: 4.6,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315208_0_fFbqS9CTa.png?updatedAt=1763015429621&tr=w-400"
  },
  {
    id: 13,
    name: "Lenovo Legion Pro 7",
    brand: "Lenovo",
    price: 179999,
    originalPrice: 199999,
    discount: "10% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/322288_0_BDl7fuU_G.png?updatedAt=1780578417878&tr=w-400"
  },
  {
    id: 14,
    name: "ASUS ROG Strix G18",
    brand: "ASUS",
    price: 169999,
    originalPrice: 189999,
    discount: "11% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/316159_0_QLnUii5Kq.png?updatedAt=1763015465620&tr=w-400"
  },
  {
    id: 15,
    name: "LG OLED C5 65-inch TV",
    brand: "LG",
    price: 149999,
    originalPrice: 179999,
    discount: "17% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Entertainment/Television/Images/322605_0_nV2aVEezW.png?updatedAt=1777381614393&tr=w-400"
  },
  {
    id: 16,
    name: "Samsung Neo QLED 75-inch",
    brand: "Samsung",
    price: 199999,
    originalPrice: 229999,
    discount: "13% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Entertainment/Television/Images/315375_0_du67yt.png?tr=w-400"
  },
  {
    id: 17,
    name: "Google Pixel 10 Pro",
    brand: "Google",
    price: 99999,
    originalPrice: 114999,
    discount: "13% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/318414_0_VrQ_SS9J7N.png?updatedAt=1755700680968&tr=w-400"
  },
  {
    id: 18,
    name: "OnePlus 14 Pro",
    brand: "OnePlus",
    price: 74999,
    originalPrice: 84999,
    discount: "12% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/309621_0_zwbuus.png?tr=w-400"
  },
  {
    id: 19,
    name: "Nothing Phone 4",
    brand: "Nothing",
    price: 49999,
    originalPrice: 59999,
    discount: "17% OFF",
    rating: 4.6,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/322009_0_Y8BU8M3aP.png?updatedAt=1773298647793&tr=w-400"
  },
  {
    id: 20,
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    price: 89999,
    originalPrice: 99999,
    discount: "10% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/321272_0__NebCfwdn.png?updatedAt=1773226073514&tr=w-400"
  },
  {
    id: 21,
    name: "Canon EOS R6 Mark II",
    brand: "Canon",
    price: 189999,
    originalPrice: 209999,
    discount: "10% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/265693_fvwc4w.png?tr=w-400"
  },
  {
    id: 22,
    name: "Sony Alpha A7 IV",
    brand: "Sony",
    price: 199999,
    originalPrice: 224999,
    discount: "11% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/248802_0_perymq.png?tr=w-400"
  },
  {
    id: 23,
    name: "GoPro Hero 14 Black",
    brand: "GoPro",
    price: 44999,
    originalPrice: 54999,
    discount: "18% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Imaging/Camera%20and%20Camcorders/Images/310814_0_1FMkan1Ne1.png?updatedAt=1763389984706&tr=w-400"
  },
  {
    id: 24,
    name: "Nintendo Switch 2",
    brand: "Nintendo",
    price: 44999,
    originalPrice: 49999,
    discount: "10% OFF",
    rating: 4.9,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/305985_0_PrlpyhdYd.png?updatedAt=1762776825006&tr=w-400"
  },
  {
    id: 25,
    name: "PlayStation 5 Pro",
    brand: "Sony",
    price: 69999,
    originalPrice: 79999,
    discount: "13% OFF",
    rating: 5.0,
    image:
      "https://media-ik.croma.com/318700_0_Txhu3IBgp.png?updatedAt=1759152940618&tr=w-400"
  },
  {
    id: 26,
    name: "Xbox Series X",
    brand: "Microsoft",
    price: 59999,
    originalPrice: 69999,
    discount: "14% OFF",
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkR_s9gj9c38VEc05Mx2R3iVafkyZxZ84vr99Hp7HCoQ&s=10"
  },
  {
    id: 27,
    name: "JBL Flip 7 Speaker",
    brand: "JBL",
    price: 9999,
    originalPrice: 12999,
    discount: "23% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/317794_0_Z8SGgxq8Y.png?updatedAt=1767797211622&tr=w-400"
  },
  {
    id: 28,
    name: "Dyson V15 Vacuum",
    brand: "Dyson",
    price: 54999,
    originalPrice: 64999,
    discount: "15% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Small%20Appliances/Vacuum%20Cleaners/Images/320530_0_KYv38ckYi.png?updatedAt=1770032303001&tr=w-400"
  },
  {
    id: 29,
    name: "Kindle Paperwhite",
    brand: "Amazon",
    price: 15999,
    originalPrice: 18999,
    discount: "16% OFF",
    rating: 4.8,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/193936_sexzl9.png?tr=w-400"
  },
  {
    id: 30,
    name: "Meta Quest 4 VR Headset",
    brand: "Meta",
    price: 59999,
    originalPrice: 69999,
    discount: "14% OFF",
    rating: 4.7,
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/247112_0_c8lp7o.png?tr=w-400",
    isBestSeller: true,
  },
];

export default products;
