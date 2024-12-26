<?php
// Чтение входных данных (JSON)
$data = json_decode(file_get_contents("php://input"), true);

// Получаем данные из формы
$name = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$phone = htmlspecialchars($data['phone']) ?: 'Not provided';
$organization = htmlspecialchars($data['organization']) ?: 'Not provided';
$message = htmlspecialchars($data['message']) ?: 'No message';

// Проверка на обязательные поля
if (!empty($name) && !empty($email)) {
    // Настройка email
    $to = "your-email@example.com"; // Ваш email
    $subject = "New Contact Form Submission";
    $messageBody = "Name: $name\nEmail: $email\nPhone: $phone\nOrganization: $organization\nMessage: $message";
    $headers = "From: $email";

    // Отправка email
    if (mail($to, $subject, $messageBody, $headers)) {
        // Ответ серверу (успех)
        echo json_encode(['success' => true]);
    } else {
        // Ответ серверу (ошибка)
        echo json_encode(['success' => false]);
    }
} else {
    // Если обязательные поля пустые, отправляем ошибку
    echo json_encode(['success' => false]);
}
?>
