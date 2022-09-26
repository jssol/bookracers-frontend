const totalPrice = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const difference = end.getTime() - start.getTime();
  const days = Math.ceil(difference / (1000 * 3600 * 24));
  return days;
};

export default totalPrice;
