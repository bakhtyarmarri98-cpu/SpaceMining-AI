// JavaScript Code for App Logic
document.addEventListener("DOMContentLoaded", function() {
    console.log("Apna Bazar Layout Loaded Successfully!");

    // Button par click karne ka action
    const actionButton = document.querySelector("button");
    if (actionButton) {
        actionButton.addEventListener("click", function() {
            alert("Button kaam kar raha hai! Agla feature jald hi add hoga.");
        });
    }
});
