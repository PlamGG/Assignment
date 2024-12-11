const allocateResources = require('../solutions/1');

test('Allocate Resources Based on Priorities', () => {
  const projects = [
    { name: "Project A", budget: 5000, priority: 1 },
    { name: "Project B", budget: 3000, priority: 2 },
    { name: "Project C", budget: 2000, priority: 3 },
  ];
  const totalBudget = 8000;

  const result = allocateResources(projects, totalBudget);
  expect(result).toEqual([
    { name: "Project A", allocated: 5000 },
    { name: "Project B", allocated: 3000 },
    { name: "Project C", allocated: 0 },
  ]);
});
