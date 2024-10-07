"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { IoHomeOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { RiHeartPulseLine } from "react-icons/ri";
import { MdNightlife } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { FaHandHoldingMedical } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const NavSidebar = () => {
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // test
  return (
    <>
      {mounted && (
        <Sidebar
          collapsed={isCollapsed}
          width="23%"
          collapsedWidth="6rem"
          backgroundColor="#232D3F"
          className="h-screen fixed"
          rootStyles={{ border: 0 }}
        >
          <div
            className="flex items-center justify-between mx-2 my-5 px-4 py-5 cursor-pointer hover:bg-[#4D4C7D] rounded-md text-white"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed && (
              <h1 className="font-semibold text-xl">Stress Analyzer</h1>
            )}
            {isCollapsed ? (
              <FaHandHoldingMedical
                size={30}
                className={`${isCollapsed && "ml-3"}`}
              />
            ) : (
              <IoMenuOutline size={30} />
            )}
          </div>
          <div className="text-white">
            <Menu
              menuItemStyles={{
                button: {
                  backgroundColor: "",
                  "&:hover": {
                    backgroundColor: "#4D4C7D",
                  },
                },
              }}
            >
              <Link href="/">
                <div
                  className={`py-8 hover:bg-[#4D4C7D] ${
                    !isCollapsed && "mx-5"
                  } rounded-md`}
                >
                  <MenuItem>
                    <div className="flex items-center gap-7 text-lg font-semibold px-1">
                      <IoHomeOutline
                        size={30}
                        className={`${isCollapsed && "ml-3"}`}
                      />
                      {!isCollapsed && <div>Home</div>}
                    </div>
                  </MenuItem>
                </div>
              </Link>

              <Link href="/demographical-analysis">
                <div
                  className={`py-8 hover:bg-[#4D4C7D] ${
                    !isCollapsed && "mx-5"
                  } rounded-md`}
                >
                  <MenuItem>
                    <div className="flex items-center gap-7 text-lg font-semibold">
                      <GoPeople
                        size={30}
                        className={`${isCollapsed && "ml-3"}`}
                      />
                      {!isCollapsed && <div>Demographic Analysis</div>}
                    </div>
                  </MenuItem>
                </div>
              </Link>

              <Link href="/health-analysis">
                <div
                  className={`py-8 hover:bg-[#4D4C7D] ${
                    !isCollapsed && "mx-5"
                  } rounded-md`}
                >
                  <MenuItem>
                    <div className="flex items-center gap-7 text-lg font-semibold">
                      <RiHeartPulseLine
                        size={30}
                        className={`${isCollapsed && "ml-3"}`}
                      />
                      {!isCollapsed && <div>Health Analysis</div>}
                    </div>
                  </MenuItem>
                </div>
              </Link>

              <Link href="/lifestyle">
                <div
                  className={`py-8 hover:bg-[#4D4C7D] ${
                    !isCollapsed && "mx-5"
                  } rounded-md`}
                >
                  <MenuItem>
                    <div className="flex items-center gap-7 text-lg font-semibold">
                      <MdNightlife
                        size={30}
                        className={`${isCollapsed && "ml-3"}`}
                      />
                      {!isCollapsed && <div>Lifestyle Analysis</div>}
                    </div>
                  </MenuItem>
                </div>
              </Link>

              <a href="https://stress-analyzer.streamlit.app/" target="_blank">
                <div
                  className={`py-8 hover:bg-[#4D4C7D] ${
                    !isCollapsed && "mx-5"
                  } rounded-md`}
                >
                  <MenuItem>
                    <div className="flex items-center gap-7 text-lg font-semibold">
                      <BsGraphUp
                        size={30}
                        className={`${isCollapsed && "ml-3"}`}
                      />
                      {!isCollapsed && <div>Stress Analysis</div>}
                    </div>
                  </MenuItem>
                </div>
              </a>
            </Menu>
          </div>
        </Sidebar>
      )}
    </>
  );
};

export default NavSidebar;
