/* eslint-disable-next-line */
export const doubleNum = num => {
  const stringnum = '' + num;
  const lenght = stringnum.length;
  const leftpath = stringnum.slice(0,lenght / 2);
  const rightpath = stringnum.slice(lenght / 2, lenght);
  if (leftpath === rightpath) {
    return num;
  } else {
    return num * 2;
  }
  
};
