const express = require('express');
const cors = require('cors'); // Для разрешения CORS
const path = require('path'); // Для работы с путями

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешаем CORS
app.use(cors());

// Для парсинга JSON данных
app.use(express.json());

// Обслуживание статических файлов из текущей директории
app.use(express.static(__dirname));

// Обработка GET-запроса на главную страницу
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

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
