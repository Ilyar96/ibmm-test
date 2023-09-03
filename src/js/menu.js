const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

const overlayClickHandler = (e) => {
	if (menu.classList.contains("show") && !e.target.closest(".menu-wrapper")) {
		closeBtn.click();
	}
};

const toggleBodyLockClass = () => {
	document.body.classList.toggle("lock");
};

menu.addEventListener("click", overlayClickHandler);
menuBtn.addEventListener("click", toggleBodyLockClass);
closeBtn.addEventListener("click", toggleBodyLockClass);
