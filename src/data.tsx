import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdForwardToInbox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDividerHorizontal } from "react-icons/rx";
import { BsPinAngleFill } from "react-icons/bs";
import { SlUserFollowing } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { GrDocument } from "react-icons/gr";
import { MdInsights } from "react-icons/md";
//portfolia
import uiux from "../src/assets/icons/uiux.svg";
import web from "../src/assets/icons/web.svg";
import app from "../src/assets/icons/app.svg";
import graphics from "../src/assets/icons/graphice.svg";
import group1 from "../src/assets/images/group1.svg";
import group2 from "../src/assets/images/group2.png";
import group3 from "../src/assets/images/group3.png";
import riview1 from "../src/assets/images/Ellipse 10.svg";
import riview2 from "../src/assets/images/Ellipse 11.svg";

export const sidemenus = [
  {
    icon: <AiFillHome />,
    link: "/home",
    menu: "Home",
  },
  {
    icon: <RxDashboard />,
    link: "/dashboard",
    menu: "Dashboard",
    iconplus: <AiOutlinePlus />,
    icondivide: <RxDividerHorizontal />,
    subMenu: [
      {
        iconsub: <BsPinAngleFill />,
        menuone: "Pin",
      },
      {
        iconsub: <SlUserFollowing />,
        menuone: "Following",
      },
    ],
  },
  {
    icon: <AiOutlineShoppingCart />,
    link: "/",
    menu: "E-Commerce",
  },
  {
    icon: <MdForwardToInbox />,
    link: "/",
    menu: "Inbox",
  },
  {
    iconplusp: <AiOutlinePlus />,
    icondividep: <RxDividerHorizontal />,
    icon: <CgProfile />,
    link: "/profile",
    menu: "Profile",
    menuProfile: [
      {
        iconp: <BsPinAngleFill />,
        menup: "Pin",
      },
      {
        iconp: <SlUserFollowing />,
        menup: "Following",
      },
    ],
  },
  {
    icon: <AiFillSetting />,
    link: "/",
    menu: "Setting",
  },

  {
    icon: <BsPinAngleFill />,
    link: "/",
    menu: "Pin",
  },
  {
    icon: <SlUserFollowing />,
    link: "/",
    menu: "Following",
  },
  {
    icon: <BsSearch />,
    link: "/search",
    menu: "Search",
  },
  {
    icon: <GrDocument />,
    link: "/",
    menu: "Doc",
  },
  {
    icon: <MdInsights />,
    link: "/",
    menu: "Insights",
  },
  {
    icon: <FiLogIn />,
    link: "/login",
    menu: "Log In",
  },
  {
    icon: <BiLogOut />,
    link: "/sign-up",
    menu: "Sign-Up",
  },
];

//portfolia
export const navData = [
  {
    id: 1,
    name: "Home",
    navigate: "#home",
  },
  {
    id: 2,
    name: "About Me",
    navigate: "#about",
  },
  {
    id: 3,
    name: "Sevice",
    navigate: "#service",
  },
  {
    id: 4,
    name: "Projects",
    navigate: "#project",
  },
  {
    id: 5,
    name: "Tesmonials",
    navigate: "#tesmonials",
  },
  {
    id: 5,
    name: "Contact",
    navigate: "#contact",
  },
];
export const cardData = [
  {
    id: 1,
    img: uiux,
    name: "UI/UX",
    para: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    id: 2,
    img: web,
    name: "Web Design ",
    para: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    id: 3,
    img: app,
    name: "App Design",
    para: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
  {
    id: 4,
    img: graphics,
    name: "Graphic Design ",
    para: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
  },
];

export const template = [
  {
    id: 1,
    category: "wdesign",
    img: group1,
    name: "Web Design ",
    para: "AirCalling Landing Page Design ",
  },
  {
    id: 2,
    category: "wdesign",
    img: group2,
    name: "Web Design ",
    para: "Business Landing Page Design ",
  },
  {
    id: 3,
    category: "app-design",
    img: group3,
    name: "App Design",
    para: "Ecom Web Page Design ",
  },
];
export const review = [
  {
    id: 1,
    img: riview1,
    name: "Ali Banat ",
    para: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
    ceo: "CEO",
  },
  {
    id: 2,
    img: riview2,
    name: "Mohammad Umair ",
    para: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
    ceo: "CEO",
  },
  {
    id: 3,
    img: riview1,
    name: "Alon Mask ",
    para: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
    ceo: "CEO",
  },
  {
    id: 4,
    img: riview2,
    name: "Donald Trump ",
    para: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
    ceo: "CEO",
  },
  {
    id: 5,
    img: riview1,
    name: "John Cena ",
    para: '"Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."',
    ceo: "CEO",
  },
];
