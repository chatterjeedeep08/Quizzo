// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBA65SYSXms26oFfZ1SoenAJv5AmSn6_RQ",
	authDomain: "quizzo-716e1.firebaseapp.com",
	projectId: "quizzo-716e1",
	storageBucket: "quizzo-716e1.appspot.com",
	messagingSenderId: "889297898254",
	appId: "1:889297898254:web:e2d230fabe20a0a695a55f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);

const auth =firebase.auth();
const database =firebase.database();


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
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	alert(re.test(String(email).toLowerCase()));

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
function signUp(){
	first_name= document.getElementById('first-name').value;
	last_name= document.getElementById('last-name').value;
	email= document.getElementById('email').value;
	password= document.getElementById('password').value;
}