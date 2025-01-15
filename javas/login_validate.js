function login_validate()
{
    var user_name = document.getElementById("username");

    var password = document.getElementById("pass_word");



    if(is_username(user_name , "Please Enter the Username you have Registered With!")){
    if(is_password(password , "Please Enter Your Registered Password!")){
        return true;     
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

function is_password(element , helper_message)
{
    var pass = /^([a-zA-Z0-9@*#]{8,15})$/;
    if(element.value.match(pass)){
        return true;
    }
    else
    {
        alert(helper_message);
        element.focus();
        return false;
    }
}