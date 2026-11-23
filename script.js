// Локальное хранилище данных 
let users = JSON.parse(localStorage.getItem('users') || '[]');
let notifications = JSON.parse(localStorage.getItem('notifications') || '[]');

// Хранилище на время сессии
let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');

  // Тестовые данные
function initData() {
    if(users.length === 0) {
		// Данные первого студента
        users.push({
            id: 1,
            email: 'student1@campus.ru',
            password: '123456',
            full_name: 'Иван Петров',
            role: 'student',
            group: 'ИВТ-31',
            course_of_study: 3,
            faculty: 'Информационных технологий'
        });
		// Данные второго студента
		users.push({
            id: 2,
            email: 'student2@campus.ru',
            password: '654321',
            full_name: 'Пётр Иванов',
            role: 'student',
            group: 'ИВТ-31',
            course_of_study: 3,
            faculty: 'Информационных технологий'
        });
		// Данные первого руководителя
        users.push({
            id: 3,
            email: 'administrator1@campus.ru',
            password: '123456',
            full_name: 'Анна Смирнова',
            role: 'administrator'
        });
		// Данные второго руководителя
        users.push({
            id: 4,
            email: 'administrator2@campus.ru',
            password: '654321',
            full_name: 'Олег Дроздов',
            role: 'administrator'
        });
		// Сохранение в хранилище
        localStorage.setItem('users', JSON.stringify(users));
    }
		// Сохранение в хранилище
        localStorage.setItem('notifications', JSON.stringify(notifications));
}
initData();
  
  // Функция открытия модального окна входа
  function openLoginModal() {
    var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
    loginModal.show();
  }

  // Обработчик отправки формы входа 
  function handleLogin(event) {
    event.preventDefault();
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
    // Здесь должна быть логика аутентификации
    console.log('Попытка входа:', email, password);
    // Закрываем модальное окно
    var modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    // Сброс формы
    document.getElementById('loginForm').reset();
  }

  // Заглушки для демонстрации работы навигации
  function showNotifications() { console.log('Уведомления'); }
  function logout() { console.log('Выход'); }
