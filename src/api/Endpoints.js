/**
 * 	A list of API endpoints
 */

let domain = 'https://api.gloocle.com/api/v1';
let magento = 'http://seller.gloocle.com:8082/rest/V1';
let magentoProxy = 'https://bca89296.ngrok.io/api/v1';

export const token = 'bxo42e1pdihjg3m627wybir5ots9iwfs';

export const SIGN_IN = domain + '/user/token';
export const ENDPOINT_ME = domain + '/user/me'; //returns a user object complete with profile pic , name
export const ENDPOINT_LOGOUT = domain + '/logout'; // invaildates the token
export const EMAIL_CONFIRMATION_URL = domain + '/user/confirmEmail'; // email activation endpont

export const ENDPOINT_REGISTER = domain + '/user'; // registers a new account
export const ENDPOINT_RECOVER_PASSWORD = domain + '/user/password/reset'; // send email to reset password
export const ENDPOINT_CHECK_USERNAME = `${domain}/user/:username/is-exists`; // check username avaliable

export const ENDPOINT_SCRAPE_URL = domain + '/scrape';

//FEED
export const ENDPOINT_POST_LIST = domain + '/feed/timeline'; //main feed
export const ENDPOINT_FEED_MINE = domain + '/feed/my'; //the user's posts
export const ENDPOINT_FEED_POPULAR = domain + '/feed/popular'; //the user's posts
export const ENDPOINT_FEED_NOTIFICATIONS = domain + '/notification'; //returns notifications for this user

//	POSTS
export const ENDPOINT_POST_ADD = domain + '/posts';
export const ENDPOINT_POST_DELETE = domain + '/posts';
export const ENDPOINT_POST_COMMENTS = domain + '/post/comments';
export const ENDPOINT_POST_EDIT = domain + '/posts';
export const ENDPOINT_POST_DELETE_IMAGE = domain + '/images';
export const ENDPOINT_POST_ADD_IMAGE = domain + '/posts'; // /30/images
export const ENDPOINT_POST_ADD_IMG = domain + '/post/add-img';

// VIDEO
export const ENDPOINT_ADD_VIDEO = `${domain}/video`;

//pages
export const ENDPOINT_STATIC_PAGE = domain + '/page';

// STATIC CONTENT  Lists and stuff
export const ENDPOINT_COUNTRIES = domain + '/countries';
export const ENDPOINT_COUNTRIES_LIST = domain + '/countries/list';
export const ENDPOINT_GET_LOCAL_COUNTRY = 'http://ip-api.com/json';
export const ENDPOINT_CITIES_LIST = domain + '/cities/list';

// Followers / following
export const ENDPOINT_FOLLOWERS_LIST = domain + '/followers';
export const ENDPOINT_FOLLOWING_LIST = domain + '/followings';
export const ENDPOINT_UNFOLLOW = domain + '/unfollow';
export const ENDPOINT_FOLLOW = domain + '/follow'; // post /follow/{id}

// Newsfeed
export const ENDPOINT_MY_POSTS = domain + '/feed/my';
export const ENDPOINT_USER_POSTS_BY_ID = domain + '/feed/user/';

// Comments
export const ENDPOINT_COMMENTS_TO_POST =
  domain + '/posts/:postId/comments?page=:page';
export const ENDPOINT_COMMENT_TO_POST = domain + '/posts/:postId/comments';
export const ENDPOINT_SUB_COMMENT = domain + '/comments/:commentId/comments';
export const ENDPOINT_COMMENTS = domain + '/comments/:commentId';
export const ENDPOINT_GET_PRODUCT_COMMENTS =
  domain + '/product/:productId/comment';

//---							MARKETPLACE

//users
export const ENDPOINT_USER_GET_INFO = domain + '/user/me';
export const ENDPOINT_USER_SET_INFO = domain + '/user/profile';
export const ENDPOINT_USER_CHANGE_PASSWORD = domain + '/user/password';
export const ENDPOINT_USER_UPDATE_AVATAR = domain + '/user/profile/avatar';
export const ENDPOINT_USER_ADDRESS = domain + '/user/address';
export const ENDPOINT_USER_CREATE_ADDRESS = domain + '/user/address';
export const ENDPOINT_USER_EDIT_ADDRESS = domain + '/user/address';
export const ENDPOINT_USER_DELETE_ADDRESS =
  domain + '/user/:userId/address/:addressId';
export const ENDPOINT_USER_GET_PUBLIC_PROFILE = domain + '/user';
export const ENDPOINT_USER_GET_POSTS = domain + '/posts';
export const ENDPOINT_USER_GET_INTERESTS = domain + '/interest';
export const ENDPOINT_USER_GET_INTERESTS_SHOPS = domain + '/interest/shops';

// Seller
export const ENDPOINT_SELLER_GET_DATA = domain + '/seller/:sellerUrl';
export const ENDPOINT_SELLER_GET_REVIEWS =
  domain + '/seller/:sellerUrl/reviews';
export const ENDPOINT_SELLER_GET_PRODUCTS =
  domain + '/seller/:sellerId/products';

// stores
export const ENDPOINT_GET_STORES = domain + '/seller';

// Popular stores
export const ENDPOINT_GET_POPULAR_STORES = domain + '/seller/popular';

//Follow
export const ENDPOINT_USER_CREATE_FOLLOW = domain + '/follow';
export const ENDPOINT_USER_UNFOLLOW = domain + '/unfollow';
export const ENDPOINT_USER_GET_FOLLOWINGS = domain + '/followings';
export const ENDPOINT_USER_GET_FOLLOWERS = domain + '/followers';

//---							MARKETPLACE

//	Category
export const ENDPOINT_CATEGORIES = domain + '/category'; //returns a list of categories and their children
export const ENDPOINT_USER_CATEGORIES = domain + '/user/profile/category'; //returns a list of categories and their children

// Global Search
export const ENDPOINT_SEARCH_QUERY = domain + '/search';

//---                           PRODUCT
export const ENDPOINT_PRODUCT_GET = domain + '/product';
export const ENDPOINT_PRODUCT_GET_BY_CATEGORY =
  domain + '/product/global/search?category_id=';
export const ENDPOINT_PRODUCT_GET_BY_PAGE =
  domain + '/product/global/search?page_id=';
export const ENDPOINT_SEARCH = domain + '/product/global/search';
export const ENDPOINT_PRODUCT_ATTRIBUTES = domain + '/attributes';

export const ENDPOINT_PRODUCT_GET_PRODUCT_LIST = domain + '/product-list';
export const ENDPOINT_PRODUCT_CREATE_LIST = domain + '/product-list';
export const ENDPOINT_PRODUCT_ADD_PRODUCT_TO_PRODUCT_LIST =
  domain + '/product-list';
export const ENDPOINT_PRODUCT_DELETE_PRODUCT_LIST = domain + '/product-list';
export const ENDPOINT_PRODUCT_EDIT_PRODUCT_LIST = domain + '/product-list';
export const ENDPOINT_PRODUCT_GET_PRODUCT_LIST_CONTAINS =
  domain + '/product-list/contains';
export const ENDPOINT_PRODUCT_GET_RELATED_LIST =
  domain + '/product/:productId/recommendation/related';
export const ENDPOINT_PRODUCT_GET_YMAL_LIST =
  domain + '/product/:productId/recommendation/ymal';
export const ENDPOINT_PRODUCT_GET_PRODUCT_LIST_COLLECTION =
  domain + '/product-list/?user_id=';

//like
export const ENDPOINT_LIKE_POST = `${domain}/posts/:post_id/like`;
export const ENDPOINT_LIKE_COMMENT = `${domain}/like/comment/:comment_id`;
export const ENDPOINT_LIKE_PRODUCT = `${domain}/like/product/:product_id`;

// checkout

export const ENDPOINT_GET_CART_LIST = `${domain}/cart`;
export const ENDPOINT_CREATE_CART = `${domain}/cart/create`;
export const ENDPOINT_ADD_TO_CART = `${domain}/cart/add-products`;
export const ENDPOINT_UPDATE_CART = `${domain}/cart/update-cart`;
export const ENDPOINT_REMOVE_CART = `${domain}/cart/remove-product`;
export const ENDPOINT_GET_SHIPPING_COST = `${domain}/cart/calculate-shipping-cost`;
export const ENDPOINT_SAVE_SHIPPING_INFO = `${domain}/cart/shipping-information`;
export const ENDPOINT_CREATE_ORDER = `${domain}/cart/place-order`;
