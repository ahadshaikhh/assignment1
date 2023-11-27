// Sample education data - Replace with your own education details
const education = [
  { grade: 'O/A LEVELS-PRIVATE', course: 'COMMERCE - Business studies, Maths and Economics (2016-2020)' },
  { grade: 'FAST (NUCES)', course: 'BS in Computer Science (2020-Present)' },
  // Add more education details...
];

// Function to display education details on the Education page
function displayEducation() {
  const educationList = document.getElementById('educationList');
  educationList.innerHTML = '';

  education.forEach(edu => {
    const eduItem = document.createElement('li');
    eduItem.textContent = `${edu.grade}: ${edu.course}`;
    educationList.appendChild(eduItem);
  });
}

// Display education details on page load
window.onload = function() {
  displayEducation();
};
