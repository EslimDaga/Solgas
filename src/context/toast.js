import React, { createContext, useState } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("");
  const [message, setMessage] = useState("");

  const show = (message, type) => {
    let color;
    switch (type) {
      case "success":
        color = "#357a38";
        break;
      case "warn":
        color = "#ffa000";
        break;
      case "error":
        color = "#d32f2f";
        break;
      default:
        color = "#313131";
        break;
    }
    setColor(color);
    setMessage(message);
    setOpen(!open);
  };

  return (
    <ToastContext.Provider
      value={{
        show
      }}
    >
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <SnackbarContent
          style={{ backgroundColor: color }}
          message={<span id="toast">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </Snackbar>
      {children}
    </ToastContext.Provider>
  );
};

export const withToastContext = ChildComponent => props => (
    <ToastContext.Consumer>
        {context => <ChildComponent {...props} toast={context} />}
    </ToastContext.Consumer>
);  
