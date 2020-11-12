import React, { useContext } from "react";

import { ToastContext } from "context/consumer";

export default function withToast(WrapedComponent) {
  return (props) => {
    const { show } = useContext(ToastContext);
    return <WrapedComponent show={show} {...props} />;
  };
}
