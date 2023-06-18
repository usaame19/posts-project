let email = document.querySelector('#email');
let password = document.querySelector('#loginPassword');
let btn = document.querySelector('.btn');
let smallErrors = document.querySelectorAll('.error');


// check if email / password is empty 
// const checkEmpty = () => {
//     let isEmpty = false;
//     smallErrors.forEach(small => {
//         small.style.visibility = 'hidden';
//     });

//     if (email.value.trim() === '') {
//         smallErrors[0].style.visibility = 'visible';
//         isEmpty = true;
//     }
//     if (password.value.trim() === '') {
//         smallErrors[1].style.visibility = 'visible';
//         isEmpty = true;
//     }
//     return isEmpty;
// }


function getDataFromLocalStorage() {
    const data = localStorage.getItem("dataStorage");
    return data ? JSON.parse(data) : [];
  }
  
  // Check if user credentials match
  function getDataStorage(email, password) {
    const dataStorage = getDataFromLocalStorage();
    const user = dataStorage.find((item) => item.email === email && item.loginPassword === password);
    return user;
  }

// eventListener for btn Click
btn.addEventListener('click', function(event){
    event.preventDefault();
    if( password.value.length === '' && password.value.length === ''){
      return;
    } else{
        const emailValue = email.value;
        const passwordValue = loginPassword.value;
        const user = getDataStorage(emailValue, passwordValue);
        if (user) {
            window.location.href = 'addPost.html';
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: ' <h3> please enter valid Email/Password or <a href="signUp.html"> signUp</a></h3>'
            })
          }
          email.value = '';
          loginPassword = '';


    }
})