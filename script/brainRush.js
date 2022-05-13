username.placeholder = "Your Name";

/* The three functions of code below are for the customization screen. It notifies the user whether or not their input is acceptable. */
function changeToRed(formElement) {
	let input = formElement.value;
	if (input.length == "") {
	formElement.style.borderColor = "red";
	}
	else {
		changeToGreen(formElement);
	}
}

function changeToGreen(formElement) {
	formElement.style.borderColor = "green";
}

function changeToNormal() {
	username.style.borderColor = "#010530";
	bgColor.style.borderColor = "#010530";
	headColor.style.borderColor = "#010530";
	leftEyeColor.style.borderColor = "#010530";
	rightEyeColor.style.borderColor = "#010530";
	bodyColor.style.borderColor = "#010530";
}

/* The two function below are for the opening and closing of the avatar customization screen.*/
function openCustom() {
	customization.style.transition = "1s";
	customization.style.opacity = "1";
	customization.style.visibility = "visible";
}

function closeCustom() {
	customization.style.transition = "0.5s";
	customization.style.opacity = "0";
	customization.style.visibility = "hidden";
}

/* The function below is for unfinished features.*/
function temporary() {
	alert('This feature is currently unavailable.');
}