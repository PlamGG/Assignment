const groupStudents = require('../solutions/3');

test('groups students by grade correctly', () => {
  const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 67 },
  ];

  const result = groupStudents(students);

  expect(result).toEqual({
    A: [{ name: "Bob", grade: 92 }],
    B: [{ name: "Alice", grade: 85 }],
    F: [{ name: "Charlie", grade: 67 }],
  });
});
