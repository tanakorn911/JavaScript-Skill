// Question #1: Shipping Cost Calculator

function calculateShippingCost(orders) {
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    let message = "";

    if (order.total >= 6000) {
      message = "Shipping is free.";
    } else if (order.total >= 3000) {
      message = "Shipping cost is 250 Baht.";
    } else {
      message = "Shipping cost is 500 Baht.";
    }

    console.log(`Order ${order.orderId}: ${message}`);
  }
}

const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

calculateShippingCost(orders);
