let email = document.querySelector("#email");
let fullName = document.querySelector("#fullName");
let loginPassword = document.querySelector("#loginPassword");
let passwordConfirm = document.querySelector("#passwordConfirm");
let btn = document.querySelector(".btn");
let signUpArea = document.querySelector(".signUpArea");
let smallErrors = document.querySelectorAll(".error");




//check empty validation
const checkEmpty = () => {
    let isEmpty = false;
    smallErrors.forEach(small => {
        small.style.visibility = 'hidden';
    });

    if (fullName.value.trim() === '') {
        smallErrors[0].style.visibility = 'visible';
        isEmpty = true;
    }
    if (email.value.trim() === '') {
        smallErrors[1].style.visibility = 'visible';
        isEmpty = true;
    }
    if (loginPassword.value.trim() === '') {
        smallErrors[2].style.visibility = 'visible';
        isEmpty = true;
    }
    if (passwordConfirm.value.trim() === '') {
        smallErrors[3].style.visibility = 'visible';
        isEmpty = true;
    }

    return isEmpty;
};


// checkPasswordMatch
const checkPasswordMatch = () => {
    if (loginPassword.value !== passwordConfirm.value) {
        smallErrors[3].style.visibility = 'visible';
        return false;
    }
    return true;
};

//checkPasswordLength

const checkPasswordLength = () => {
    if (loginPassword.value.length < 8) {
        smallErrors[2].textContent = 'Password must be at least 8 characters long';
        smallErrors[2].style.visibility = 'visible';
        return false;
    }
    return true;
};

// checkEmailLength
const checkEmailLength = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
        smallErrors[1].textContent = 'Email must be a valid email address';
        smallErrors[1].style.visibility = 'visible';
        return false;
    }
    return true;
};


function getDataStorage(){
    const dataStorage = localStorage.getItem("dataStorage");
    return dataStorage? JSON.parse(dataStorage):[];
}

function addPostToLocalStorage(storage){
    const dataStorage = getDataStorage();
    dataStorage.push(storage);
    localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
}


btn.addEventListener('click', function(e){
    e.preventDefault();

    if (checkEmpty() || !checkEmailLength() || !checkPasswordLength() ||!checkPasswordMatch()  ) {
        return;
    }else{
        const signUpValue = {
            name: fullName.value,
            email: email.value,
            loginPassword: loginPassword.value,
        }
        addPostToLocalStorage(signUpValue);
        window.location.href = 'index.html';
    fullName.value = "";
    email.value = "";
    loginPassword.value = "";
    passwordConfirm.value = "";
    }
    
})