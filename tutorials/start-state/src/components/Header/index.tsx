import { useState } from "react";
import "./Header.css";

const Header = ({title,version}: HeaderProps) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
  };

    return (
      <header onClick={handleClick}>
        <h1 className="animate__animated animate__bounce">{title}</h1>
          {menuPrinted ? `${title}... and rarely we hate it` : title}
        <h4>Version: {version}</h4>
      </header>
    );
};

interface HeaderProps {
    title: string;
    version: number;
}

export default Header;