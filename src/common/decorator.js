import moment from "./moment";

export const yourdate = (date, addFormat = "hh:mm a") => {
  return moment(date).format("DD/MM/YYYY " + addFormat);
};

export const yourdateactual = (date = new Date()) => {
  return moment(date).format("YYYY-MM-DD");
};
