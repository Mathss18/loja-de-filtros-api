export type OrderModel = {
  id: string;
  parent_id: number;
  status: OrderStatus;
  currency: string;
  version: string;
  prices_include_tax: boolean;
  created_at: string;
  updated_at: string;
  discount_total: string;
  discount_tax: string;
  shipping_total: string;
  shipping_tax: string;
  cart_tax: string;
  total: string;
  total_tax: string;
  wc_customer_id: number;
  order_key: string;
  billing: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    email: string;
    phone: string;
  };
  shipping: {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    phone: string;
  };
  payment_method: string;
  payment_method_title: string;
  transaction_id: string;
  customer_ip_address: string;
  customer_user_agent: string;
  created_via: string;
  customer_note: string;
  date_completed: string;
  date_paid: string;
  cart_hash: string;
  number: string;
  meta_data: Array<{
    id: number;
    key: string;
    value: string;
  }>;
  line_items: Array<{
    id: number;
    name: string;
    product_id: number;
    variation_id: number;
    quantity: number;
    tax_class: string;
    subtotal: string;
    subtotal_tax: string;
    total: string;
    total_tax: string;
    taxes: [];
    meta_data: [];
    sku: string;
    price: number;
    image: {
      id: string;
      src: string;
    };
    parent_name: null | string;
  }>;
  tax_lines: [];
  shipping_lines: [];
  fee_lines: [];
  coupon_lines: [];
  refunds: [];
  payment_url: string;
  is_editable: boolean;
  needs_payment: boolean;
  needs_processing: boolean;
  date_created_gmt: string;
  date_modified_gmt: string;
  date_completed_gmt: string;
  date_paid_gmt: string;
  currency_symbol: string;
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    customer: [
      {
        href: string;
      }
    ];
  };
};

export type OrderStatus = "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed" | "trash";
