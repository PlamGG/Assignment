const groupStudents = (students) => {
    return students.reduce((groups, student) => {
      const grade = student.grade;
      let group;
  
      if (grade >= 90) group = "A";
      else if (grade >= 80) group = "B";
      else if (grade >= 70) group = "C";
      else group = "F";
  
      if (!groups[group]) groups[group] = [];
      groups[group].push(student);
      return groups;
    }, {});
  };
  
  module.exports = groupStudents;
  