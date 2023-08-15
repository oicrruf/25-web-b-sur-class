/* eslint-disable react/prop-types */
import { Button as ReactstrapButton } from "reactstrap";

function Button({ children, color, onClick }) {
  return (
    <ReactstrapButton color={color} onClick={onClick}>
      {children}
    </ReactstrapButton>
  );
}

export default Button;
