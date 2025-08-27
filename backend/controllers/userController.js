// controllers/userController.js

// Здесь будет вся логика для регистрации пользователя
const registerUser = (req, res) => {
    // ... (логика сохранения пользователя в БД)
    res.send("User registered!");
};

// Экспортируем функцию, чтобы её можно было импортировать в других файлах
module.exports = {
    registerUser,
};