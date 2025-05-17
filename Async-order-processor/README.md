# Async Order Processor

Simulates a simple multi-step workflow (“order → payment → delivery”) using both Promise-chaining and async/await patterns, with built-in error simulation.

## Project Structure

```
async-order-processor/
├── promiseProcessor.js     # Promise-chaining version
├── asyncAwaitProcessor.js  # async/await + try/catch version
└── README.md               # This documentation
```

## Prerequisites

* Node.js (v14.x or higher)
* (Optional) Git, if cloning the repository

## Installation

1. **Clone the repository** (or download the files):

   ```bash
   git clone https://github.com/your-username/async-order-processor.git
   cd async-order-processor
   ```

2. *(Optional)* Initialize a `package.json` for convenient scripts:

   ```bash
   npm init -y
   ```

## Usage

### 1. Promise-Chaining Version

Run with Node:

```bash
node promiseProcessor.js
```

**Expected output on success:**

```
Step 1: Order created
Step 2: Payment processed for Order ID: 123
Step 3: Order delivered using Payment ID: 456
Result: Delivery confirmed
```

**On simulated failure (random \~30% chance):**

```
Error: processPayment failed
```

*(or whichever step failed)*

### 2. Async/Await Version

Run with Node:

```bash
node asyncAwaitProcessor.js
```

The output mirrors the Promise version but uses `async`/`await` and `try`/`catch` internally.

## Error Simulation

A helper function `shouldFail(probability)` (default \~30% failure rate) is used in each step to randomly reject, demonstrating your error-handling with `.catch()` or `try/catch`.

## Customization

* **Failure Rate:** Edit the probability value in `shouldFail()` to increase or decrease error frequency.
* **Step Messages & Logic:** Modify `console.log` and error messages for each function to suit your demo requirements.
* **Scripts:** Add to `package.json` for shortcuts:

  ```json
  "scripts": {
    "start:promise": "node promiseProcessor.js",
    "start:async":   "node asyncAwaitProcessor.js"
  }
  ```

Then run:

```bash
npm run start:promise
npm run start:async
```

## License

This project is licensed under the MIT License. Feel free to adapt and extend.
