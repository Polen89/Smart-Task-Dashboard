<?php
$tasks = file_exists('tasks.json')
    ? json_decode(file_get_contents('tasks.json'), true)
    : [];
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Smart Task Dashboard</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<?php include __DIR__ . '/main.php' ?>

<script>
    window.TASKS = [];
    console.log("TASKS script running");
</script>
<script src="js/app.js"></script>
</body>
</html>