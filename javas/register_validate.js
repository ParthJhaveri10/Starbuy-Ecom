function register_validate()
{
    var user_name = document.getElementById("username");
    
    var password_1 = document.getElementById("password_1");

    var password_2 = document.getElementById("password_2");

    var email_valid = document.getElementById("email");

    var pass_1 = password_1.value;
    var pass_2 = password_2.value;

    if(is_username(user_name , "Please Enter a Proper Username!")){
    if(is_password_1(password_1 , "Please Enter a Valid Password")){
    
    if(is_email_valid(email_valid , "Please Enter a Valid Email")){
    if(pass_1 != pass_2){
        alert("Please Enter the Same Password as the Previous One");
        return false;
    }
    else{
        return true;
    }
    }    
    }    
    }
    return false;

    
    
}


// function not_empty(element , helper_message){
//     if(element.value == ""){
//         alert(helper_message);
//         element.focus();
//         return false;
//     }
//     return true;
// }

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

function is_password_1(element , helper_message)
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


function is_email_valid(element , helper_message){
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

// function is_password_2(element , helper_message){
//     var pass_2 = /^([a-zA-Z0-9@*#]{8,15})$/;
//     if(element.value.match(pass_2)){
//         return true;
//     }
//     else
//     {
//         alert(helper_message);
//         element.focus();
//         return false;
//     }
// }


