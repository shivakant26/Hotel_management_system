import { AiFillLinkedin } from "react-icons/ai";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { MdOutlineFax, MdStreetview } from "react-icons/md";
import { RiPhoneFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { TfiGoogle, TfiYoutube } from "react-icons/tfi";

export const RoomOverviewListData = [
    {
      image: require("../assets/images/room1.jpg"),
      magicText: "Discover our",
      title:"large airy studio",
      url:"/room/large-airy-studio",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare, eros dolor interdum nulla, utcommodo diam libero vitae erat. Aenean faucibus nibh et justocursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      price: "416",
    },
    {
      image: require("../assets/images/room2.jpg"),
      magicText: "Discover our",
      title:"luxury bridal suite",
      url:"/room/luxury-bridal-suite",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare, eros dolor interdum nulla, utcommodo diam libero vitae erat. Aenean faucibus nibh et justocursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      price: "425",
    },
    {
      image: require("../assets/images/room3.jpg"),
      magicText: "Discover our",
      title:"standard big family apartment",
      url:"/room/standard-big-family-apartment",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare, eros dolor interdum nulla, utcommodo diam libero vitae erat. Aenean faucibus nibh et justocursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      price: "440",
    },
    {
      image: require("../assets/images/room4.jpg"),
      magicText: "Discover our",
      title:"standard 2 persons suite",
      url:"/room/standard-2-persons-suite",
      aboutText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique. Duiscursus, mi quis viverra ornare, eros dolor interdum nulla, utcommodo diam libero vitae erat. Aenean faucibus nibh et justocursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      price: "500",
    }
  ];
//   Footer related constant
export const contactMenuItem = [
    {
        icon:<RiPhoneFill />,
        linkName:"(+31) 6 40 330 222",
        linkUrl:""
    },
    {
        icon:<IoIosMail />,
        linkName:"info@seasidehotel.com",
        linkUrl:""
    },
    {
        icon:<MdOutlineFax />,
        linkName:"(+31) 6 40 330 223",
        linkUrl:""
    },
    {
        icon:<MdStreetview />,
        linkName:"Downside street 43",
        linkUrl:""
    },
    {
        icon:<TbWorld />,
        linkName:"Peru",
        linkUrl:""
    },
    
] 
export const followUsArray = [
    {
        icon:<GrFacebookOption/>,
        linkName:"Facebook",
        linkUrl:""
    },
    {
        icon:<GrTwitter />,
        linkName:"Twitter",
        linkUrl:""
    },
    {
        icon:<TfiYoutube />,
        linkName:"Youtube",
        linkUrl:""
    },
    {
        icon:<TfiGoogle />,
        linkName:"Google",
        linkUrl:""
    },
    {
        icon:<AiFillLinkedin />,
        linkName:"Linkedin",
        linkUrl:""
    },
    
] 
export const popularMenuItem = [
    {
        linkName:"Belgium",
        linkUrl:""
    },
    {
        linkName:"Amsterdam",
        linkUrl:""
    },
    {
        linkName:"Munich",
        linkUrl:""
    },
    {
        linkName:"East-Asia",
        linkUrl:""
    },
    {
        linkName:"Ulaanbaatar",
        linkUrl:""
    },
    {
        linkName:"North America",
        linkUrl:""
    }
]

export const informationMenuItem = [
    {
        linkName:"Frequently Asked Questions",
        linkUrl:""
    },
    {
        linkName:"Information about us",
        linkUrl:""
    },
    {
        linkName:"Information about us",
        linkUrl:""
    },
    {
        linkName:"Seaside Hotel",
        linkUrl:""
    },
    {
        linkName:"Contact us",
        linkUrl:"/contact"
    },
    {
        linkName:"Sitemap",
        linkUrl:""
    },
    {
        linkName:"Last minutes",
        linkUrl:""
    },
]