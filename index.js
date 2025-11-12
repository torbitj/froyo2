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

const displayOrderResults = (object) => {
  const results = orderSummary;

  console.log(`The flavors you ordered are:`)
  
}