const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm pass');


function showError(input, message){
    const formControl = input.parentElement;
    formControl.className ="form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;

}
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ="form-control success";
    
}
  function checkRequired(inputArr){
      inputArr.forEach(function(input){
          if(input.value.trim() === ""){
              showError(input, `${getFieldName(input)} is required`);
          }else{
              showSuccess(input);
          }
      })
  }
  function getFieldName(input){
      return input.id.toUpperCase().charAt('0') + input.id.slice('1');
  }

  function checkLenght(input, min, max){
     if(input.value.length < min){
         showError(input, `${getFieldName(input)} must be at least ${min} characters`);
     }else if(input.value.length > max){
         showError(input, `${getFieldName(input)} must be less than ${max} characters`)
     }else{
         showSuccess(input);
     }
  }
  function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'password does not match');
    }else{
        showSuccess(input)
    }

  }


function  checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not Valid');
    }
}

    form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, confirmPass]);
    checkLenght(username, 3,13);
    checkLenght(password, 6,23);
    checkEmail(email);
    checkPasswords(password, confirmPass);
})