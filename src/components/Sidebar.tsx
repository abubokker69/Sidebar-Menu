import { useState } from "react";
import { sidemenus } from "../data";
import "../styles/__shoecard.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState<boolean>(false);
  const [menuporfile, setProfile] = useState<boolean>(false);
  const handleMenu = () => {
    setMenu(!menu);
    setSubmenu(false);
    setProfile(false);
  };
  return (
    <>
      {/* <div className="" onClick={() => setMenu(false)}></div> */}
      <div className="h-full bg-gray-100 fixed ">
        <div className="sidebar">
          <div className="button">
            <button onClick={handleMenu}>
              {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
          <div className=" menu-section">
            {sidemenus.map((item, i) => (
              <div key={i}>
                <ul>
                  <Link to={item.link}>
                    <li>
                      <abbr className="text-lg" title={item.menu}>
                        {item.icon}
                      </abbr>
                      {menu && (
                        <span className="flex items-center gap-8">
                          {item.menu}{" "}
                          <span onClick={() => setSubmenu(!submenu)}>
                            {submenu ? item.icondivide : item.iconplus}
                          </span>
                          <span onClick={() => setProfile(!menuporfile)}>
                            {menuporfile ? item.icondividep : item.iconplusp}
                          </span>
                        </span>
                      )}
                    </li>
                  </Link>
                </ul>
                {item.subMenu?.map((sub, i) => (
                  <div key={i} className="submenu">
                    {submenu && (
                      <div>
                        <p>{sub.iconsub}</p>
                        <p>{sub.menuone}</p>
                      </div>
                    )}
                  </div>
                ))}
                {item.menuProfile?.map((sub, i) => (
                  <div key={i} className="submenu">
                    {menuporfile && (
                      <div>
                        <p>{sub.iconp}</p>
                        <p>{sub.menup}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
