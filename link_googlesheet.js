const scriptURL =
"https://script.google.com/macros/s/AKfycbzon019UYvQfF6Tzzru3ArMkWeM68SvQJjVnuzn9ll-lUvONUIu_gcsW8FNxmHylhs5/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) });
msg.innerHTML = "Message sent successfully!";
setTimeout(function () {
  msg.innerHTML = "";
}, 5000);
form.reset();
});

form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => console.log("Success!", response))
  .catch((error) => console.error("Error!", error.message));
});