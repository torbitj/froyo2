const userOrderInput = prompt(`What flavors of froyo would you like?`);
const flavorsArray = userOrderInput.split(`,`);

const orderSummary = flavorsArray.reduce((orderFlavors, flavor) => {
  if (orderFlavors[flavor] === undefined) {
    orderFlavors[flavor] = 1;
  }
  else {
    orderFlavors[flavor]++;
  }
  return orderFlavors;
}, {});

console.log(orderSummary)