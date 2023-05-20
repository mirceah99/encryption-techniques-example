import { displayMatrixForText, displayMatrixOrderedByKey } from "./utils.js";
import { TEXT_INPUT, KEY_INPUT, APPLY_T_CYPRESS_BUTTON, T_CYPRESS_INT_MATRIX, T_CYPRESS_INT_MATRIX_KEY, T_CYPRESS_ENCRYPT_MATRIX_KEY, T_CYPRESS_ENCRYPT_MATRIX, } from "./htmlElements.js";
APPLY_T_CYPRESS_BUTTON.addEventListener("click", () => {
    const keyLength = KEY_INPUT.value.length;
    if (keyLength === 0) {
        alert("please insert key");
        return;
    }
    displayMatrixForText(TEXT_INPUT.value, T_CYPRESS_INT_MATRIX, [
        keyLength,
        undefined,
    ]);
    displayMatrixForText(`${KEY_INPUT.value}${TEXT_INPUT.value}`, T_CYPRESS_INT_MATRIX_KEY, [keyLength, undefined]);
    displayMatrixOrderedByKey(TEXT_INPUT.value, T_CYPRESS_ENCRYPT_MATRIX_KEY, KEY_INPUT.value, T_CYPRESS_ENCRYPT_MATRIX);
});
