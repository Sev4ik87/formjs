const body = document.createElement("body");
const mainCont = document.createElement("div");
mainCont.className = "main-cont";

const header = document.createElement("header");
const h1 = document.createElement("h1");
h1.textContent = "CREATE AN ACCOUNT";
const p = document.createElement("p");
p.textContent = "We always keep your name and email address private.";

const form = document.createElement("form");
const formCont = document.createElement("div");
formCont.id = "form-cont";

const outInputCont = document.createElement("div");
outInputCont.id = "out-input-cont";

const inInputCont1 = document.createElement("div");
inInputCont1.className = "in-input-cont";
const firstNameInput = document.createElement("input");
firstNameInput.type = "text";
firstNameInput.className = "input";
firstNameInput.placeholder = "First name";
firstNameInput.size = "28";
const lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.className = "input";
lastNameInput.placeholder = "Last name";
lastNameInput.size = "28";

inInputCont1.appendChild(firstNameInput);
inInputCont1.appendChild(lastNameInput);

const inInputCont2 = document.createElement("div");
inInputCont2.className = "in-input-cont";
const displayNameInput = document.createElement("input");
displayNameInput.type = "text";
displayNameInput.className = "input";
displayNameInput.placeholder = "Display name";
displayNameInput.size = "28";
const emailAddressInput = document.createElement("input");
emailAddressInput.type = "email";
emailAddressInput.className = "input";
emailAddressInput.placeholder = "Email Address";
emailAddressInput.size = "28";

inInputCont2.appendChild(displayNameInput);
inInputCont2.appendChild(emailAddressInput);

const inInputCont3 = document.createElement("div");
inInputCont3.className = "in-input-cont";
const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.className = "input";
passwordInput.placeholder = "Password";
passwordInput.size = "28";
const passConfInput = document.createElement("input");
passConfInput.type = "password";
passConfInput.className = "input";
passConfInput.placeholder = "Password Confirmation";
passConfInput.size = "28";

inInputCont3.appendChild(passwordInput);
inInputCont3.appendChild(passConfInput);

outInputCont.appendChild(inInputCont1);
outInputCont.appendChild(inInputCont2);
outInputCont.appendChild(inInputCont3);

const radioCont = document.createElement("div");
radioCont.id = "radio-cont";

const radioWrapper1 = document.createElement("div");
radioWrapper1.className = "radio-wrapper";
const radioInner1 = document.createElement("div");
radioInner1.className = "radio-inner";
const buyerRadio = document.createElement("input");
buyerRadio.type = "radio";
buyerRadio.name = "customer";
buyerRadio.id = "buyer";
const buyerLabel = document.createElement("label");
buyerLabel.htmlFor = "buyer";
buyerLabel.textContent = "Join As a Buyer";

const radioWrapper2 = document.createElement("div");
radioWrapper2.className = "radio-wrapper";
const radioInner2 = document.createElement("div");
radioInner2.className = "radio-inner";
const creatorRadio = document.createElement("input");
creatorRadio.type = "radio";
creatorRadio.name = "customer";
creatorRadio.id = "creator";
const creatorLabel = document.createElement("label");
creatorLabel.htmlFor = "creator";
creatorLabel.textContent = "Join As a Creative or Marketplace Seller";

const h5_1 = document.createElement("h5");
h5_1.textContent = "I am looking for a Name, Logo, or Tagline for my business.";

const h5_2 = document.createElement("h5");
h5_2.textContent = "I plan to submit name ideas, Logo designs in Domain Marketplace";

const checkCont = document.createElement("div");
checkCont.className = "check-cont";
const allowCheckbox = document.createElement("input");
allowCheckbox.type = "checkbox";
allowCheckbox.id = "allow";
const allowLabel = document.createElement("label");
allowLabel.htmlFor = "allow";
allowLabel.textContent = "Allow Squadhelp to send marketing/promotional offers";

const buttonCont = document.createElement("div");
buttonCont.id = "button-cont";
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.className = "button";
submitButton.textContent = "Create Account";

radioInner1.appendChild(buyerRadio);
radioInner1.appendChild(buyerLabel);
radioWrapper1.appendChild(radioInner1);
radioWrapper1.appendChild(h5_1);

radioInner2.appendChild(creatorRadio);
radioInner2.appendChild(creatorLabel);
radioWrapper2.appendChild(radioInner2);
radioWrapper2.appendChild(h5_2);

checkCont.appendChild(allowCheckbox);
checkCont.appendChild(allowLabel);

buttonCont.appendChild(submitButton);

radioCont.appendChild(radioWrapper1);
radioCont.appendChild(radioWrapper2);
radioCont.appendChild(checkCont);

formCont.appendChild(outInputCont);
formCont.appendChild(radioCont);
formCont.appendChild(buttonCont);

form.appendChild(formCont);

header.appendChild(h1);
header.appendChild(p);

mainCont.appendChild(header);
mainCont.appendChild(form);

body.appendChild(mainCont);

document.documentElement.appendChild(body);
