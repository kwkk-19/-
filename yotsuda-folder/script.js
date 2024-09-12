function submitChoice() {
    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }

    if (selectedColor) {
        alert(`選択した色は: ${selectedColor}`);
    } else {
        alert('色を選んでください。');
    }
}
