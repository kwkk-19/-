<!DOCTYPE html>
<html lang="ja">
<head>
 <meta charset="UTF-8">
 <link rel="stylesheet" href="#">
</head>

<body>
 <p>こんにちは</p>
</body>
</html>


<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ダイアログボタンの例</title>
</head>
<body>

    <button id="openDialog">ダイアログを開く</button>

    <dialog id="myDialog">
        <p>これはダイアログの内容です</p>
        <button id="closeDialog">閉じる</button>
    </dialog>

    <script>
        // ボタンとダイアログ要素を取得
        const openDialogButton = document.getElementById('openDialog');
        const closeDialogButton = document.getElementById('closeDialog');
        const dialog = document.getElementById('myDialog');

        // ダイアログを開く
        openDialogButton.addEventListener('click', () => {
            dialog.showModal();
        });

        // ダイアログを閉じる
        closeDialogButton.addEventListener('click', () => {
            dialog.close();
        });
    </script>
</body>
</html>



