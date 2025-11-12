const userOrderInput = prompt(`What flavors of froyo would you like?`);
const flavorsArray = userOrderInput.split(`,`);

const orderSummary = flavorsArray.reduce((orderFlavors, flavor) => {
  const currentFlavor = orderFlavors[flavor];
  if (currentFlavor === undefined) {
    currentFlavor = 1;
  }
  else {
    currentFlavor++;
  }
}, {});