const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-btn");

const clickHandler = (e) => {
	if (menu.classList.contains("show") && !e.target.closest(".menu-wrapper")) {
		closeBtn.click();
	}
};

menu.addEventListener("click", clickHandler);
