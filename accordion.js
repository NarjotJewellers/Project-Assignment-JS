"use strict";

$(document).ready(() => {
    $(".accordion_item h3").click(function() {
        $(this).next(".accordion_content").slideToggle();
    });
});