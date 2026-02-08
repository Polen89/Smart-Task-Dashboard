<?php

$data = json_decode(file_get_contents('php://input'), true);

$tasks = file_exists('tasks.json')
    ? json_decode(file_get_contents('tasks.json'), true)
    : [];

$newTask = [
    'text' => $data['text'],
    'done' => false
];

$tasks[] = $newTask;
file_put_contents('tasks.json', json_encode($tasks));

header('Content-Type: application/json');
echo json_encode($newTask);
