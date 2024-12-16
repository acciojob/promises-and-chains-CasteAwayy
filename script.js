const form = document.querySelector(".form");

const wait = function (age) {
  return new Promise(function (resolve, reject) {
    if (age > 18) setTimeout(resolve, 4000);
    setTimeout(reject, 4000);
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const age = formData.get("age");
  const name = formData.get("name");
  wait(age)
    .then(() => {
      alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
      alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
