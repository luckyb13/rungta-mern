// asyncAwaitProcessor.js

// Helper: ~30% chance to fail
function shouldFail(prob = 0.3) {
  return Math.random() < prob;
}

// Step 1: Create Order
function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject("Error: createOrder failed");
      console.log("Step 1: Order created");
      resolve("Order ID: 123");
    }, 1000);
  });
}

// Step 2: Process Payment
function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject("Error: processPayment failed");
      console.log(`Step 2: Payment processed for ${orderId}`);
      resolve("Payment ID: 456");
    }, 1000);
  });
}

// Step 3: Deliver Order
function deliverOrder(paymentId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail()) return reject("Error: deliverOrder failed");
      console.log(`Step 3: Order delivered using ${paymentId}`);
      resolve("Delivery confirmed");
    }, 1000);
  });
}

// Orchestrator using async/await + try/catch
async function handleOrder() {
  try {
    const orderId = await createOrder();
    const paymentId = await processPayment(orderId);
    const deliveryStatus = await deliverOrder(paymentId);
    console.log("Result:", deliveryStatus);
  } catch (err) {
    console.error(err);
  }
}

// Run it
handleOrder();
