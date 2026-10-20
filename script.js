
document.addEventListener("DOMContentLoaded", function () {

    // 1. Welcome message
    const welcomeBtn = document.getElementById("welcomeBtn");
    const welcomeMessage = document.getElementById("welcomeMessage");

    welcomeBtn.addEventListener("click", function () {
        welcomeMessage.hidden = false;
        alert("Welcome to my personal portfolio!");
    });

    // 2. Dark and light mode
    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });

    // 3. Show and hide additional information
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreAbout = document.getElementById("moreAbout");

    readMoreBtn.addEventListener("click", function () {
        moreAbout.hidden = !moreAbout.hidden;

        readMoreBtn.textContent = moreAbout.hidden
            ? "Read More"
            : "Read Less";
    });

    // 4. Contact information alert
    const contactBtn = document.getElementById("contactBtn");
    const contactMessage = document.getElementById("contactMessage");

    contactBtn.addEventListener("click", function () {
        contactMessage.hidden = false;
        alert("You can find my contact details in this section.");
    });

    // 5. Display current date and time
    const clock = document.createElement("p");
    clock.id = "currentDateTime";
    clock.style.textAlign = "center";
    clock.style.padding = "10px";
    clock.style.color = "var(--muted)";

    document.querySelector("footer").prepend(clock);

    function updateDateTime() {
        clock.textContent =
            "Current Date and Time: " +
            new Date().toLocaleString();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // 6. Back-to-top button
    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", function () {
        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 7. Automatically update copyright year
    document.getElementById("year").textContent =
        new Date().getFullYear();

});