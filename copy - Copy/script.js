function Menu(e) {
  let list = document.querySelector("ul");
  e.name == "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"));
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(this);
    emailjs.sendForm("service_c5uhh5w", "template_a4u22m3", this).then(
      function (result) {
        alert("Success!! Your query is generated in our system.");
        console.log(result.text);
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Error! Something went wrong.");
        console.log(error.text);
      }
    );
  });

  gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );

  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );


  window.addEventListener("load", () => {
    // 1. Add fade-out class after SVG drawing is done (e.g. after 2s)
    setTimeout(() => {
      document.getElementById("svg").classList.add("fade-out");
    }, 2000); // or match your draw animation duration

    // 2. Then hide the preloader and show main content after fade completes
    setTimeout(() => {
      document.querySelector(".loading-page").style.display = "none";
      const content = document.getElementById("main-content");
      content.classList.remove("hidden");
      document.body.classList.remove("hidden-scroll");
    }, 3000); // give 1s for fade-out to complete
  });
  