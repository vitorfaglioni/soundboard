if (window.CSS && CSS.supports("color", "var(--primary)")) {
    const toggleColorMode = function toggleColorMode(e) {
      if (e.currentTarget.classList.contains("light--hidden")) {
        document.documentElement.setAttribute("color-mode", "light"); // Sets the user's preference in local storage
  
        localStorage.setItem("color-mode", "light");
        return;
      }
      document.documentElement.setAttribute("color-mode", "dark"); // Sets the user's preference in local storage
  
      localStorage.setItem("color-mode", "dark");
    }; 
  
    const toggleColorButtons = document.querySelectorAll(".color-mode__btn"); // Set up event listeners
  
    toggleColorButtons.forEach(function(btn) {
      btn.addEventListener("click", toggleColorMode);
    });
  } 