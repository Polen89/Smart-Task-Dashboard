<?php

$index = intval($_POST['index'] ?? -1);

$tasks = file_exists('tasks.json')
    ? json_decode(file_get_contents('tasks.json'), true)
    : [];

if ($index >= 0 && $index < count($tasks)) {
    $tasks[$index]['done'] = !empty($tasks[$index]['done']) ? false : true;
    file_put_contents('tasks.json', json_encode($tasks));
}
