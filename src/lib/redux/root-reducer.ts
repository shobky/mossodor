import { cartSlice } from "./slices/cart/cart-slice";
import { categoriesSlice } from "./slices/categories/category-slice";
import { productsSlice } from "./slices/products/products-slice";
import { WishlistSlice } from "./slices/wishlist/wishlist-slice";

export const rootReducer = {
  categories: categoriesSlice.reducer,
  products: productsSlice.reducer,
  cart: cartSlice.reducer,
  wishlist: WishlistSlice.reducer,
};
