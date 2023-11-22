interface Urls {
  path: string;
  queryParam?: string[];
  authority: number;
}

// authority 0 = 비로그인/로그인 유저 진입 가능
// authority 1 = 로그인 유저 진입 가능

export const URL_HOME: Urls = { path: `/`, authority: 0 };

// 마이
export const URL_MY: Urls = { path: `/my`, authority: 0 };
export const URL_LOGIN: Urls = { path: `/login`, authority: 0 };
export const URL_SUCCESS: Urls = { path: "/login/success", authority: 0 };
export const URL_INFO: Urls = { path: `/my/info`, authority: 1 };
export const URL_CART: Urls = { path: `/my/cart`, authority: 1 };
export const URL_WISH: Urls = { path: `/my/wish`, authority: 1 };

// 주문
export const URL_ORDER: Urls = { path: `/order`, authority: 1 };
export const URL_ORDER_LIST: Urls = { path: `/order/list`, authority: 1 };
export const URL_ORDER_DETAIL = (query?: string): Urls => {
  return { path: `/order/detail/${query}`, authority: 1 };
};
export const URL_ORDER_SUCCESS: Urls = { path: `/order/success`, authority: 1 };
export const URL_ORDER_SUCCESS_VIRTUALBANK: Urls = {
  path: `/order/success/virtual`,
  authority: 1,
};

// 상품
export const URL_PRODUCT = (query?: string): Urls => {
  return { path: `/product/${query}`, authority: 0 };
};

export const URL_CATEGORY: Urls = { path: `/category`, authority: 0 };
export const URL_CATEGORY_DETAIL = (query?: string | number): Urls => {
  return { path: `/category/${query}`, authority: 0 };
};
export const URL_BRAND: Urls = { path: `/brand`, authority: 0 };
export const URL_BRAND_DETAIL = (brandId: string | number): Urls => {
  return { path: `/brand/${brandId}`, authority: 0 };
};
export const URL_COLLECTION_MY: Urls = { path: `/collection/my`, authority: 1 };
export const URL_COLLECTION_NEW: Urls = {
  path: `/collection/new`,
  authority: 0,
};

// 리뷰 컨텐츠
export const URL_REVIEWS: Urls = { path: `/review`, authority: 0 };
export const URL_REVIEWS_DETAIL = (query?: string | number): Urls => {
  return { path: `/reviews/${query}`, authority: 1 };
};

export const URL_LIST = (query: string): Urls[] => [
  URL_HOME,
  URL_MY,
  URL_LOGIN,
  URL_SUCCESS,
  URL_INFO,
  URL_CART,
  URL_WISH,
  URL_ORDER,
  URL_ORDER_LIST,
  URL_ORDER_DETAIL(query),
  URL_PRODUCT(query),
  URL_CATEGORY,
  URL_CATEGORY_DETAIL(query),
  URL_BRAND,
  URL_COLLECTION_MY,
  URL_COLLECTION_NEW,
  URL_REVIEWS,
  URL_REVIEWS_DETAIL(query),
];
