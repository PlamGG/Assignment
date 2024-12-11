function allocateResources(projects, totalBudget) {
  
  projects.sort((a, b) => a.priority - b.priority);
  
  return projects.map(project => {
    if (totalBudget >= project.budget) {
      totalBudget -= project.budget;
      return { name: project.name, allocated: project.budget };
    } else {
      const allocatedAmount = totalBudget;
      totalBudget = 0;
      return { name: project.name, allocated: allocatedAmount };
    }
  });
}

module.exports = allocateResources; 
