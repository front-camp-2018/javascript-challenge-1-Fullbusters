/* eslint-disable-next-line */
export const sortByWeight = arr => {

  arr.sort((first, second) => {
    const firstAmount = [...first].reduce((sum, current) => sum + Number(current), 0);
      
    const secondAmount = [...second].reduce((sum, current) => sum + Number(current), 0);

    return firstAmount - secondAmount;
  });
  return arr;
 
  
};
