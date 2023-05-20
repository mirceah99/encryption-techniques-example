const TEXT_INPUT = document.querySelector(
  "#text-to-encrypt"
) as HTMLTextAreaElement;
const KEY_INPUT = document.querySelector("#key") as HTMLTextAreaElement;
const APPLY_T_CYPRESS_BUTTON = document.querySelector(
  "#apply-transposition-ciphers"
) as HTMLButtonElement;
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
export {
  TEXT_INPUT,
  KEY_INPUT,
  APPLY_T_CYPRESS_BUTTON,
  T_CYPRESS_INT_MATRIX,
  T_CYPRESS_INT_MATRIX_KEY,
  T_CYPRESS_ENCRYPT_MATRIX_KEY,
  T_CYPRESS_ENCRYPT_MATRIX,
};
