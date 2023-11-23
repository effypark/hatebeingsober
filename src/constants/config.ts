export interface INavItem {
  id: number;
  name: string;
  path: string | null;
  sub?: INavItem[];
}

export const NavConfig: INavItem[] = [
  {
    id: 1,
    name: "NEW ARRIVAL",
    path: "/products/new_arrival",
  },
  {
    id: 2,
    name: "ALL",
    path: "/products",
  },
  {
    id: 3,
    name: "NATURE",
    path: "/products?category=nature",
  },
  {
    id: 4,
    name: "STUFF",
    path: "/products?category=stuff",
  },
  {
    id: 5,
    name: "COMMUNITY",
    path: null,
    sub: [
      {
        id: 6,
        name: "Q&A",
        path: "/community?type=qna",
      },
      {
        id: 7,
        name: "NOTICE",
        path: "/community?type=notice",
      },
    ],
  },
];
