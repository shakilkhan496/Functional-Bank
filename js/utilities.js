//Function -1>> getInputValue
function getInputValue(inputFieldId) {
    const getInputFieldValueString = document.getElementById(inputFieldId);
    const inputFieldValueString = getInputFieldValueString.value;

    const inputFieldValue = parseFloat(inputFieldValueString);

    if (isNaN(inputFieldValue)) {
        alert('Please enter valid amount');
        return
    }
    getInputFieldValueString.value = '';
    return inputFieldValue;
}
//Function -2>> getElementText

function getElementText(elementId) {
    const getElementTextString = document.getElementById(elementId);
    const elementTextString = getElementTextString.innerText;
    const elementText = parseFloat(elementTextString);
    if (isNaN(elementText)) {
        alert('Please enter valid amount');
        return
    }

    return elementText;
}

//Function -3 >> Set to element
function setElement(elementId, newValue) {
    const getElement = document.getElementById(elementId);
    getElement.innerText = newValue;

}
