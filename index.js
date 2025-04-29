const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={}[]|:;<>.?/";
function getRandomCharacters(length) {
  return Array.from(
    { length },
    () => characters[Math.floor(Math.random() * characters.length)]
  );
}

const PASSWORD_LENGTH = 9;
const passwordElements = {
  one: document.getElementById("password-one"),
  two: document.getElementById("password-two"),
};

function randomizePassword() {
  const randomPasswordOne = getRandomCharacters(PASSWORD_LENGTH).join("");
  const randomPasswordTwo = getRandomCharacters(PASSWORD_LENGTH).join("");

  passwordElements.one.innerText = randomPasswordOne;
  passwordElements.two.innerText = randomPasswordTwo;
}

function copyPassword(password) {
  const tempInput = document.createElement("input");
  tempInput.value = password;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

function copyPasswordOne() {
  const passwordOne = passwordElements.one.innerText;
  copyPassword(passwordOne);
  alert("Password One copied to clipboard!");
}

function copyPasswordTwo() {
  const passwordTwo = passwordElements.two.innerText;
  copyPassword(passwordTwo);
  alert("Password Two copied to clipboard!");
}
