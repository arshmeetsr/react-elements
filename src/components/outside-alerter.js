import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
 
function useOutsideAlerter(ref, onOutsideClick) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
    }
  }
 
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
 
function OutsideAlerter({children, onOutsideClick}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, onOutsideClick);
 
  return <div ref={wrapperRef}>{children}</div>;
}
 
OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
  onOutsideClick: PropTypes.func.isRequired
};
 
export default OutsideAlerter;