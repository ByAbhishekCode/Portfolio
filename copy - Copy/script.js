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
