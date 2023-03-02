function saveData(field, key) {
    localStorage.setItem(key, field.value);
}

function loadData(field, key, defaultValue) {
    if (localStorage.getItem(key)) {
        field.value = localStorage.getItem(key);
    } else {
        field.value = defaultValue;
    }
}

export { saveData, loadData };