import { displayMatrixForText } from "./utils.js";
const textToEncryptInput = document.querySelector("#text-to-encrypt");
const keyInput = document.querySelector("#key");
const applyCypress = document.querySelector("#apply-transposition-ciphers");
applyCypress.addEventListener("click", () => {
    displayMatrixForText(textToEncryptInput.value);
});
