import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    //this navBar need more modefications i'm not ok with how it looks
    <nav
     className={`${
      styles.paddingX } w-full flex items-center py-5 fixed top-0 z-20  ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}>
      <div className="w-full flex justify-between  items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo image with inline styles */}
          <div className=" flex items-center   m-0 "> <img 
  src={logo} 
  alt="logo" 
  className="object-contain " 
  style={{ width: "300px", height: "60px" }} 
/>
 {/* Text next to the logo */}
          <p className="text-white text-[18px] font-bold cursor-pointer m-0 flex hover:text-[#3f0aafee]">Youssef  &nbsp;
          </p> <span className="font-bold sm:block hidden hover:text-[#ff4309] text-[18px] cursor-pointer">
          | El Aamrani</span>
          </div>
         
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
              {
                navLinks.map((link) =>(
                        <li 
                              key={link.id}
                                  className={`${ 
                                    active === link.title 
                                    ? "text-[#ff4309] "
                                    :"text-secondary"
                                              }
                                                hover:text-[#ff4309] text-[18px] font-medium cursor-pointer
                                              `}
                                                          onClick={()=>setActive(link.title)} 
                                            >
                                    <a href={`#${link.id}`}>
                                              {link.title}
                                    </a>
                        </li>
                        
                      ))
              }
         </ul>
         <div className=" sm:hidden flex flex-1 justify-end items-center ">
              <img  
              src={toggle ? close : menu }
              alt="menu"
              className="w-[28px] h-[28px] object-contain  "
              onClick={()=>setToggle(!toggle)}
              />


              <div className={`${!toggle ?'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
              <ul className="list-none flex  justify-end items-start flex-col gap-4 ">
              {
                navLinks.map((link) =>(
                        <li
                         key={link.id}
                         
                            className={`${
                            active === link.title 
                                        ? 'text-while' 
                                        :  'text-secondary'
                                        } font-poppins font-bold  
                                          cursor-pointer text-[16px] 
                                          hover:text-[#ff4309] text-[18px]  font-bold cursor-pointer
                                          `}
                            onClick={()=>{
                              setToggle(!toggle) ;
                              setActive(link.title);
                            }} 
                                      >
                              <a href={`#${link.id}`}>
                                         {link.title}
                              </a>
                        </li>
                      ))
              }
         </ul>
              </div>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
