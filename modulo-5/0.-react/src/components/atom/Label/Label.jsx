/* eslint-disable react/prop-types */
import { Label as ReactstrapLabel } from "reactstrap";

// const Label = (props)=>  {
const Label = ({ children, forHtml }) => {
  // size
  return (
    // <ReactstrapLabel for="user">{props.children}</ReactstrapLabel>
    <ReactstrapLabel
      // className={size}
      for={forHtml}
    >
      {children}
    </ReactstrapLabel>
  );
};

export default Label;
