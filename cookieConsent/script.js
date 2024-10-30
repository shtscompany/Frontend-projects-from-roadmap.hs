document.addEventListener("DOMContentLoaded", function() {
    const consentPopup = document.getElementById("cookieConsent");
    const acceptButton = document.getElementById("acceptButton");
    const closeButton = document.getElementById("closeButton");

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsentAccepted", "true");
        consentPopup.style.display = "none";
    });

    closeButton.addEventListener("click", function() {
        consentPopup.style.display = "none";
    });
});
