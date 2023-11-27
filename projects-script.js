

  // Sample project data - Replace with your own projects
const projects = [
  { name: 'Online Shopping Cart System', technology: 'C' },
  { name: 'STUDENT CARD GENERATOR', technology: 'C++' },
  { name: 'CAR RECOMMENDATION SYSTEM', technology: 'C++' },
  { name: 'MATHEMATICAL EQUATION SOLVER', technology: 'Assembly Language' },
  { name: ' READERS AND WRITERS PROBLEM ', technology: 'Linux OS' },
  { name: 'HOSPITAL MANAGEMENT SYSTEM', technology: 'Flutter/Dart' },
  { name: ' INTELLICART (ONGOING- FINAL YEAR PROJECT)', technology: 'Python' },
  // Add more projects...
];

// Function to display projects on the Projects page
function displayProjects(projectsToDisplay) {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  projectsToDisplay.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.textContent = `${project.name} - ${project.technology}`;
    projectList.appendChild(projectItem);
  });
}

// Function to filter projects based on input
document.getElementById('filterInput').addEventListener('input', function() {
  const filterValue = this.value.toLowerCase();
  const filteredProjects = projects.filter(project =>
    project.technology.toLowerCase().includes(filterValue)
  );
  displayProjects(filteredProjects);
});

// Display all projects on page load
window.onload = function() {
  displayProjects(projects);
};
