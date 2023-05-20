function textToMatrix(text, [columns, rows] = [
    undefined,
    undefined,
], autofill = true) {
    let columnsNr = 0, rowsNr = 0;
    if (columns === 0 && rows === 0)
        throw `columns and rows can't be 0`;
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
    const totalCharacters = columnsNr * rowsNr;
    if (autofill) {
        text += randomString(totalCharacters - text.length);
    }
    const matrix = [];
    for (let i = 0; i < rowsNr; i++) {
        matrix.push(text.substring(i, i + columnsNr).split(""));
    }
    return matrix;
}
function randomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
export function displayMatrixForText(text) {
    console.log(textToMatrix(text));
}
