document.addEventListener("DOMContentLoaded", function () {
    const infoTypeSelect = document.getElementById("infoTypeSelect");
    const adultWelcome = document.getElementById("adultWelcome");
    const childrenWelcome = document.getElementById("childrenWelcome");

    // Event listener to show the appropriate welcome message
    infoTypeSelect.addEventListener("change", function () {
        if (this.value === "adult") {
            adultWelcome.style.display = "block";
            childrenWelcome.style.display = "none";
        } else if (this.value === "children") {
            adultWelcome.style.display = "none";
            childrenWelcome.style.display = "block";
        } else {
            adultWelcome.style.display = "none";
            childrenWelcome.style.display = "none";
        }
    });
});
