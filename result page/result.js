const firebaseConfig = {
	apiKey: "AIzaSyDjyl9cLRRLKOIc98tcwZeotQJPto79Ssw",
	authDomain: "quizzo-e5530.firebaseapp.com",
	databaseURL: "https://quizzo-e5530-default-rtdb.asia-southeast1.firebasedatabase.app/",
	projectId: "quizzo-e5530",
	storageBucket: "quizzo-e5530.appspot.com",
	messagingSenderId: "45527319469",
	appId: "1:45527319469:web:88e4fbd64cae415c3ad724"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.form-container input');
const score = localStorage.getItem('score');
const fname = localStorage.getItem('first_name');
const email = localStorage.getItem('email');
console.log(score);
_result = document.getElementById("result");

if(checkScore(email, score)){
	_result.innerHTML += `<h1>Congrats ${fname}!</h1>`;
	_result.innerHTML += `<p>You broke your highscore!</p>`;
	_result.innerHTML += `<p>Your new highscore is ${score}</p>`;
	updateHighscore(email, score);
}
else{
	_result.innerHTML += `<h1>Hey ${fname}!</h1>`;
	_result.innerHTML += `<p>Your score is ${score}</p>`;
}
_result.innerHTML += `<button onclick="restartQuiz()">Restart Quiz</button><br>`;
_result.innerHTML += `<button onclick="endQuiz()">End Quiz</button>`;


function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
function validatePassword(password){
	if(password <6){
		return false;
	}
	else{
		return true;
	}
}
function validateName(name){
	if(!name){
		return false;
	}
	else{
		return true;
	}
}

function restartQuiz(){
	window.location.href ='../quiz guide page/quizGuide.html';
}
function endQuiz(){
	window.location.href ='../landing page/index.html';
}

function checkScore(email, score){
	var docRef = db.collection("Users").doc(email);

	docRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			if(data.highscore>score){
				return false;
			}
			else{
				return true;
			}
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch((error) => {
		console.log("Error getting document:", error);
	});
}

function updateHighscore(email, score){
	var docRef = db.collection("Users").doc(email);

	docRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			db.collection("Users").doc(email).update({highscore:score});
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch((error) => {
		console.log("Error getting document:", error);
	});
}
