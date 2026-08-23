// <<<<<<<<<<<<-------- Problem-1----------->>>>>>>>>>

function getBatteryStatus(percentage: number): string {
  if (percentage >= 0 && percentage <= 20) {
    return "Low";
  } else if (percentage >= 21 && percentage <= 50) {
    return "Medium";
  } else if (percentage >= 51 && percentage <= 90) {
    return "High";
  } else {
    return "Full";
  }
}

// <<<<<<<<<<<<-------- Problem-2----------->>>>>>>>>>

interface Booking {
  name: string;
  guests: number;
  time: string;
}

function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
}

// <<<<<<<<<<<<-------- Problem-3----------->>>>>>>>>>

function calculateWeeklyTotal(expenses: number[]): number {
  return expenses.reduce((total, expense) => total + expense, 0);
}

// <<<<<<<<<<<<-------- Problem-4----------->>>>>>>>>>

type Light = "red" | "yellow" | "green";

function getTrafficAction(light: Light): string {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow Down";
  } else {
    return "Go";
  }
}

// <<<<<<<<<<<<-------- Problem-5----------->>>>>>>>>>

function getQuizSummary(scores: number[]): { total: number; average: number } {
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = scores.length === 0 ? 0 : total / scores.length;

  return {
    total,
    average,
  };
}
