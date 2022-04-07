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

form.addEventListener('submit', (e) => {
	e.preventDefault();
	inputs.forEach((input) => {
		// console.log(input.value);
		if (!input.value) {
			input.parentElement.classList.add('error');
		} else {
			input.parentElement.classList.remove('error');
			if (input.type == 'email') {
				if (validateEmail(input.value)) {
					input.parentElement.classList.remove('error');
				} else {
					input.parentElement.classList.add('error');
				}
			}
		}
	});
	logIn();
});

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

function getUserData(email){
	var docRef = db.collection("Users").doc(email);

	docRef.get().then((doc) => {
		if (doc.exists) {
			console.log("Document data:", doc.data());
			var first_name = data.first_name;
			localStorage.setItem("first_name", first_name);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch((error) => {
		console.log("Error getting document:", error);
	});
}

function logIn(){
	console.log("logIn called");
	// first_name= document.getElementById('first-name').value;
	// last_name= document.getElementById('last-name').value;
	email= document.getElementById('Email').value;
	password= document.getElementById('password').value;

	if(validateEmail(email) == false || validatePassword(password) ==false){
		alert("Email or Password in wrong format");
		
		return;
	}

	firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    //var user = userCredential.user;
	console.log("Log In success");
	getUserData(email);
	window.location.href ='../quiz guide page/quizGuide.html';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
	alert(errorMessage);
	console.log(errorCode);
  });
}