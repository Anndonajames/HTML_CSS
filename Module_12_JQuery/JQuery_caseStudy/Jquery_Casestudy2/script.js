$(function() {
    alert("cjsdk");
    $("#fname_error_message").hide();

    var error_fname = false;
    var error_sname = false;
    var error_password = false;
    var error_retype_password = false;
    var error_email = false;
    $("#form_name").focusout(function() {
        check_fname();

    });
    $("#form_sname").focusout(function() {
        check_sname();

    });
    $("#form_password").focusout(function() {
        check_password();
    });
    $("#form_retype_password").focusout(function() {
        check_retype_password();
    });
    $("#form_email").focusout(function() {
        check_email();
    });

});



function check_fname() {
    //alert("cjsdk");
    var fname_length = $("#form_name").val().length;

    if (fname_length < 5 || fname_length > 20) {
        $("#fname_error_message").html("Should be between 5-20 characters");
        $("#fname_error_message").show();

        error_fname = true;
    } else {
        $("#fname_error_message").hide();
    }
}

function check_sname() {
    //alert("cjsdk");
    var sname_length = $("#form_sname").val().length;

    if (sname_length < 5 || sname_length > 20) {
        $("#sname_error_message").html("Should be between 5-20 characters");
        $("#sname_error_message").show();

        error_sname = true;
    } else {
        $("#sname_error_message").hide();
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
    var password2 = $("#form_retype_password").val();

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
// $(document).ready(function() {
//     $("#icon").click(function() {
//         if ($(this).hasClass("fa-lock")) {
//             $(this).removeClass("fa-lock");
//             $(this).addClass("fa-unlock-alt");
//             $("#form-password").prop("type", "text");
//         } else {
//             $(this).removeClass("fa-unlock-alt");
//             $(this).addClass("fa-lock");
//             $("#form-password").prop("type", "password");
//         }
//     });
// });

// $("#reset").click(function() {

//     var form = $(this).closest('form');
//     form.find("input[type=text],[input type=text],[input type=email],[input type=password],[input type=password]").val("");
//     return false;
// });
$("#registration_form").submit(function() {
    error_fname = false;
    error_sname = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;
    check_fname();
    check_sname();
    check_email();
    check_password();
    check_retype_password();
    if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
        alert("Registration Successfull");
        return true;
    } else {
        alert("Please Fill the form Correctly");
        return false;
    }
});