// ---------- Данные ----------
let users = JSON.parse(localStorage.getItem('users') || '[]');
let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');

// ---------- Тестовые пользователи ----------
function initData() {
  const seedUsers = [
    { id: 1, email: 'student1@campus.ru', password: '123456', full_name: 'Иван Петров', role: 'student', group: 'ИВТ-31', course_of_study: 3, faculty: 'Информационные технологии' },
    { id: 2, email: 'student2@campus.ru', password: '654321', full_name: 'Пётр Иванов', role: 'student', group: 'ИВТ-31', course_of_study: 3, faculty: 'Информационные технологии' },
    { id: 3, email: 'administrator1@campus.ru', password: '123456', full_name: 'Анна Смирнова', role: 'administrator' },
    { id: 4, email: 'administrator2@campus.ru', password: '654321', full_name: 'Олег Дроздов', role: 'administrator' }
  ];

  let changed = false;
  seedUsers.forEach(seed => {
    if (!users.some(u => u.email.toLowerCase() === seed.email.toLowerCase())) {
      users.push(seed);
      changed = true;
    }
  });
  if (changed) localStorage.setItem('users', JSON.stringify(users));
}

// ---------- Модальное окно входа ----------
function openLoginModal() {
  bootstrap.Modal.getOrCreateInstance(document.getElementById('loginModal')).show();
}

// ---------- Авторизация и выход ----------
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showNotification('Заполните все поля', 'danger');
    return;
  }

  const user = users.find(u => u.email.toLowerCase() === email && u.password === password);
  if (!user) {
    showNotification('Неверные данные', 'danger');
    return;
  }

  currentUser = { ...user, password: undefined };
  sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

  showNotification(`Добро пожаловать, ${user.full_name}!`);
  updateUI();

  bootstrap.Modal.getInstance(document.getElementById('loginModal'))?.hide();
  document.getElementById('loginForm').reset();
}
function logout() {
  currentUser = null;
  sessionStorage.removeItem('currentUser');
  updateUI();
  showNotification('Вы вышли из системы');
}

// ---------- Тост-уведомления ----------
function showNotification(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'app-toast';
  if (type === 'danger') toast.classList.add('app-toast--danger');
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('app-toast--hide');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ---------- Обновление UI ----------
function updateUI() {
  const show = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.style.display = val;
  };

  if (currentUser) {
    show('authButtons', 'none');
    show('logoutBtn', 'block');
    show('userInfo', 'block');
    show('notificationsNav', 'block');

    const userName = document.getElementById('userName');
    if (userName) userName.textContent = currentUser.full_name;
  } else {
    show('authButtons', 'block');
    show('logoutBtn', 'none');
    show('userInfo', 'none');
    show('notificationsNav', 'none');
  }
}

// ---------- Старт ----------
initData();
updateUI();
