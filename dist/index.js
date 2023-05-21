import { decrypt, displayMatrixForText, displayMatrixOrderedByKey, displayResult, replaceCharacters, } from "./utils.js";
import { TEXT_ENCRYPT, TEXT_DECRYPT, KEY_INPUT, ENCRYPT, DECRYPT, T_CYPRESS_INT_MATRIX, T_CYPRESS_INT_MATRIX_KEY, T_CYPRESS_ENCRYPT_MATRIX_KEY, T_CYPRESS_ENCRYPT_MATRIX, RESULT, METHOD, METHOD_1, } from "./htmlElements.js";
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
    let result = "calculating result...";
    if (METHOD.value === "1") {
        displayMatrixForText(TEXT_ENCRYPT.value, T_CYPRESS_INT_MATRIX, [
            keyLength,
            undefined,
        ]);
        displayMatrixForText(`${KEY_INPUT.value}${TEXT_ENCRYPT.value}`, T_CYPRESS_INT_MATRIX_KEY, [keyLength, undefined]);
        result = displayMatrixOrderedByKey(TEXT_ENCRYPT.value, T_CYPRESS_ENCRYPT_MATRIX_KEY, KEY_INPUT.value, T_CYPRESS_ENCRYPT_MATRIX);
    }
    if (METHOD.value === "2") {
        result = replaceCharacters(getMapping(), TEXT_ENCRYPT.value);
    }
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
    let result = "calculating result...";
    if (METHOD.value === "1") {
        result = decrypt(TEXT_DECRYPT.value, KEY_INPUT.value);
    }
    if (METHOD.value === "2") {
        result = replaceCharacters(getMapping(), TEXT_DECRYPT.value, true);
    }
    displayResult(result, RESULT);
});
METHOD.addEventListener("change", () => {
    const value = METHOD.value;
    if (value === "1") {
        METHOD_1.hidden = false;
        KEY_INPUT.value = "cheie-secreta-exemplu";
        KEY_INPUT.setAttribute("rows", "2");
    }
    if (value === "2") {
        METHOD_1.hidden = true;
        KEY_INPUT.value = JSON.stringify(mappingDefault, null, 2);
        KEY_INPUT.setAttribute("rows", "10");
    }
});
function getMapping() {
    let mapping = {};
    try {
        mapping = JSON.parse(KEY_INPUT.value);
    }
    catch (e) {
        alert(e);
    }
    return mapping;
}
const mappingDefault = {
    a: "q",
    b: "w",
    c: "e",
    d: "r",
    e: "t",
    f: "y",
    g: "u",
    h: "i",
    i: "o",
    j: "p",
    k: "a",
    l: "s",
    m: "d",
    n: "f",
    o: "g",
    p: "h",
    q: "j",
    r: "k",
    s: "l",
    t: "z",
    u: "x",
    v: "c",
    w: "v",
    x: "b",
    y: "n",
    z: "m",
    " ": "ԁ",
};
