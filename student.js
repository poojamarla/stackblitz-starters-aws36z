// Sample array of student objects
const students = [
  { name: "John", chemistry: 85, biology: 90, dob: "15-02-2000" },
  { name: "Alice", chemistry: 75, biology: 80, dob: "12-06-2001" },
  { name: "David", chemistry: 90, biology: 85, dob: "08-09-2000" },
  // Add more student objects as needed
];

// Custom sorting function based on the given rules
const compareStudents = (a, b) => {
  // First priority: Total marks
  if (a.chemistry + a.biology !== b.chemistry + b.biology) {
    return (b.chemistry + b.biology) - (a.chemistry + a.biology);
  }

  // Second priority: Biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }

  // Third priority: Date of birth (earliest first)
  const [dayA, monthA, yearA] = a.dob.split("-").map(Number);
  const [dayB, monthB, yearB] = b.dob.split("-").map(Number);
  if (yearA !== yearB) {
    return yearA - yearB;
  }
  if (monthA !== monthB) {
    return monthA - monthB;
  }
  return dayA - dayB;
};

// Sorting the array of student objects using the custom sorting function
students.sort(compareStudents);

// Printing the sorted array of student objects
console.log(students);