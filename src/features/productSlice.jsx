import { createSlice } from "@reduxjs/toolkit";

// Örnek ürün listesi (her üründe 'category' ekliyoruz)
const initialState = {
  products: [
    {
      id: 1,
      name: "SamSung",
      category: "Phones",
      price: 21.95,
      rating: 5,
      images: [
        "https://online-samsung.ru/sites/default/files/2025-01/SM-F956BZSCCAU_2_1.png",
        "https://alta.ge/images/thumbnails/900/650/detailed/314/148692_10_vdpr-ea.png.jpg",
        "https://images.samsung.com/is/image/samsung/p6pim/ae/2401/gallery/ae-galaxy-s24-s928-sm-s928bztqmea-539263992?$624_624_PNG$",
      ],
    },
    {
      id: 2,
      name: "Camera Sony",
      category: "Cameras",
      price: 29.95,
      rating: 4.6,
      images: [
        "https://plusxaward.de/wp-content/uploads/2018/06/sony_alpha_7s.png",
      ],
    },
    {
      id: 3,
      name: "Iphone",
      category: "Phones",
      price: 32.95,
      rating: 5,
      images: [
        "https://i.pinimg.com/originals/6e/24/e5/6e24e5936618f7269573714f0f09408e.png",
      ],
    },
    {
      id: 4,
      name: "Cannon Camera",
      category: "Cameras",
      price: 15.99,
      rating: 4.2,
      images: [
        "https://pngimg.com/uploads/photo_camera/photo_camera_PNG101600.png",
      ],
    },
    {
      id: 5,
      name: "Tv ",
      category: "TV & Displays",
      price: 18.5,
      rating: 2.3,
      images: [
        "https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-Download-Image.png",
      ],
    },
    {
      id: 6,
      name: "Monitor",
      category: "Monitor",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://microless.com/cdn/product_description/5467112_1679322126.png",
      ],
    },
    {
      id: 7,
      name: "SamSung",
      category: "Phones",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://gadget.jagatreview.com/wp-content/uploads/2023/11/Galaxy-M54-5G-2048x1340.png",
      ],
    },
    {
      id: 8,
      name: "Iphone",
      category: "Phones",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://www.forza-refurbished.nl/media/wysiwyg/blog-nl-2022/refurbished-iphone-12-paars.png",
      ],
    },
    {
      id: 9,
      name: "SamSung",
      category: "Phones",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://gadget.jagatreview.com/wp-content/uploads/2023/11/Galaxy-M54-5G-2048x1340.png",
      ],
    },
    {
      id: 10,
      name: "SamSung",
      category: "Phones",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://gadget.jagatreview.com/wp-content/uploads/2023/11/Galaxy-M54-5G-2048x1340.png",
      ],
    },
    {
      id: 11,
      name: "SamSung",
      category: "Phones",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://static-01.daraz.com.np/p/4a0f7c4e4d44a1ebca69d870126dbe6a.png",
      ],
    },
    {
      id: 12,
      name: "Redmi 12pro",
      category: "Phones",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://static-01.daraz.com.np/p/4a0f7c4e4d44a1ebca69d870126dbe6a.png",
      ],
    },
    {
      id: 13,
      name: "Monitor",
      category: "Monitor",
      price: 12.0,
      rating: 4.7,
      images: [
        "https://icl-techno.ru/upload/resize_cache/iblock/8f9/1293_778_2/W2713S2.png",
      ],
    },

    {
      id: 14,
      name: "Laptop",
      category: "Laptops",
      price: 21.95,
      rating: 5,
      images: [
        "https://pngfile.net/download/Sbgyr26jKzMoVNTkuuJnOqsS82kMsGjbfVGmAkbONp8QJU94gdrbQd0eGOVD8iBb90ibLKhzfq8ZfsKNxJtzhLwIKVT3MOtkv1uRLySnPVKpl8Dm615bxjPQhp729DTESqkUHjeLGNv08oPXwrFWfgAtcAoYk0EQWUAgvJIwSuhN2qyWHH0hPkPRIFqAogSwCEaAak0q/large",
        "https://royaltyfreefootages.com/upload/video/Apple%20laptop%20PNG%20image,%20transparent%20Apple%20laptop%20png%20image,%20Apple%20laptop%20png%20hd%20images%20download_1658745513.png",
        "https://www.pngarts.com/files/4/Laptop-PNG-Pic.png",
      ],
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductImages: (state, action) => {
      const { id, images } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.images = images;
      }
    },
  },
});

export const { updateProductImages } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productSlice.reducer;
