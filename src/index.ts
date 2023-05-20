import { displayMatrixForText } from "./utils.js";

const textToEncryptInput = document.querySelector(
  "#text-to-encrypt"
) as HTMLTextAreaElement;
const keyInput = document.querySelector("#key") as HTMLTextAreaElement;
const applyCypress = document.querySelector(
  "#apply-transposition-ciphers"
) as HTMLButtonElement;
applyCypress.addEventListener("click", () => {
  displayMatrixForText(textToEncryptInput.value);
});
