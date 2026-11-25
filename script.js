// ---------- Данные ----------
let users = JSON.parse(localStorage.getItem('users') || '[]');
let topics = JSON.parse(localStorage.getItem('topics') || '[]');
let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');

// ---------- Тестовые пользователи ----------
function initData() {
  const seedUsers = [
    { id: 1, email: 'student1@campus.ru', password: '123456', full_name: 'Иван Петров', role: 'student', group: 'ИВТ-31', course_of_study: 3, faculty: 'Информационные технологии' },
    { id: 2, email: 'student2@campus.ru', password: '654321', full_name: 'Пётр Иванов', role: 'student', group: 'ИВТ-31', course_of_study: 3, faculty: 'Информационные технологии' },
    { id: 3, email: 'student3@campus.ru', password: '567890', full_name: 'Мария Кузнецова', role: 'student', group: 'ЭК-22', course_of_study: 3, faculty: 'Экономический' },
    { id: 4, email: 'student4@campus.ru', password: '098765', full_name: 'Дмитрий Соколов', role: 'student', group: 'ЭК-22', course_of_study: 3, faculty: 'Экономический' },
    { id: 5, email: 'administrator1@campus.ru', password: '345678', full_name: 'Анна Смирнова', role: 'administrator' },
    { id: 6, email: 'administrator2@campus.ru', password: '876543', full_name: 'Олег Дроздов', role: 'administrator' }
  ];
	const seedTopics = [
    // --- Информационные технологии ---
    {
      id: 1,
      title: 'Разработка веб-приложения для учёта студенческих проектов',
      description: 'Создание платформы для публикации и курирования ВКР студентов с ролевой моделью доступа.',
      program: 1, // 09.03.04 Программная инженерия
      faculty: 'Информационные технологии',
      supervisor: 'Анна Смирнова',
      supervisor_id: 5,
      status: 'open',
      student_id: null
    },
    {
      id: 2,
      title: 'Проектирование микросервисной архитектуры для вузовского портала',
      description: 'Исследование и реализация прототипа портала на основе микросервисов и API Gateway.',
      program: 2, // 09.03.03 Прикладная информатика
      faculty: 'Информационные технологии',
      supervisor: 'Олег Дроздов',
      supervisor_id: 6,
      status: 'open',
      student_id: null
    },
    {
      id: 3,
      title: 'Анализ уязвимостей веб-приложений и методы их устранения',
      description: 'Обзор OWASP Top 10, практические сценарии тестирования и рекомендации по защите.',
      program: 3, // 10.03.01 Информационная безопасность
      faculty: 'Информационные технологии',
      supervisor: 'Анна Смирнова',
      supervisor_id: 5,
      status: 'open',
      student_id: null
    },
    {
      id: 4,
      title: 'Разработка мобильного приложения для расписания занятий',
      description: 'Кроссплатформенное приложение с синхронизацией расписания и push-уведомлениями.',
      program: 1, // 09.03.04 Программная инженерия
      faculty: 'Информационные технологии',
      supervisor: 'Олег Дроздов',
      supervisor_id: 6,
      status: 'open',
      student_id: null
    },
    {
      id: 5,
      title: 'Применение машинного обучения для анализа успеваемости студентов',
      description: 'Построение моделей прогнозирования академических рисков на основе исторических данных.',
      program: 2, // 09.03.03 Прикладная информатика
      faculty: 'Информационные технологии',
      supervisor: 'Анна Смирнова',
      supervisor_id: 5,
      status: 'open',
      student_id: null
    },

    // --- Экономический ---
    {
      id: 6,
      title: 'Оценка эффективности инвестиционных проектов предприятия',
      description: 'Методика расчёта NPV, IRR и срока окупаемости на примере реального кейса.',
      program: 4, // 38.03.01 Экономика
      faculty: 'Экономический',
      supervisor: 'Олег Дроздов',
      supervisor_id: 6,
      status: 'open',
      student_id: null
    },
    {
      id: 7,
      title: 'Разработка стратегии продвижения образовательных услуг вуза',
      description: 'Анализ рынка, сегментация аудитории и план маркетинговых мероприятий.',
      program: 5, // 38.03.02 Менеджмент
      faculty: 'Экономический',
      supervisor: 'Анна Смирнова',
      supervisor_id: 5,
      status: 'open',
      student_id: null
    },
    {
      id: 8,
      title: 'Цифровизация бизнес-процессов малого предприятия',
      description: 'Выбор и внедрение информационной системы, оценка экономического эффекта.',
      program: 6, // 38.03.05 Бизнес-информатика
      faculty: 'Экономический',
      supervisor: 'Олег Дроздов',
      supervisor_id: 6,
      status: 'open',
      student_id: null
    },
    {
      id: 9,
      title: 'Анализ финансовой устойчивости коммерческой организации',
      description: 'Расчёт коэффициентов ликвидности и платёжеспособности, выводы и рекомендации.',
      program: 4, // 38.03.01 Экономика
      faculty: 'Экономический',
      supervisor: 'Анна Смирнова',
      supervisor_id: 5,
      status: 'open',
      student_id: null
    },
    {
      id: 10,
      title: 'Управление проектами внедрения ERP-систем на предприятии',
      description: 'Обзор методологий внедрения, риски и план проекта на примере ERP-решения.',
      program: 6, // 38.03.05 Бизнес-информатика
      faculty: 'Экономический',
      supervisor: 'Олег Дроздов',
      supervisor_id: 6,
      status: 'open',
      student_id: null
    }
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

// ---------- Экранирование HTML ----------
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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

// ---------- Профиль ----------
function showUserProfile() {
    if (!currentUser) return;

    const profileContent = document.getElementById('profileContent');

    const roleLabel = currentUser.role === 'student' ? 'Студент' : 'Руководитель';
    const roleClass = currentUser.role === 'student' ? 'bg-primary' : 'bg-success';

    let profileHtml = `
		<div class="text-center mb-3">
			<div class="profile-avatar">
				<i class="bi bi-person-fill"></i>
			</div>
			<h4>${escapeHtml(currentUser.full_name)}</h4>
			<span class="badge ${roleClass}">${roleLabel}</span>
		</div>
		<hr>
		<table class="table table-borderless profile-table">
			<tr><td><i class="bi bi-envelope-fill text-primary"></i> <strong>Email:</strong></td><td>${escapeHtml(currentUser.email)}</td></tr>
			<tr><td><i class="bi bi-person-badge-fill text-primary"></i> <strong>ФИО:</strong></td><td>${escapeHtml(currentUser.full_name)}</td></tr>
		`;

    if (currentUser.role === 'student') {
        profileHtml += `
            <tr><td><i class="bi bi-people-fill text-primary"></i> <strong>Группа:</strong></td><td>${escapeHtml(currentUser.group || 'Не указана')}</td></tr>
            <tr><td><i class="bi bi-calendar-fill text-primary"></i> <strong>Курс:</strong></td><td>${currentUser.course_of_study || 'Не указан'}</td></tr>
            <tr><td><i class="bi bi-building-fill text-primary"></i> <strong>Факультет:</strong></td><td>${escapeHtml(currentUser.faculty || 'Не указан')}</td></tr>
        `;
    }

    profileHtml += `<tr><td colspan="2"><hr></td></tr>
        <tr><td><i class="bi bi-calendar-date-fill text-primary"></i> <strong>ID пользователя:</strong></td><td><small class="text-muted">${currentUser.id}</small></td></tr>
     </table>`;

    profileContent.innerHTML = profileHtml;
    bootstrap.Modal.getOrCreateInstance(document.getElementById('profileModal')).show();
}

// ---------- Клик по имени пользователя ----------
document.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.getElementById('userInfo');
  if (userInfo) {
    userInfo.style.cursor = 'pointer';
    userInfo.addEventListener('click', (e) => {
      e.preventDefault();
      showUserProfile();
    });
  }
});

// ---------- Старт ----------
initData();
updateUI();
showTopics();
