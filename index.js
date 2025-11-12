const userOrderInput = prompt(`What flavors of froyo would you like?`);
const flavorsArray = userOrderInput.split(`,`);

const orderSummary = flavorsArray.reduce((), {});