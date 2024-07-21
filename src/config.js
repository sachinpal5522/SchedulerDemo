import { FaTooth, FaCalendarAlt, FaList, FaHome } from "react-icons/fa";

export const companyInfo = {
  name: "Zendenta",
  slogan: "Cabuit gigi tanpa sakit",
  icon: FaTooth,
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    name: "Calender",
    path: "/calender",
    icon: FaCalendarAlt,
  },
  {
    id: 3,
    name: "Summery",
    path: "/summery",
    icon: FaList,
  },
];
