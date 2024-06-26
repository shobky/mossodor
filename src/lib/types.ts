export interface IUser {
  _id?: string;
  displayName: string;
  username?: string;
  email: string;
  image?: string;
  salt: String; // Changed from BinaryLike for consistency with schema
  hash: String;
  status?: "active" | "suspended" | "deleted";
  role: "user" | "super" | "manager" | "admin";
  tenant_ids?: string[];
  tenant_names?: string[];
}
export interface ICategory {
  _id: string;
  childrenIds: string[];
  name: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  description: string;
  thumpnail: string;
  productsCount: number;
  status: "active" | "deleted" | "draft" | "disabled";
  children?: ICategory[];
}

export interface IProduct {
  _id?: string;
  categoryIds: string[];
  variationGroupId: string | null;
  name: string;
  shortDescription: string;
  description: string;
  sku: string;
  ean: string;
  thumpnail: string;
  images: string[];
  altText: string;
  metaTitle: string;
  metaDescription: string;
  weight: string | null;
  width: string | null;
  height: string | null;
  length: string | null;
  colours: string[] | null;
  colourHex: string | null;
  size: string | null;
  price: number;
  discount: number | null;
  applyDiscount: boolean;
  otherSpecifications: any[];
  faqs?: any[];
}

export interface IAddress {
  city: string;
  country: string;
  line1: string | undefined;
  line2: string | undefined;
  postal_code: string | undefined;
  state: string | undefined;
}
export interface IOrderItem {
  product_id: String;
  quantity: number;
}

export interface IOrder {
  _id: any;
  subtotal: number;
  total: number;
  items: IOrderItem[];
  status: string | null;
  paymentStatus: string | null;
  trackingNumber: string | undefined;
  carrierName: string | undefined;
  shippingRate: string | undefined;
  shippingMethod: string | undefined;
  shippingPrice: number | undefined;
  purchaseDate: number;
  currencyCode: string;
  address: IAddress;
  user_id: string;
}
