function textToMatrix(
  text: string,
  [columns, rows]: [number | undefined, number | undefined] = [
    undefined,
    undefined,
  ],
  autofill = true
) {
  let columnsNr: number = columns || 0,
    rowsNr = rows || 0;
  console.log(`columns ${columns}, rows ${rows}`);
  if (columns === 0 && rows === 0) throw `columns and rows can't be 0`;
  if (columns === undefined && rows === undefined) {
    let square = Math.ceil(Math.sqrt(text.length));
    columnsNr = square;
    rowsNr = square;
  }
  if (rows === undefined && columns !== undefined) {
    rowsNr = Math.ceil(text.length / columns);
  }
  if (columns === undefined && rows !== undefined) {
    columnsNr = Math.ceil(text.length / rows);
  }
  console.log(`columnsNr: ${columnsNr} rowsNr: ${rowsNr}`);
  const totalCharacters = columnsNr * rowsNr;
  if (autofill) {
    text += randomString(totalCharacters - text.length);
  }
  const matrix = [];
  for (let i = 0; i < rowsNr; i++) {
    matrix.push(
      text.substring(i * columnsNr, i * columnsNr + columnsNr).split("")
    );
  }
  return matrix;
}

function randomString(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function displayMatrixForText(
  text: string,
  placeHolder: HTMLElement,
  size: [number | undefined, number | undefined] = [undefined, undefined]
) {
  const array = textToMatrix(text, size);
  displayMatrix(array, placeHolder);
}
function displayMatrix(array: string[][], paceHolder: HTMLElement) {
  const table = document.createElement("table");
  for (const arrayRow of array) {
    const row = table.insertRow();
    for (const elem of arrayRow) {
      let cell = row.insertCell();
      cell.innerHTML = elem.toString();
    }
  }
  const title = paceHolder.getAttribute("title");
  paceHolder.innerHTML = title ? `<h3>${title}</h3>` : "";
  paceHolder.appendChild(table);
}
export function displayMatrixOrderedByKey(
  text: string,
  placeHolderKey: HTMLElement,
  key: string,
  placeHolderNoKey: HTMLElement
) {
  const normalMatrix = textToMatrix(`${key}${text}`, [key.length, undefined]);
  console.log(normalMatrix);
  const encryptedMatrix = sortColumnsByFirstRow(normalMatrix);
  displayMatrix(encryptedMatrix, placeHolderKey);
  encryptedMatrix.shift();
  displayMatrix(encryptedMatrix, placeHolderNoKey);
  return convertArrayToString(encryptedMatrix);
}
export function displayResult(result: string, placeHolder: HTMLElement) {
  placeHolder.innerHTML = `
    <h2>Result:</h2>
    <p id="result-value">${result.replaceAll(" ", "&nbsp;")}</p>
    <button id="copy-me">Copy</button>
    `;
  const button = document.querySelector("#copy-me") as HTMLButtonElement;
  button.addEventListener("click", () => {
    const resultValue = (
      document.querySelector("#result-value") as HTMLElement
    ).innerHTML.replaceAll("&nbsp;", " ");
    navigator.clipboard.writeText(resultValue);
  });
}

function sortWithIndexes(toSort: string[]) {
  var len = toSort.length;
  var indexes = new Array(len);
  for (var i = 0; i < len; ++i) indexes[i] = i;
  indexes.sort(function (a, b) {
    return toSort[a] < toSort[b] ? -1 : toSort[a] > toSort[b] ? 1 : 0;
  });
  return indexes;
}

function convertArrayToString(arr: string[][]) {
  return arr.map((row) => row.join("")).join("");
}

function sortColumnsByFirstRow(arr: string[][]): string[][] {
  const columnCount = arr[0].length;
  const columnIndices = Array.from({ length: columnCount }, (_, i) => i);

  columnIndices.sort((a, b) => {
    const valueA = arr[0][a];
    const valueB = arr[0][b];
    return valueA.localeCompare(valueB);
  });

  const sortedArr = arr.map((row) => columnIndices.map((index) => row[index]));

  return sortedArr;
}

export function decrypt(text: string, key: string) {
  const orderedIndex = sortWithIndexes(key.split(""));
  const matrix = textToMatrix(text, [key.length, undefined]);
  console.log(orderedIndex);
  console.log(matrix);
  const decryptedMatrix = sortColumnsByIndices(matrix, orderedIndex);
  console.log(decryptedMatrix);
  return convertArrayToString(decryptedMatrix);
}
function sortColumnsByIndices(matrix: string[][], indices: number[]) {
  const sortedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < indices.length; j++) {
      row[indices[j]] = matrix[i][j];
    }
    sortedMatrix.push(row);
  }
  return sortedMatrix;
}

export function replaceCharacters(
  mapping: { [key: string]: string },
  text: string,
  revers = false
) {
  let myMapping = { ...mapping };
  if (revers) {
    myMapping = reverseObjectKeysAndValues(mapping);
  }
  let result = "";
  for (const x of text) {
    result += myMapping[x] || x;
    console.log(result);
  }
  return result;
}

function reverseObjectKeysAndValues(
  obj: Record<string, any>
): Record<any, string> {
  const reversedObj: Record<any, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    reversedObj[value] = key;
  }

  return reversedObj;
}
