# Assignment-4

Assignment-4 is a TypeScript practice project containing five programming problems designed to strengthen fundamental TypeScript and JavaScript problem-solving skills.

The assignment focuses on functions, interfaces, union types, conditional logic, array methods, and basic data processing.

---

## 📚 Problems Included

### 1. Battery Status

Determines the battery status based on a given percentage.

The function handles different battery levels and returns the appropriate status.

```ts
getBatteryStatus(percentage: number): string
```

---

### 2. Booking Confirmation

Creates a formatted booking confirmation message using a TypeScript interface.

The booking information includes:

- Customer name
- Number of guests
- Booking time

```ts
formatBookingConfirmation(booking: Booking): string
```

---

### 3. Weekly Expense Total

Calculates the total amount of expenses for a week using the `reduce()` array method.

```ts
calculateWeeklyTotal(expenses: number[]): number
```

Example:

```ts
calculateWeeklyTotal([200, 450, 100]);
// 750
```

---

### 4. Traffic Light Action

Determines the appropriate action based on a traffic light color.

Possible values include:

- `red` → Stop
- `yellow` → Slow Down
- `green` → Go

A TypeScript union type is used to define the allowed traffic light values.

```ts
getTrafficAction(light: Light): string
```

---

### 5. Quiz Summary

Calculates the total and average score from an array of quiz scores.

```ts
getQuizSummary(scores: number[]): {
  total: number;
  average: number;
}
```

The function also handles an empty score array by returning an average of `0`.

---

## 🛠️ Technologies Used

- TypeScript
- JavaScript Fundamentals
- Functions
- Interfaces
- Union Types
- Conditional Statements
- Array Methods

---

## 🎯 Learning Objectives

This assignment focuses on practicing:

- TypeScript type annotations
- Writing reusable functions
- Creating and using interfaces
- Working with union types
- Using conditional statements
- Using array methods such as `reduce()`
- Handling empty arrays
- Formatting strings
- Solving programming problems logically

---

## 📂 Project Structure

```text
Assignment-4/
│
├── problem1.ts
├── problem2.ts
├── problem3.ts
├── problem4.ts
├── problem5.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Emransani01/Assignment-4.git
```

### 2. Go to the project directory

```bash
cd Assignment-4
```

### 3. Run the TypeScript files

The TypeScript files can be run using a TypeScript-compatible environment such as:

- VS Code
- TypeScript Playground
- `ts-node`
- A TypeScript project setup

---

## 👨‍💻 Author

**Md. Emran Hossain**

GitHub: [@Emransani01](https://github.com/Emransani01)

---

## 📄 License

This project was created for learning and practice purposes.
