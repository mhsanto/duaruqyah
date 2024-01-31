type SidebarLink = {
  id: number;
  name: string;
  path: string;
  icon: string;
};
export const sidebarLinks:SidebarLink[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: "/home.svg",
  },
  {
    id: 2,
    name: "All Duas",
    path: "/all-duas",
    icon: "/all-duas.svg",
  },
  {
    id: 3,
    name: "Memorize",
    path: "/memorize",
    icon: "/memorize.svg",
  },
  {
    id: 4,
    name: "Bookmark",
    path: "/bookmark",
    icon: "/bookmark.svg",
  },
  {
    id: 5,
    name: "Ruqyah",
    path: "/ruqyah",
    icon: "/ruqyah.svg",
  },
  {
    id: 6,
    name: "Dua Q&A",
    path: "/qna",
    icon: "/qna.svg",
  },
  {
    id: 7,
    name: "Book",
    path: "/book",
    icon: "/book.svg",
  },
];
