import product1 from 'images/products/product1.jpg';
import product2 from 'images/products/product2.jpg';
import product3 from 'images/products/product3.jpg';
import product4 from 'images/products/product4.jpg';
import product5 from 'images/products/product5.jpg';
import product6 from 'images/products/product6.jpg';
import product7 from 'images/products/product7.jpg';
import product8 from 'images/products/product8.jpg';
import product9 from 'images/products/product9.jpg';
import product10 from 'images/products/product10.jpg';
import product11 from 'images/products/product11.jpg';
import product12 from 'images/products/product12.jpg';
import product13 from 'images/products/product13.jpg';
import product14 from 'images/products/product14.jpg';
import product15 from 'images/products/product15.jpg';
import product16 from 'images/products/product16.jpg';
import product17 from 'images/products/product17.jpg';
import product18 from 'images/products/product18.jpg';
import product19 from 'images/products/product19.jpg';
import product20 from 'images/products/product20.jpg';
import product21 from 'images/products/product21.jpg';
import product22 from 'images/products/product22.jpg';
import shop1 from 'images/shops/shop1.jpg';
import shop2 from 'images/shops/shop2.jpg';
import shop3 from 'images/shops/shop3.jpg';
import shop4 from 'images/shops/shop4.jpg';
import category1 from 'images/categories/category1.jpg';
import category2 from 'images/categories/category2.jpg';
import category3 from 'images/categories/category3.jpg';
import category4 from 'images/categories/category4.jpg';
import category5 from 'images/categories/category5.jpg';
import category6 from 'images/categories/category6.jpg';
import productImage from 'images/productImage.png';
import arrivalImage from 'images/arrivalImage.png';
import shopImage from 'images/shopImage.png';
import gucci from 'images/products/gucci.png';
import gallery1 from 'images/gallery/gallery1.jpg';
import gallery2 from 'images/gallery/gallery2.jpg';
import gallery3 from 'images/gallery/gallery3.jpg';
import shopNow1 from 'images/shopNow1.png';
import shopNow2 from 'images/shopNow2.png';
import snickers from 'images/snickers.png';
import avatar from 'images/avatar.png';

import slide1 from 'images/slides/slide1.jpg';
import slide2 from 'images/slides/slide2.jpg';
import slide3 from 'images/slides/slide3.png';
import sellerThumb from 'images/sellerThumb.png';
import follower1 from 'images/follower1.png';
import follower2 from 'images/follower2.png';

export const defaultCategories = ['Clothing', 'Shoes', 'Bags & Accessories', 'Beauty & Health', 'Electronics', 'Deals'];

export const categoriesCards = [
  {
    title: 'Shoes',
    imgSrc: category1,
    isFollowing: false,
    followers: 129
  },
  {
    title: 'Backpacks',
    imgSrc: category2,
    isFollowing: false,
    followers: 129
  },
  {
    title: 'Jackets',
    imgSrc: category3,
    isFollowing: false,
    followers: 129
  },
  {
    title: 'Shirts',
    imgSrc: category4,
    isFollowing: true,
    followers: 129
  }
];

export const defaultShops = [
  {
    title: 'Simply Cosy',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'Open UP',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: true
  },
  {
    title: 'Hair Business',
    imgSrc: shopImage,
    rating: 3,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'HONEST X RIRI',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'Simply Cosy',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'Simply Cosy',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'Open UP',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: true
  },
  {
    title: 'Hair Business',
    imgSrc: shopImage,
    rating: 3,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'HONEST X RIRI',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'Simply Cosy',
    imgSrc: shopImage,
    rating: 4,
    reviews: 821,
    isFollowing: false
  }
];

export const defaultArrivals = [
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isLiked: false,
    isWished: false,
    newPrice: 132,
    oldPrice: null,
    likesCount: 1232
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isLiked: true,
    isWished: false,
    newPrice: 120,
    oldPrice: 243,
    likesCount: 142
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isWished: true,
    isLiked: false,
    stock: 21,
    newPrice: 120,
    oldPrice: 243,
    likesCount: 142
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isWished: true,
    isLiked: false,
    stock: 21,
    newPrice: 120,
    oldPrice: 243,
    likesCount: 142
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isLiked: true,
    isWished: false,
    newPrice: 120,
    oldPrice: 243,
    likesCount: 142
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isLiked: false,
    isWished: false,
    newPrice: 132,
    oldPrice: null,
    likesCount: 1232
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isLiked: true,
    isWished: false,
    newPrice: 120,
    oldPrice: 243,
    likesCount: 142
  },
  {
    title: 'Autumn winter fashion',
    imgSrc: arrivalImage,
    isLiked: true,
    isWished: false,
    newPrice: 120,
    oldPrice: 243,
    likesCount: 142
  }
];

export const defaultProductCards = [
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: productImage,
    sale: -40
  }
];

export const deals = [
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product1,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product2,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product3,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product4,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product1,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product2,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product3,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product4,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  }
];

export const featuredProducts = [
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product5,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product6,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: 243,
    countOfViews: 783,
    imgSrc: product7,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  }
];

export const newArrivals = [
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product7,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: 243,
    countOfViews: 783,
    imgSrc: product8,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product9,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product10,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    newPrice: 132,
    oldPrice: 243,
    countOfViews: 783,
    imgSrc: product7,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product8,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product9,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    price: 132,
    countOfViews: 783,
    imgSrc: product10,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  }
];

export const fashion = [
  {
    title: 'Leather Jacket',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product11,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'YSL Bag Real Leather',
    oldPrice: 132,
    countOfViews: 783,
    imgSrc: product12,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Western Hat Brown',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product13,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Grey T-Shirt Oversize',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product14,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Leather Jacket',
    price: 132,
    countOfViews: 783,
    imgSrc: product11,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'YSL Bag Real Leather',
    price: 132,
    countOfViews: 783,
    imgSrc: product12,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Western Hat Brown',
    price: 132,
    countOfViews: 783,
    imgSrc: product13,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Grey T-Shirt Oversize',
    price: 132,
    countOfViews: 783,
    imgSrc: product14,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  }
];

export const electronics = [
  {
    title: 'Apple Airpods Pro',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product15,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple iPad Pro',
    oldPrice: 132,
    countOfViews: 783,
    imgSrc: product16,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple iPhone 11',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product17,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple iPhone 11 Pro',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product18,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple Airpods Pro',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product15,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple iPad Pro',
    oldPrice: 132,
    countOfViews: 783,
    imgSrc: product16,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple iPhone 11',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product17,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Apple iPhone 11 Pro',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product18,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  }
];

export const recentlyViewed = [
  {
    title: 'Cropped Mom Jeans',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product19,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    oldPrice: 132,
    countOfViews: 783,
    imgSrc: product20,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'KENZO fall collection',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product21,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Gucci Red Bag',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product22,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Cropped Mom Jeans',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product19,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Autumn winter fashion',
    oldPrice: 132,
    countOfViews: 783,
    imgSrc: product20,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'KENZO fall collection',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product21,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  },
  {
    title: 'Gucci Red Bag',
    newPrice: 132,
    oldPrice: null,
    countOfViews: 783,
    imgSrc: product22,
    sale: -40,
    likesCount: 142,
    isWished: true,
    isLiked: false,
    stock: 21
  }
];

export const shops = [
  {
    title: 'Simply Cosy',
    imgSrc: shop1,
    rating: 4,
    reviews: 25,
    isFollowing: false
  },
  {
    title: 'Open UP',
    imgSrc: shop2,
    rating: 1,
    reviews: 24,
    isFollowing: true
  },
  {
    title: 'Hair Business',
    imgSrc: shop3,
    rating: 3,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'HONEST X RIRI',
    imgSrc: shop4,
    rating: 4,
    reviews: 14,
    isFollowing: false
  },
  {
    title: 'Simply Cosy',
    imgSrc: shop1,
    rating: 4,
    reviews: 4,
    isFollowing: false
  },
  {
    title: 'Open UP',
    imgSrc: shop2,
    rating: 4,
    reviews: 821,
    isFollowing: true
  },
  {
    title: 'Hair Business',
    imgSrc: shop3,
    rating: 3,
    reviews: 821,
    isFollowing: false
  },
  {
    title: 'HONEST X RIRI',
    imgSrc: shop4,
    rating: 4,
    reviews: 821,
    isFollowing: false
  }
];

export const mainSlides = [
  {
    id: 1,
    image: slide1,
    title: 'Shop <br>Directly',
    description: 'Discover new <br>collection with friends',
    url: '/'
  },
  {
    id: 1,
    image: slide1,
    title: 'Shop <br>Directly',
    description: 'Discover new <br>collection with friends',
    url: '/'
  }
];

export const categoriesMobile = [
  {
    title: 'Fashion',
    url: '/',
    imgSrc: category5
  },
  {
    title: 'Man’s Clothes',
    url: '/',
    imgSrc: category6
  },
  {
    title: 'Shoes',
    url: '/',
    imgSrc: category1
  },
  {
    title: 'Backpacks',
    url: '/',
    imgSrc: category2
  },
  {
    title: 'Jackets',
    url: '/',
    imgSrc: category3
  },
  {
    title: 'Shirts',
    url: '/',
    imgSrc: category4
  }
];

export const popularStores = [
  {
    avatar: gucci,
    title: 'GUCCI Official',
    country: 'Atlanta, US',
    gallery: [gallery1, gallery2, gallery3]
  },
  {
    avatar: gucci,
    title: 'GUCCI Official',
    country: 'Atlanta, US',
    gallery: [gallery1, gallery2, gallery3]
  },
  {
    avatar: gucci,
    title: 'GUCCI Official',
    country: 'Atlanta, US',
    gallery: [gallery1, gallery2, gallery3]
  },
  {
    avatar: gucci,
    title: 'GUCCI Official',
    country: 'Atlanta, US',
    gallery: [gallery1, gallery2, gallery3]
  },
  {
    avatar: gucci,
    title: 'GUCCI Official',
    country: 'Atlanta, US',
    gallery: [gallery1, gallery2, gallery3]
  }
];

export const shopNow = [
  {
    image: shopNow1,
    title: 'Apple Watch Series 4',
    price: '999',
    newPrice: '499',
    url: '/'
  },
  {
    image: shopNow2,
    title: 'Fenty Beauty Kiss Lipsticks',
    price: '44',
    newPrice: '15',
    url: '/'
  }
];

export const categories = [
  {
    name: 'Clothing',
    subCategories: [
      {
        name: 'Clothing 1',
        url: '/'
      },
      {
        name: 'Clothing 2',
        url: '/'
      },
      {
        name: 'Clothing 3',
        url: '/'
      },
      {
        name: 'Clothing 4',
        url: '/'
      },
      {
        name: 'Clothing 1',
        url: '/'
      },
      {
        name: 'Clothing 2',
        url: '/'
      },
      {
        name: 'Clothing 3',
        url: '/'
      },
      {
        name: 'Clothing 4',
        url: '/'
      },
      {
        name: 'Clothing 1',
        url: '/'
      },
      {
        name: 'Clothing 2',
        url: '/'
      },
      {
        name: 'Clothing 3',
        url: '/'
      },
      {
        name: 'Clothing 4',
        url: '/'
      },
      {
        name: 'Clothing 1',
        url: '/'
      },
      {
        name: 'Clothing 2',
        url: '/'
      },
      {
        name: 'Clothing 3',
        url: '/'
      },
      {
        name: 'Clothing 4',
        url: '/'
      }
    ],
    url: '/'
  },
  {
    name: 'Bag & Accessories ',
    subCategories: [
      {
        name: 'Bag & Accessories  1',
        url: '/'
      },
      {
        name: 'Bag & Accessories  2',
        url: '/'
      },
      {
        name: 'Bag & Accessories  3',
        url: '/'
      },
      {
        name: 'Bag & Accessories  4',
        url: '/'
      }
    ],
    url: '/'
  },
  {
    name: 'Shoes',
    subCategories: [
      {
        name: 'Shoes 1',
        url: '/'
      },
      {
        name: 'Shoes 2',
        url: '/'
      },
      {
        name: 'Shoes 3',
        url: '/'
      },
      {
        name: 'Shoes 4',
        url: '/'
      }
    ],
    url: '/'
  },
  {
    name: 'Beauty & Health',
    subCategories: [
      {
        name: 'Beauty & Health 1',
        url: '/'
      },
      {
        name: 'Beauty & Health 2',
        url: '/'
      },
      {
        name: 'Beauty & Health 3',
        url: '/'
      },
      {
        name: 'Beauty & Health 4',
        url: '/'
      }
    ],
    url: '/'
  },
  {
    name: 'Electronics',
    subCategories: [
      {
        name: 'Electronics 1',
        url: '/'
      },
      {
        name: 'Electronics 2',
        url: '/'
      },
      {
        name: 'Electronics 3',
        url: '/'
      },
      {
        name: 'Electronics 4',
        url: '/'
      }
    ],
    url: '/'
  }
];

export const user = {
  id: 1,
  avatar: avatar,
  firstName: 'Maria',
  lastName: 'Podrezova',
  messages: 1,
  notifications: 11,
  rewards: 10000
};

export const messages = [
  {
    avatar: avatar,
    name: 'Jorge Webb',
    text: 'I would like to return the dress lorem ipsum is',
    date: 'Today, 10:30 pm',
    count: 1,
    online: true
  },
  {
    avatar: avatar,
    name: 'Pit Weny',
    text: 'I would like to return the dress lorem ipsum is',
    date: 'Today, 10:30 pm',
    count: 3,
    online: true
  },
  {
    avatar: avatar,
    name: 'Deny Smitt',
    text: 'Hello, this dress is 100% silk. ',
    date: 'Wed',
    count: 0,
    online: false
  },
  {
    avatar: avatar,
    name: 'Maria Podrezova',
    text: 'Me too))))',
    date: 'Wed',
    count: 0,
    online: false
  },
  {
    avatar: avatar,
    name: 'Anna Tvildy',
    text: 'So cute. I agree with you. If you wan',
    date: 'Sun',
    count: 0,
    online: false
  },
  {
    avatar: avatar,
    name: 'Olga Milkey',
    text: 'So cute. I agree with you. If you wan',
    date: 'Sun',
    count: 0,
    online: false
  },
  {
    avatar: avatar,
    name: 'Olga Milkey',
    text: 'So cute. I agree with you. If you wan',
    date: 'Sun',
    count: 0,
    online: false
  },
  {
    avatar: avatar,
    name: 'Olga Milkey',
    text: 'So cute. I agree with you. If you wan',
    date: 'Sun',
    count: 0,
    online: false
  }
];

export const notifications = [
  {
    avatar: avatar,
    name: 'Jorge Webb',
    text: 'It’s nice)))',
    date: '4h replited to your post:',
    follow: null,
    thumb: product15
  },
  {
    avatar: avatar,
    name: 'Oleg Welton',
    text: 'Wow! So good suit and tie, I like it very much',
    date: '1d replited to your post',
    follow: null,
    thumb: product13
  },
  {
    avatar: avatar,
    name: 'Jorge Webb',
    text: 'Could you give me one?',
    date: '2d mentioned you',
    follow: null,
    thumb: product10
  },
  {
    avatar: avatar,
    name: 'Nika Pink',
    text: null,
    date: '1w liked your photo.',
    follow: false,
    thumb: null
  },
  {
    avatar: avatar,
    name: 'Nika Pink',
    text: null,
    date: '2w started following you.',
    follow: true,
    thumb: null
  },
  {
    avatar: avatar,
    name: 'Jorge Webb',
    text: 'It’s nice)))',
    date: '4h replited to your post:',
    follow: null,
    thumb: product15
  },
  {
    avatar: avatar,
    name: 'Oleg Welton',
    text: 'Wow! So good suit and tie, I like it very much',
    date: '1d replited to your post',
    follow: null,
    thumb: product13
  },
  {
    avatar: avatar,
    name: 'Jorge Webb',
    text: 'Could you give me one?',
    date: '2d mentioned you',
    follow: null,
    thumb: product10
  },
  {
    avatar: avatar,
    name: 'Nika Pink',
    text: null,
    date: '1w liked your photo.',
    follow: false,
    thumb: null
  },
  {
    avatar: avatar,
    name: 'Nika Pink',
    text: null,
    date: '2w started following you.',
    follow: true,
    thumb: null
  }
];

export const cart = [
  {
    thumb: product2,
    title: 'Winter coat',
    price: '132',
    quantity: 1
  },
  {
    thumb: product7,
    title: 'Sneakers MIU MIU',
    price: '262',
    quantity: 1
  }
];

export const posts = [
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product11,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product12,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product13,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product14,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product15,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product16,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product17,
    likes: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product18,
    likes: 961
  }
];

export const lists = [
  {
    title: 'Beautiful',
    username: 'username',
    imgSrc: product11,
    followers: 961
  },
  {
    title: 'Beautiful',
    username: 'username',
    imgSrc: product12,
    followers: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product13,
    followers: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product14,
    followers: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product15,
    followers: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product16,
    followers: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product17,
    followers: 961
  },
  {
    title: 'Post Title',
    username: 'username',
    imgSrc: product18,
    followers: 961
  }
];

export const product = {
  id: 1,
  gallery: [slide2, slide3, slide2, slide3],
  name: 'Chanel',
  subName: 'Les Beiges Eau De Teint',
  rating: 5,
  reviews: 602,
  price: 750,
  newPrice: 675,
  coins: 19,
  sizes: ['35 (EU)', '36 (EU)', '37,5 (EU)', '38 (EU)'],
  colors: ['Black', 'Grey', 'Multicolor'],
  likes: 3653,
  comments: 22,
  share: 4,
  bookmark: 435,
  description:
    "Colors will depend heavily on the setting the character who wears the colors is in. The setting could be as colorful as the 70’s it two simple settings. A new brand for the coming-of-age generation that refuses to compromise on principle or style, COLLUSION believes clothes that celebrate self-expression and inclusivity should be the norm. It's no surprise then that it's linked up with six inspirational creatives to shape its first collection, which includes denim, knitwear, dresses and loads more.",
  attributes: [
    {
      name: 'Condition',
      value: 'New'
    },
    {
      name: 'Material',
      value: 'Faux leather'
    },
    {
      name: 'Color',
      value: 'Black'
    },
    {
      name: 'Brand',
      value: 'Burberry'
    }
  ],
  seller: {
    img: sellerThumb,
    name: 'Chanel',
    rating: 4,
    reviews: 335,
    followers: [
      {
        name: 'Robby Robertson',
        avatar: follower1
      },
      {
        name: 'Robby Robertson',
        avatar: follower2
      },
      {
        name: 'Robby Robertson',
        avatar: follower1
      },
      {
        name: 'Robby Robertson',
        avatar: follower2
      },
      {
        name: 'Robby Robertson',
        avatar: follower1
      },
      {
        name: 'Robby Robertson',
        avatar: follower2
      },
      {
        name: 'Robby Robertson',
        avatar: follower1
      },
      {
        name: 'Robby Robertson',
        avatar: follower2
      }
    ]
  }
};
