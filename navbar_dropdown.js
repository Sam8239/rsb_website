// Store a reference to the dropdown menus
var dropdownMenus = document.querySelectorAll(".navbar .dropdown");

// Function to close all submenus of a dropdown menu
function closeSubmenus(dropdown) {
	var submenus = dropdown.querySelectorAll(".submenu");
	submenus.forEach(function (submenu) {
		submenu.style.display = "none";
	});
}

// Function to toggle submenu display
function toggleSubmenu(submenu) {
	if (submenu.style.display === "block") {
		submenu.style.display = "none";
	} else {
		submenu.style.display = "block";
	}
}

// Event listener for window resize
window.addEventListener("resize", function () {
	if (window.innerWidth < 992) {
		// Close all submenus on smaller screens
		dropdownMenus.forEach(function (dropdown) {
			closeSubmenus(dropdown);
		});
	}

	dropdownMenus.forEach(function (dropdown) {
		var isOpen = dropdown.classList.contains("show");
		if (isOpen) {
			var toggle = dropdown.querySelector('[data-toggle="dropdown"]');
			toggle.click();
		}
	});
});

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
	// Prevent closing from click inside dropdown
	document.querySelectorAll(".dropdown-menu").forEach(function (element) {
		element.addEventListener("click", function (e) {
			e.stopPropagation();
		});
	});

	// Function to handle submenu click
	function handleSubmenuClick(e) {
		var nextEl = this.nextElementSibling;
		if (nextEl && nextEl.classList.contains("submenu")) {
			// Prevent opening link if link needs to open dropdown
			e.preventDefault();
			toggleSubmenu(nextEl);
		}
	}

	// Attach submenu click event listener to dropdown menu links
	document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
		element.addEventListener("click", handleSubmenuClick);
	});
});
