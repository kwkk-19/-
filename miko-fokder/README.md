<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Option Selection Example</title>
  
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }

        .options {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin: 10px 0;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Choose an Option</h1>
    
    <!-- オプションボタン -->
    <div class="options">
        <label>
            <input type="radio" name="option" value="Option 1"> Option 1
        </label>
        <label>
            <input type="radio" name="option" value="Option 2"> Option 2
        </label>
        <label>
            <input type="radio" name="option" value="Option 3"> Option 3
        </label>
    </div>
    
    <!-- ボタン -->
    <button onclick="showSelectedOption()">Show Selected Option</button>
    

    <script>
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
    </script>

</body>
</html>


