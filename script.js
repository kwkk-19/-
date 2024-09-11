function showSelectedOption() {
    // ラジオボタンのリストを取得
    const options = document.getElementsByName('option');
    let selectedOption = '';

    // 選択されたオプションをチェック
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    // 選択されたオプションをダイアログボックスに表示
    if (selectedOption) {
        alert('You selected: ' + selectedOption);
    } else {
        alert('Please select an option.');
    }
}
