/* - HAMBURGER FUNCTIONS - */
// Hamburger menu open function
let menuopen = false;
const menu = document.querySelectorAll("nav,.hamburger,.menu-text");

function toggleMenu() {
	menu.forEach(element => {
		element.classList.toggle("open");
	});
	menuopen = !menuopen;
}

// Closing hamburger navigation if the window width is resized
window.addEventListener('resize', (event) => {
	if (window.innerWidth >= 1024 && menuopen) {
		toggleMenu();
	}
});


/* - SCROLL FUNCTIONS - */
// Show the 'go to top' button when the windows scrolled down 20px from the top
let toTopBtn = document.getElementById("to-top");

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	toTopScroll(currentScroll);
	navShow(currentScroll);
});

// Showing navigation if the window is scrolled up
let lastScroll = 0;
const navbar = document.querySelector(".nav-bar");

function navShow(currentScroll) {
	if (navbar){
		if (!menuopen) {
			if (currentScroll <= 0 && !navbar.classList.contains("scroll-down")) {
				// if the window is scrolled to the top and the navigation is not visible
				navbar.classList.remove("scroll-up");
				navbar.classList.remove("scroll-down");
			}
			if (currentScroll > lastScroll && !navbar.classList.contains("scroll-down")) {
				// if the window is scrolled down and the navigation is not visible
				navbar.classList.remove("scroll-up");
				navbar.classList.add("scroll-down");
			}
			if (currentScroll < lastScroll && navbar.classList.contains("scroll-down")) {
				// if the window is scrolled up and the navigation is visible
				navbar.classList.remove("scroll-down");
				navbar.classList.add("scroll-up");
			}
		}
		lastScroll = currentScroll;
	}
}

function toTopScroll(currentScroll) {
	if (toTopBtn) {
		if (currentScroll > 20) {
			toTopBtn.style.display = "block";
		} else {
			toTopBtn.style.display = "none";
		}
	}
}

// Scroll to the top of the document when the to-top button is pressed
function toTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Dark / Light mode
themeModeBtn = document.getElementById("theme-mode");
themeModeSymbol = document.getElementById("theme-symbol");
let newColorScheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
let systemColorChange = true;
changeColorTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    newColorScheme = event.matches ? "dark" : "light";
	systemColorChange = true;
	changeColorTheme();
});

function changeColorTheme() {

	if ( systemColorChange == false ) {

		if (newColorScheme == "dark") {
			newColorScheme = "light";
		} else {
			newColorScheme = "dark";
		}

	} else {
		systemColorChange = false;
	}

	document.documentElement.setAttribute("data-theme", newColorScheme);
	themeModeSymbol.innerHTML = newColorScheme+"_mode";
}


/* Observer Functions */

const section = document.querySelectorAll('.fadingsection');
const observer = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		} else {
			entry.target.classList.remove('visible');
		}
	}
}, {
	threshold: 0,
	rootMargin: '0px 0px -250px 0px'
})
section.forEach(el => observer.observe(el));


/* Typewriting effect */
function setupTypewriter(t) {
	var HTML = t.innerHTML;

	t.innerHTML = "";

	var cursorPosition = 0,
	tag = "",
	writingTag = false,
	tagOpen = false,
	typeSpeed = 100,
	tempTypeSpeed = 0;

	var type = function() {

		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}

		if (HTML[cursorPosition] === "<") {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = "";
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition];
			}
		}

		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === " ") {
				tempTypeSpeed = 0;
			} else {
				tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			}
			t.innerHTML += HTML[cursorPosition];
		}

		if (writingTag === true && HTML[cursorPosition] === ">") {
			tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement("span");
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}

		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}

	};

	return {
		type: type
	};
}

const stickyObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const parentSticky = entry.target;
	  const stickyElement = parentSticky.querySelector('.sticky-element');
	  if (entry.isIntersecting) {
		stickyElement.classList.add('sticky');
	  } else {
		stickyElement.classList.remove('sticky');
	  }
	});
  });
  
  document.querySelectorAll('.parent-sticky').forEach(parentSticky => {
	stickyObserver.observe(parentSticky);
  });
  
  

var typer = document.getElementById('typewriter');
if (typer) {
	typewriter = setupTypewriter(typer);
	typewriter.type();
}