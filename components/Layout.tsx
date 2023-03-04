import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen shadow-2xl">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
