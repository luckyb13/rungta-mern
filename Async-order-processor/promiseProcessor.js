// Helper: ~30% chance to fail
function shouldFail(prob = 0.3) {
  return Math.random() < prob;
}

// 1) Chained Promises with Error Simulation
function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject("Error: createOrder failed");
      console.log("Step 1: Order created");
      resolve("Order ID: 123");
    }, 1000);
  });
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject("Error: processPayment failed");
      console.log(`Step 2: Payment processed for ${orderId}`);
      resolve("Payment ID: 456");
    }, 1000);
  });
}

function deliverOrder(paymentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject("Error: deliverOrder failed");
      console.log(`Step 3: Order delivered using ${paymentId}`);
      resolve("Delivery confirmed");
    }, 1000);
  });
}

// Run with chained .then()
createOrder()
  .then(orderId => processPayment(orderId))
  .then(paymentId => deliverOrder(paymentId))
  .then(result => console.log("Result:", result))
  .catch(err => console.error(err));
