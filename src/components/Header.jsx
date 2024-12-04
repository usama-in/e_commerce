import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-primary">
      <header className="flex justify-between ml-[5rem] mr-[5rem] items-center h-[100px]">
        <div>
          <p>E-Comm</p>
        </div>
        <nav>
          <ul className="flex gap-10  font-semibold">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline" : undefined
                }
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"category/bags"}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline" : undefined
                }
              >
                BAGS{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category/sneakers"}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline" : undefined
                }
              >
                SNEAKERS{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category/belt"}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline" : undefined
                }
              >
                BELT{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category/sunglasses"}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline" : undefined
                }
              >
                SUNGLASSES{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  isActive ? "text-secondary underline" : undefined
                }
              >
                CONTACT{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
