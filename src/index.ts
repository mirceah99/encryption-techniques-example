import {
  decrypt,
  displayMatrixForText,
  displayMatrixOrderedByKey,
  displayResult,
} from "./utils.js";
import {
  TEXT_ENCRYPT,
  TEXT_DECRYPT,
  KEY_INPUT,
  ENCRYPT,
  DECRYPT,
  T_CYPRESS_INT_MATRIX,
  T_CYPRESS_INT_MATRIX_KEY,
  T_CYPRESS_ENCRYPT_MATRIX_KEY,
  T_CYPRESS_ENCRYPT_MATRIX,
  RESULT,
} from "./htmlElements.js";

ENCRYPT.addEventListener("click", () => {
  const keyLength = KEY_INPUT.value.length;
  if (keyLength === 0) {
    alert("please insert key");
    return;
  }
  if (TEXT_ENCRYPT.value.length === 0) {
    alert("please insert text to encrypt");
    return;
  }

  displayMatrixForText(TEXT_ENCRYPT.value, T_CYPRESS_INT_MATRIX, [
    keyLength,
    undefined,
  ]);
  displayMatrixForText(
    `${KEY_INPUT.value}${TEXT_ENCRYPT.value}`,
    T_CYPRESS_INT_MATRIX_KEY,
    [keyLength, undefined]
  );
  const result = displayMatrixOrderedByKey(
    TEXT_ENCRYPT.value,
    T_CYPRESS_ENCRYPT_MATRIX_KEY,
    KEY_INPUT.value,
    T_CYPRESS_ENCRYPT_MATRIX
  );
  displayResult(result, RESULT);
});
DECRYPT.addEventListener("click", () => {
  const keyLength = KEY_INPUT.value.length;

  if (keyLength === 0) {
    alert("please insert key");
    return;
  }
  if (TEXT_DECRYPT.value.length === 0) {
    alert("inset text do decrypt");
    return;
  }
  const decryptionResult = decrypt(TEXT_DECRYPT.value, KEY_INPUT.value);
  displayResult(decryptionResult, RESULT);
});
