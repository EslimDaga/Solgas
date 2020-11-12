import React, { useContext } from "react";

import { AuthContext } from "context/consumer";

export default function withUser(WrapedComponent) {
  return (props) => {
    const { user } = useContext(AuthContext);
    return <WrapedComponent user={user} {...props} />;
  };
}
