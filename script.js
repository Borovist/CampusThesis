  // Функция открытия модального окна входа
  function openLoginModal() {
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
  }

  // Обработчик отправки формы входа (демонстрационный)
  function handleLogin(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    // Здесь должна быть логика аутентификации
    console.log('Попытка входа:', email, password);
    alert('Вход выполнен (демо). Email: ' + email);
    // Закрываем модальное окно
    var modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    // Сброс формы
    document.getElementById('loginForm').reset();
  }

  // Заглушки для демонстрации работы навигации
  function showVacancies() { console.log('Показать вакансии'); }
  function showMyApplications() { console.log('Мои заявки'); }
  function showFavorites() { console.log('Избранное'); }
  function showNotifications() { console.log('Уведомления'); }
  function showMyVacancies() { console.log('Мои вакансии'); }
  function logout() { console.log('Выход'); }