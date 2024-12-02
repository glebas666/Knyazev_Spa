const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Разрешаем CORS
app.use(express.json()); // Для парсинга JSON данных

// Обработка POST-запроса на /register
app.post('/register', (req, res) => {
    const { name, phone, email } = req.body;
    console.log('Данные пользователя:', { name, phone, email });

    // Возвращаем ответ клиенту
    res.status(200).send('Регистрация прошла успешно!');
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
