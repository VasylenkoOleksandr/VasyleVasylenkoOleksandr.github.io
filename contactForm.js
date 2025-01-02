// Инициализация EmailJS
(function() {
    emailjs.init({
        publicKey: 'ox9_c_FHOvzXcimTx',
    });
})();

// Отправка данных формы
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'Not provided';
    const organization = document.getElementById('organization').value || 'Not provided';
    const message = document.getElementById('message').value || 'No message';
    const responseMessage = document.getElementById('response-message');
    const submitBtn = document.getElementById('submit-btn');

    // Проверка на обязательные поля
    if (!name || !email) {
        responseMessage.textContent = 'Please fill out all required fields.';
        responseMessage.style.display = 'block'; // Показываем сообщение
        setTimeout(() => {
            responseMessage.style.display = 'none'; // Скрываем сообщение через 3 секунды
        }, 3000);
        return;
    }

    // Отправка данных через EmailJS
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        organization: organization,
        message: message
    };

    emailjs.send('service_oqyez5d', 'template_memt3a6', templateParams)
        .then(function(response) {
            responseMessage.textContent = 'Thank you for your message!';
            responseMessage.style.color = '#0b8b70'; // Успешное сообщение
            responseMessage.style.display = 'flex'; // Показываем сообщение
            submitBtn.style.display = 'none';
            setTimeout(() => {
                responseMessage.style.display = 'none'; // Скрываем сообщение через 3 секунды
                submitBtn.style.display = 'block';
            }, 3000);
        }, function(error) {
            responseMessage.textContent = 'There was an error sending your message!';
            responseMessage.style.color = '#e74c3c'; // Сообщение об ошибке
            responseMessage.style.display = 'block'; // Показываем сообщение
            setTimeout(() => {
                responseMessage.style.display = 'none'; // Скрываем сообщение через 3 секунды
            }, 3000);
            console.error('Error:', error);
        });
});
