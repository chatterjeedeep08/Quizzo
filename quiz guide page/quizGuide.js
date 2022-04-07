const fname = localStorage.getItem('first_name');
console.log(fname);

_user = document.getElementById("user");
_user.innerHTML += `<h1>Hello ${fname}!</h1>`;