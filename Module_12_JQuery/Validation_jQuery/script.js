$(function() {
    $("#username_error_message").hide();
    $("#password_error_message").hide();
    $("#retype_password_error_message").hide();
    $("#email_error_message").hide();
    var error_username = false;
    var error_password = false;
    var error_retype_password = false;
    var error_email = false;
    $("#form_username").focusout(function() {
        check_username();

    });
    $("#form_password").focusout(function() {
        check_password();
    });
    $("#form_re_password").focusout(function() {
        check_retype_password();
    });
    $("#form_email").focusout(function() {
        check_email();
    });

});



function check_username() {

    var username_length = $("#form_username").val().length;

    if (username_length < 5 || username_length > 20) {
        $("#username_error_message").html("Should be between 5-20 characters");
        $("#username_error_message").show();
        error_username = true;
    } else {
        $("#username_error_message").hide();
    }
}

function check_password() {

    var password_length = $("#form_password").val().length;

    if (password_length < 5) {
        $("#password_error_message").html("Password length should be more than 5 ");
        $("#password_error_message").show();
        error_password = true;
    } else {
        $("#password_error_message").hide();
    }
}

function check_retype_password() {

    var password1 = $("#form_password").val();
    var password2 = $("#form_re_password").val();

    if (password1 != password2) {
        $("#retype_password_error_message").html("Password not matching");
        $("#retype_password_error_message").show();
        error_retype_password = true;
    } else
        $("#retype_password_error_message").hide();

}

function check_email() {
    var pattern = new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i);
    if (pattern.test($("#form_email").val())) {

        $("#email_error_message").hide();

    } else {
        $("#email_error_message").html("Invalid email Adress");
        $("#email_error_message").show();
        error_email = true;

    }
}