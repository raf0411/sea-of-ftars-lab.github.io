const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => 
{
  if(window.pageYOffset > 100)
  {
    toTop.classList.add("active");
  }
  else
  {
    toTop.classList.remove("active");
  }
})

function showError(errorElement, errorMessage){
  document.querySelector("."+errorElement).classList.add("display-error");
  document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError()
{
  let errors = document.querySelectorAll(".error");

  for(let error of errors)
  {
    error.classList.remove("display-error");
  }
}

let form = document.forms['register-form'];

function validateForm(event)
{

  var checkbox = document.getElementById("checkbox").checked
  var country = document.getElementById("country").value

  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("phone").value

  clearError();

  if(form.username.value == "")
  {
    showError("username-error", "You have to enter an username!");
    return false;
  }

  if(form.password.value == "")
  {
    showError("password-error", "You have to enter a password!");
    return false;
  }

  if(!checkPass(password))
  {
    showError("password-error", "Password must be at least 8 characters!");
    return false;
  }

  if(form.email.value == "")
  {
    showError("email-error", "You have to enter your email!");
    return false;
  }

  if(!email.endsWith("@gmail.com"))
  {
    showError("email-error", "You need to enter either @gmail.com, @yahoo.com, or @outlook.com emails!");
    return false;
  }

  if(form.phone.value == "")
  {
    showError("phone-error", "You have to enter your phone number!");
    return false;
  }

  if(phone.charAt(0) != '0')
  {
    showError("phone-error", "Phone number must begin with '0' !");
    return false;
  }

  if(country == "0")
  {
    showError("country-error", "You have to enter a country!");
    return false;
  }

  if(!checkbox)
  {
    showError("check-error", "You have to agree with the terms and conditions agreement!");
    return false;
  }

  alert("SUCCESSFULLY REGISTERED!")
  homePage()

  document.querySelectorAll(".success").classList.add("display-success");
  document.querySelector(".success").innerHTML = "Your registration was successful";

  event.preventDefault();
}

function checkPass(password)
{
  if(password.length < 8)
  {
    return false
  }

  var isNum = false
  var isAlpha = false

  for(var i = 0; i < password.length; i++)
  {
    if(isNaN(password[i]))
    {
      isAlpha = true
    }
    else
    {
      isNum = true
    }

    if(isAlpha && isNum)
    {
      return true
    }
  }

  return true
}

function homePage()
{
  window.location.href = "index.html"
}