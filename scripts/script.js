let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.indicator');

// Изменение слайда
function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateSlider();
}

// Установка слайда по индикатору
function setSlide(index) {
    currentIndex = index;
    updateSlider();
}

// Обновление слайдера
function updateSlider() {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Обновление индикаторов
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Функции для стрелок
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}


// Открытие боковой панели
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

// Закрытие боковой панели
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 20000);

// Функция для открытия модального окна
function openRegistrationModal() {
    document.getElementById('registrationModal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeRegistrationModal() {
    document.getElementById('registrationModal').style.display = 'none';
}


// Обработка отправки формы через fetch
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Останавливаем стандартное поведение формы (перезагрузку страницы)

    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value
    };

    // Отправка данных на сервер
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Преобразуем данные формы в JSON
    })
    .then(response => {
        if (response.ok) {
            alert('Регистрация успешна!');
            closeRegistrationModal(); // Закрываем модальное окно после успешной регистрации
        } else {
            alert('Ошибка регистрации.');
        }
    })
    .catch(error => {
        alert('Ошибка отправки данных!');
        console.error('Ошибка:', error);
    });
});




// Инициализация слайдера
updateSlider();

