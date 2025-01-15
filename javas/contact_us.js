function contact_validate()
{
    var user_name = document.getElementById("username");

    var email = document.getElementById("email");

    var message = document.getElementById("text_area");

    var mobile_number = document.getElementById("phone");

    if(is_username(user_name , "Please Fill out Your Entire Name!")){
    if(is_email(email , "Please Enter a Valid Email")){
    if(is_textarea(message , "Please Don't Leave the Message Field Empty")){
    if(is_mobile(mobile_number , "Please Enter a Valid Mobile Number!")){
        return true;
    } 
    }
    }
    }
    return false;
}


function not_empty(element , helper_message){
    if(element.value == ""){
        alert(helper_message);
        element.focus();
        return false;
    }
    return true;
}

function is_username(element , helper_message)
{
    var alpha_expression =  /^[a-zA-Z]+( [a-zA-Z]+)+$/;
    if(element.value.match(alpha_expression))
    {
        return true;
    }
    else
    {
        alert(helper_message);
        element.focus();
        return false;
    }
}

function is_email(element , helper_message){
    var email_expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(element.value.match(email_expression)){
        return true;
    }
    else
    {
        alert(helper_message);
        element.focus();
        return false;
    }
}

function is_textarea(element , helper_message)
{
    if(element.value == "")
    {
        alert(helper_message);
        return false;
    }
    else
    {
        return true;
    }
}

function is_mobile(element , helper_message)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((element.value.match(phoneno)))
        {
            return true;
        }
      else
        {
            alert(helper_message);
            return false;
        }
}


