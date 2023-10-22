const order = {};
const city = order.customer?.address.city;
if (!city) {
  console.log('City is required');
}


