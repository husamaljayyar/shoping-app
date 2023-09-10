import { Link } from "react-router-dom";

const Button = ({ className, text, onClick, as: Component = Link, link, background, width, height }) => {
   return (
    <Component
      className={className}
      to={link}
      onClick={onClick}
      style={{ background: background, width: width, height: height }}
    >
      {text}
    </Component>
  );
};

export default Button;