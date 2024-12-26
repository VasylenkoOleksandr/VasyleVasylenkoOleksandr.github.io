// Инициализация EmailJS
(function() {
    // emailjs.init('ox9_c_FHOvzXcimTx'); // Ваш ID пользователя, полученный в EmailJS
    emailjs.init({
        publicKey: 'ox9_c_FHOvzXcimTx',
    });
})();

// Отправка данных формы
document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value || 'Not provided';
    const organization = document.getElementById('organization').value || 'Not provided';
    const message = document.getElementById('message').value || 'No message';
    console.log(name, email, phone, organization, message);

    // Проверка на обязательные поля
    if (!name || !email) {
        document.getElementById('response-message').textContent = 'Please fill out all required fields.';
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
            document.getElementById('response-message').textContent = 'Thank you for your message!';
        }, function(error) {
            document.getElementById('response-message').textContent = 'There was an error sending your message.';
            console.error('Error:', error);
        });
});
