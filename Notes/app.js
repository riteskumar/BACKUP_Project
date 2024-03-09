const btn = document.querySelector(".btn");
const inputContainer = document.querySelector(".notes-container");
const notes = document.querySelectorAll(".input-box");

btn.addEventListener("click", () => {
	let input_box = document.createElement("p");
	let img = document.createElement("img");
	input_box.className = "input-box";
	input_box.setAttribute("contenteditable", "true");
	img.src = "images/delete.png";
	inputContainer.appendChild(input_box).appendChild(img);
});
inputContainer.addEventListener("click", (e) => {
	if (e.target.tagName === "IMG") {
		e.target.parentElement.remove();
	}
});
