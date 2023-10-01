import { FC, ReactNode } from "react";
import Sidebar from "./components/Sidebar";

interface layout {
  children: ReactNode;
}

const Layout: FC<layout> = ({ children }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Sidebar />
        <div className="ml-14 md:ml-0 w-full ">{children}</div>
      </div>
    </>
  );
};

export default Layout;
