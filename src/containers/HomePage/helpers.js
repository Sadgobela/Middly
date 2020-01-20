export const formatProducts = (products) =>
  products.map(({name, media: [{media_item: mediaItem}], special_price: specialPrice, price}) => ({
    title: name,
    imgSrc: mediaItem,
    isLiked: false,
    isWished: false,
    newPrice: Number(specialPrice) || Number(price),
    oldPrice: Number(specialPrice) ? Number(price) : 0,
    likesCount: 142
  }));

export const formatDeals = (deals) =>
  deals.map(
    ({
      name,
      media: [{media_item: mediaItem}],
      new_price: newPrice,
      old_price: oldPrice,
      discount_value: discountValue
    }) => ({
      title: name,
      newPrice: Number(newPrice),
      oldPrice: Number(oldPrice),
      countOfViews: 783,
      imgSrc: mediaItem,
      sale: Number(discountValue) * -1,
      likesCount: 142,
      isWished: true
    })
  );

export const formatPopularShops = (shops) =>
  shops.map(({name, rating, banner}) => ({
    title: name,
    imgSrc: banner,
    rating: Number(rating),
    reviews: 25,
    isFollowing: false
  }));

export const formatMobilePopularShops = (shops) =>
  shops.map(({name, rating, banner, media, // eslint-disable-next-line camelcase
    company_locality}) => ({
    title: name,
    avatar: banner,
    rating: Number(rating),
    reviews: 25,
    // eslint-disable-next-line camelcase
    gallery: [...media.map(({media_item}) => media_item)],
    country: company_locality,
    isFollowing: false
  }));

export const formatPopularCategories = (categories) =>
  categories.map(({name, image}) => ({
    title: name,
    imgSrc: image,
    isFollowing: false,
    followers: 129
  }));
