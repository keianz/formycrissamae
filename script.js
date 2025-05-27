// script.js

// Get the display element
const counterElement = document.getElementById('counter');

// Set the start date and time (May 28, 2023 at 10:23 AM)
const startDate = new Date("2023-05-28T10:23:00");

function updateElapsedTime() {
  const now = new Date();

  if (now < startDate) {
    counterElement.innerHTML = "The counter hasn't started yet!";
    return;
  }

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Adjust for negatives
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }

  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }

  if (hours < 0) {
    hours += 24;
    days -= 1;
  }

  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  let weeks = Math.floor(days / 7);
  days = days % 7;

  // Format the result
  let parts = [];
  if (years > 0) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months !== 1 ? 's' : ''}`);
  if (weeks > 0) parts.push(`${weeks} week${weeks !== 1 ? 's' : ''}`);
  if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

  counterElement.innerHTML = `Since May 28, 2023, 10:23 AM: <br> ${parts.join(', ')}`;
}

// Run the update once on load
updateElapsedTime();

// Update the counter every second
setInterval(updateElapsedTime, 1000);



// Function to open a tab
function openTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Remove active class from all tab buttons
  const tabButtons = document.querySelectorAll('.tab');
  tabButtons.forEach(button => button.classList.remove('active'));

  // Show the selected tab and mark it as active
  document.getElementById(tabName).classList.add('active');
  const activeTab = Array.from(tabButtons).find(tab => tab.textContent.toLowerCase() === tabName);
  if (activeTab) activeTab.classList.add('active');
}

function toggleMessage(element) {
  element.classList.toggle('open');
}

// Function to toggle music mute/unmute
function toggleMusic() {
  const music = document.getElementById('bg-music');
  music.muted = !music.muted;
}
