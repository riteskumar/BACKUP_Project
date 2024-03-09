const listContainer = document.querySelector("#ListContainer");
const inputBox = document.querySelector("#input-box");

const addItem = function () {
	if (inputBox.value === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
};
listContainer.addEventListener(
	"click",
	(e) => {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
			savedData();
		}
		if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			savedData();
		}
	},
	false
);
function savedData() {
	localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showList();
