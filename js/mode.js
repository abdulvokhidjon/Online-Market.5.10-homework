document.addEventListener("DOMContentLoaded", () => {
  // Set up dark mode
  const toggleButton = document.createElement("div");
  toggleButton.classList.add("toggle-button", "dark");
  toggleButton.innerHTML = `<span class="fas fa-moon"></span>`;
  document.body.appendChild(toggleButton);

  let isDarkMode = false; // Initial state

  toggleButton.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark");
    if (isDarkMode) {
      toggleButton.innerHTML = `<span class="fas fa-sun"></span>`;
    } else {
      toggleButton.innerHTML = `<span class="fas fa-moon"></span>`;
    }
  });
});
