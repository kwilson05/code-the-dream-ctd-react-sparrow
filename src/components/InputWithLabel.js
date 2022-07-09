import { useRef, useEffect } from "react";
import propTypes from "prop-types";

const InputWithLabel = ({
  id,
  type = "text",
  value,
  handleTitleChange,
  children,
  isFocused,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={handleTitleChange}
        id={id}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  handleTitleChange: propTypes.func,
  children: propTypes.oneOfType([propTypes.element, propTypes.string]),
  isFocused: propTypes.bool,
};

export default InputWithLabel;
