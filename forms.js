"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const $ = selector => document.querySelector(selector);

    $("#contact_form").addEventListener("submit", evt => {
        let isValid = true;

        const name = $("#name").value;
        const email = $("#email").value;
        const message = $("#message").value;

        if (name == "") {
            $("#name_error").textContent = "This field is required.";
            isValid = false;
        } else {
            $("#name_error").textContent = "";
        }

        if (email == "") {
            $("#email_error").textContent = "This field is required.";
            isValid = false;
        } else {
            $("#email_error").textContent = "";
        }

        if (message == "") {
            $("#message_error").textContent = "This field is required.";
            isValid = false;
        } else {
            $("#message_error").textContent = "";
        }

        if (!isValid) {
            evt.preventDefault();
        }
    });
});