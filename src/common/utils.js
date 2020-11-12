
/**
 * 
 * @param {String} name 
 * @return {String}
 */
export const dayname = (name) => {
  const curHr = new Date().getHours();
  let title = "Buenas Noches ";
  if (curHr < 12) {
    title = "Buenos Dias ";
  } else if (curHr < 18) {
    title = "Buenas Tardes ";
  }
  return title + name;
};

/**
 * @param {Blob} value
 * @param {String} name
 * @return {Boolean}
 */
export const downloadFile = (value, name) => {
  const url = window.URL.createObjectURL(new Blob([value]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", name);
  document.body.appendChild(link);
  link.click();
};
