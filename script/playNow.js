/* The function below is for starting the game. */
function startGame() {
	start.style.visibility = "hidden";
	mainScreen.style.transition = "2s";
	mainScreen.style.opacity = "0";
	mainScreen.style.visibility = "hidden";
	
	startTimer();
}

/* The two functions below are for the two timers used in the game. */
const prep = document.getElementById("prepCountdown");
let timeLeft = 4;
let timeLeft2 = 19;

function startTimer() {	
	let prepTimer = setInterval(function(){
	if(timeLeft <= 0){
		clearInterval(prepTimer);
		prep.innerHTML = "Go!";
		prep.style.transition = "1s";
		prep.style.opacity = "0";
		prep.style.visibility = "hidden";
		
		gameInterface.style.transition = "1s";
		gameInterface.style.opacity = "1";
		gameInterface.style.visibility = "visible";
		
		start2ndTimer();
	} else {
		prep.innerHTML = timeLeft;
	}
	timeLeft -= 1;
	}, 1000);
}

function start2ndTimer() {
	timer = setInterval(function h(){
		if(timeLeft2 <= -1){
			clearInterval(timer);
			checkAnswer();			
		} else {
			timerCountdown.innerHTML = timeLeft2;
			timerFill.style.transition = "20s";
			timerFill.style.transitionTimingFunction = "linear";
			timerFill.style.backgroundColor = "#A81B1B";
			timerFill.style.width = "0px";
		}
		timeLeft2 -= 1;
		}, 1000);	
}


/* The few functions below control the quiz navigation. */
let counter = 0;
let number = 1;
let questionPosition = 0;

var questions = ["Many features and questions are still being made, and only Level 1 out of 3 is available. After completing Level 1, the game will end. Please click A if you want to proceed. Click any other choice, submit no answer, or wait for timer to end to receive a game over.",
"The correct answer is A.","The correct answer is C.", "The correct answer is C.", "The correct answer is D."];
var aChoices = ["Temporary A", "Temporary2 A", "Temporary3 A", "Temporary4 A", "Temporary5 A"];
var bChoices = ["Temporary B", "Temporary2 B", "Temporary3 B", "Temporary4 B", "Temporary5 B"];
var cChoices = ["Temporary C", "Temporary2 C", "Temporary3 C", "Temporary4 C", "Temporary5 C"];
var dChoices = ["Temporary D", "Temporary2 D", "Temporary3 D", "Temporary4 D", "Temporary5 D"];

function nextQuestion() {
	timeLeft2 = 20;
	number++;
	counter++;
	
	pageCheck();
	
	if (number !== 6) {
		start2ndTimer();
	}
	
	gameChoice1.style.transition = "1s";
	gameChoice1.style.opacity = "1";		
	gameChoice2.style.transition = "1s";
	gameChoice2.style.opacity = "1";		
	gameChoice3.style.transition = "1s";
	gameChoice3.style.opacity = "1";			
	gameChoice4.style.transition = "1s";
	gameChoice4.style.opacity = "1";	
}

function nextPage() {
	number++;
	counter++;	
	
	pageCheck();
}

function previousPage() {
	number--;
	counter--;
	
	pageCheck();
}

/* The function below changes the quiz's content when the previous or next button is being pressed */
function pageCheck() {
	
	switch(counter) {
		case 0:
			choice1.checked = true;
			gameChoice1.style.opacity = "1";		
			gameChoice2.style.opacity = "0.7";		
			gameChoice3.style.opacity = "0.7";			
			gameChoice4.style.opacity = "0.7";
		
			money.style.textDecoration = "underline";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "none";
		break;
		
		case 1:
			choice1.checked = true;
			gameChoice1.style.opacity = "1";		
			gameChoice2.style.opacity = "0.7";		
			gameChoice3.style.opacity = "0.7";			
			gameChoice4.style.opacity = "0.7";
		
			money.style.textDecoration = "none";
			money2.style.textDecoration = "underline";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "none";
		break;
		
		case 2:
			choice1.value = "wrong";
			choice3.value = "correct";
			choice3.checked = true;
			gameChoice1.style.opacity = "0.7";		
			gameChoice2.style.opacity = "0.7";		
			gameChoice3.style.opacity = "1";			
			gameChoice4.style.opacity = "0.7";
		
			money.style.textDecoration = "none";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "underline";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "none";
		break;
		
		case 3:
			choice3.checked = true;
			gameChoice1.style.opacity = "0.7";		
			gameChoice2.style.opacity = "0.7";		
			gameChoice3.style.opacity = "1";			
			gameChoice4.style.opacity = "0.7";
		
			money.style.textDecoration = "none";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "underline";
			rewardMoney.style.textDecoration = "none";
		break;
		
		case 4:
			choice3.value = "wrong";
			choice4.value = "correct";
			choice4.checked = true;
			gameChoice1.style.opacity = "0.7";		
			gameChoice2.style.opacity = "0.7";		
			gameChoice3.style.opacity = "0.7";			
			gameChoice4.style.opacity = "1";
		
			money.style.textDecoration = "none";
			money2.style.textDecoration = "none";
			money3.style.textDecoration = "none";
			money4.style.textDecoration = "none";
			rewardMoney.style.textDecoration = "underline";
			rewardMoney.style.color = "#fcc761";
		break;
		
		case 5:
			levelComplete();	
		break;
		
		default:
		alert("If you get this alert, an error has most likely ocurred. Please refresh the browser for good measure.");
	}
	
	if (counter < aChoices.length && number <= 5){
		choiceA.innerHTML = aChoices[counter];
		choiceB.innerHTML = bChoices[counter];
		choiceC.innerHTML = cChoices[counter];
		choiceD.innerHTML = dChoices[counter];
	}

	if (counter < questions.length && number <= 5){
		questionNumber.innerHTML = number;
		questionArea.innerHTML = questions[counter];
	}
		
	
	if (counter == questionPosition) {
		coverNext.style.transition = "1s";
		coverNext.style.opacity = "1";
		coverNext.style.visibility = "visible";
		nextFix.style.visibility = "hidden";
		disableFix.style.visibility = "hidden";
		disableFixSubmit.style.visibility = "hidden";
	}	

	if (counter < questionPosition) {
		next.style.visibility = "hidden";
		coverNext.style.visibility = "hidden";
		nextFix.style.transition = "1s";
		nextFix.style.opacity = "1";
		nextFix.style.visibility = "visible";
		disableFix.style.visibility = "visible";
		disableFixSubmit.style.visibility = "visible";
	}
	
	if (questionPosition == 6) {
		coverPrevious.style.transition = "1s";
		coverPrevious.style.opacity = "0";
		coverPrevious.style.visibility = "hidden";		
		previous.style.transition = "1s";
		previous.style.opacity = "1";
		previous.style.visibility = "visible";
	}
	
	if (counter == 0) {
		coverPrevious.style.transition = "1s";
		coverPrevious.style.opacity = "1";
		coverPrevious.style.visibility = "visible";
		previous.style.transition = "1s";
		previous.style.opacity = "0";
		previous.style.visibility = "hidden";
	}
}

/* The few functions below are the actions done when an answer is submitted. */
let streakCounter = 0;	
	
function checkAnswer() {
	clearAndDisable();
	
	let answer = document.querySelector('input[name="choices"]:checked').value;
	if (answer === "correct") {
		questionPosition++;
		streakCounter += 1;
		answerStreak.innerHTML = streakCounter;
		answerStreak2.innerHTML = streakCounter;
		
		next.style.transition = "1s";
		next.style.opacity = "1";
		next.style.visibility = "visible";
		
		coverNext.style.transition = "1s";
		coverNext.style.opacity = "0";
		coverNext.style.visibility = "hidden";
		
		if (number == 5) {
			moneyGained.innerHTML = 1000;
			moneyGained2.innerHTML = 1000;
			moneyGained3.innerHTML = 1000;
			questionPosition++;
		}
		
		if (questionPosition == 6) {
			coverPrevious.style.transition = "1s";
			coverPrevious.style.opacity = "0";
			coverPrevious.style.visibility = "hidden";		
			previous.style.transition = "1s";
			previous.style.opacity = "1";
			previous.style.visibility = "visible";
		}
		
		
	}
	else {
		gameOver();
	}
	return false;
}

/* This function lets the user know the right or wrong answer. It also prevents the user from interacting with features after submission. */
let disableFix = document.getElementById("coverForm");
let disableFixSubmit = document.getElementById("coverSubmit");
let disableFixTimer = document.getElementById("coverGameTimer");

function clearAndDisable() {
	timerFill.style.transition = "2s";
	timerFill.style.backgroundColor = "#1BA832";
	timerFill.style.width = "190px";

	clearInterval(timer);
	disableFix.style.visibility = "visible";
	disableFixSubmit.style.visibility = "visible";
	
	if (choice1.value == "correct") {
		gameChoice2.style.transition = "1s";
		gameChoice2.style.opacity = "0.7";		
		gameChoice3.style.transition = "1s";
		gameChoice3.style.opacity = "0.7";		
		gameChoice4.style.transition = "1s";
		gameChoice4.style.opacity = "0.7";
	}
	
	if (choice2.value == "correct") {
		gameChoice1.style.transition = "1s";
		gameChoice1.style.opacity = "0.7";		
		gameChoice3.style.transition = "1s";
		gameChoice3.style.opacity = "0.7";		
		gameChoice4.style.transition = "1s";
		gameChoice4.style.opacity = "0.7";
	}	
	
	if (choice3.value == "correct") {
		gameChoice1.style.transition = "1s";
		gameChoice1.style.opacity = "0.7";		
		gameChoice2.style.transition = "1s";
		gameChoice2.style.opacity = "0.7";		
		gameChoice4.style.transition = "1s";
		gameChoice4.style.opacity = "0.7";
	}	
	
	if (choice4.value == "correct") {
		gameChoice1.style.transition = "1s";
		gameChoice1.style.opacity = "0.7";		
		gameChoice2.style.transition = "1s";
		gameChoice2.style.opacity = "0.7";		
		gameChoice3.style.transition = "1s";
		gameChoice3.style.opacity = "0.7";
	}
}


/* This function is for when the user receives a game over. */
function gameOver(){
	gameInterface.style.transition = "3s";
	gameInterface.style.transitionDelay = "2s";
	gameInterface.style.opacity = "0.8";
	gameOverScreen.style.transition = "3s";
	gameOverScreen.style.transitionDelay = "2s";
	gameOverScreen.style.opacity = "1";
	gameOverScreen.style.visibility = "visible";
}

/* This function notifies the user if a level has been completed. */
function levelComplete() {
	gameInterface.style.transition = "3s";
	gameInterface.style.opacity = "0.8";
	levelCompleteScreen.style.transition = "3s";
	levelCompleteScreen.style.transitionDelay = "1s";
	levelCompleteScreen.style.opacity = "1";
	levelCompleteScreen.style.visibility = "visible";
	levelConfetti.style.transition = "3s";
	levelConfetti.style.opacity = "1";
	levelConfetti.style.visibility = "visible";
}

/*This function shows the user's final scores and congratulates them of their winnings. */		
function summaryCongrats() {
	gameInterface.style.transition = "1s";
	gameInterface.style.opacity = "0";
	gameInterface.style.visibility = "hidden";
	levelConfetti.style.transition = "1s";
	levelConfetti.style.opacity = "0";

	
	levelConfetti2.style.transition = "1s";
	levelConfetti2.style.opacity = "1";
	levelConfetti2.style.visibility = "visible";
	confettiHeader.style.transition = "1s";
	confettiHeader.style.opacity = "1";
	confettiHeader.style.visibility = "visible";
	confettiText.style.transition = "1s";
	confettiText.style.opacity = "1";
	confettiText.style.visibility = "visible";
	confettiButton1.style.transition = "1s";
	confettiButton1.style.opacity = "1";
	confettiButton1.style.visibility = "visible";
	confettiButton2.style.transition = "1s";
	confettiButton2.style.opacity = "1";
	confettiButton2.style.visibility = "visible";
}

