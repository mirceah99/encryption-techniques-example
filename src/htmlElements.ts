const TEXT_ENCRYPT = document.querySelector(
  "#text-to-encrypt"
) as HTMLTextAreaElement;
const TEXT_DECRYPT = document.querySelector(
  "#text-to-decrypt"
) as HTMLTextAreaElement;
const KEY_INPUT = document.querySelector("#key") as HTMLTextAreaElement;
const ENCRYPT = document.querySelector("#encrypt") as HTMLButtonElement;
const DECRYPT = document.querySelector("#decrypt") as HTMLButtonElement;
const METHOD_1 = document.querySelector("#method-1") as HTMLElement;
const T_CYPRESS_INT_MATRIX = document.querySelector(
  "#transposition-ciphers-initial-matrix"
) as HTMLElement;
const T_CYPRESS_INT_MATRIX_KEY = document.querySelector(
  "#transposition-ciphers-initial-matrix-with-key"
) as HTMLElement;
const T_CYPRESS_ENCRYPT_MATRIX_KEY = document.querySelector(
  "#transposition-ciphers-encrypted-matrix-with-key"
) as HTMLElement;
const T_CYPRESS_ENCRYPT_MATRIX = document.querySelector(
  "#transposition-ciphers-encrypted-matrix"
) as HTMLElement;
const RESULT = document.querySelector("#result") as HTMLElement;
const METHOD = document.querySelector("#method") as HTMLSelectElement;
export {
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
  METHOD,
  METHOD_1,
};
