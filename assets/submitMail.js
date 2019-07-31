$(document).ready(function()
{
    $("#form").submit(function (event)
    {
        var email = $("#email").val();
        var message = $("#message").val();
        var emailV = $("#emailValid");
        var messV = $("#messageValid");

        emailV.empty();
        messV.empty();

        if(!(email.includes("@") && email.includes(".") && email.length > 7))
        {
            event.preventDefault();
            emailV.append("Email not valid!");
        }
        if(message.length < 10)
        {
            event.preventDefault();
            messV.append("Message is too short.")
        }
    }
)})