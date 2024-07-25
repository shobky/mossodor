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
  stock?: number;
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
  product_id: string | IProduct;
  product?: IProduct;
  quantity: number;
}

export type TOrderStatus =
  | "pending"
  | "awaiting fulfillment"
  | "awaiting shipment"
  | "awaiting pickup"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded"
  | "refunded with return";

export interface IOrder {
  _id: any;
  orderNumber: number;
  subtotal: number;
  total: number;
  shipping?: number;
  items: IOrderItem[];
  status: TOrderStatus;
  paymentStatus: string | null;
  trackingNumber?: string;
  carrierName?: string;
  buyerName: string | undefined;
  buyerEmail: string | undefined;
  buyerPhone: string | undefined;
  shippingRate?: string;
  shippingMethod?: string;
  purchaseDate: number;
  currencyCode: string;
  address: IAddress;
  user_id: string | IUser;
  discount: number;
  warranty_id: string | null;
}

export interface IVariationGroup {
  _id: string;
  selectors: any;
  product_id: string;
  variations: {
    stock: number;
    type: string;
    value: string;
    sku: string;
    ean: string;
    price: number;
    discount: number;
    weight: string;
    height: string;
    width: string;
    length: string;
    images: string[];
    thumpnail: string;
    otherSpecifications: any[];
  }[];
}
