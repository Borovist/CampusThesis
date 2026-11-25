// ---------- Данные ----------
let users = JSON.parse(localStorage.getItem('users') || '[]');
let topics = JSON.parse(localStorage.getItem('topics') || '[]');
let currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');

// ---------- Тестовые данные ----------
function initData() {
	// Пользователи
  const seedUsers = [
    { id: 1, email: 'student1@campus.ru', password: '123456', full_name: 'Иван Петров', role: 'student', group: 'ИВТ-31', course_of_study: 3, faculty: 'Информационные технологии' },
    { id: 2, email: 'student2@campus.ru', password: '654321', full_name: 'Пётр Иванов', role: 'student', group: 'ИВТ-31', course_of_study: 3, faculty: 'Информационные технологии' },
    { id: 3, email: 'student3@campus.ru', password: '567890', full_name: 'Мария Кузнецова', role: 'student', group: 'ЭК-22', course_of_study: 3, faculty: 'Экономический' },
    { id: 4, email: 'student4@campus.ru', password: '098765', full_name: 'Дмитрий Соколов', role: 'student', group: 'ЭК-22', course_of_study: 3, faculty: 'Экономический' },
    { id: 5, email: 'supervisor1@campus.ru', password: '345678', full_name: 'Анна Смирнова', role: 'supervisor' },
    { id: 6, email: 'supervisor2@campus.ru', password: '876543', full_name: 'Олег Дроздов', role: 'supervisor' }
  ];
	  // Темы ВКР 
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

  let topicsChanged = false;
  seedTopics.forEach(seed => {
    if (!topics.some(t => t.id === seed.id)) {
      topics.push(seed);
      topicsChanged = true;
    }
  });
  if (topicsChanged) localStorage.setItem('topics', JSON.stringify(topics));
	
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

    const container = document.getElementById('profileContent');
    const template  = document.getElementById('profileTemplate');
    if (!container || !template) return;

    const isStudent = currentUser.role === 'student';

    // Клонируем шаблон
    const node = template.content.cloneNode(true);
    const $ = (field) => node.querySelector(`[data-field="${field}"]`);

    // Заголовок и роль
    $('fullName').textContent = currentUser.full_name;
    const roleEl = $('role');
    roleEl.textContent = isStudent ? 'Студент' : 'Руководитель';
    roleEl.classList.add(isStudent ? 'bg-primary' : 'bg-success');

    // Общие поля
    $('email').textContent  = currentUser.email;
    $('userId').textContent = currentUser.id;

    // Поля только для студента
    if (isStudent) {
        $('group').textContent   = currentUser.group || 'Не указана';
        $('course').textContent  = currentUser.course_of_study || 'Не указан';
        $('faculty').textContent = currentUser.faculty || 'Не указан';
    } else {
        $('groupRow').style.display   = 'none';
        $('courseRow').style.display  = 'none';
        $('facultyRow').style.display = 'none';
    }

    // Рендер
    container.innerHTML = '';
    container.appendChild(node);
    bootstrap.Modal.getOrCreateInstance(document.getElementById('profileModal')).show();
}

// ---------- Открытие профиля ----------
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

// ---------- Темы ВКР ----------
function showTopics() {
    const container = document.getElementById('topics');
    const template  = document.getElementById('topicCardTemplate');
    if (!container || !template) return;

    const searchTerm   = (document.getElementById('search')?.value || '').trim().toLowerCase();
    const programValue = document.getElementById('program')?.value || '';
    const statusValue  = document.getElementById('status')?.value || '';

    let filtered = [...topics];

    // Поиск по названию или описанию
    if (searchTerm) {
        filtered = filtered.filter(t =>
            t.title.toLowerCase().includes(searchTerm) ||
            t.description.toLowerCase().includes(searchTerm)
        );
    }

    // Фильтр по направлению подготовки
    if (programValue) {
        filtered = filtered.filter(t => String(t.program) === String(programValue));
    }

    // Фильтр по статусу
    if (statusValue) {
        filtered = filtered.filter(t => t.status === statusValue);
    }

    container.innerHTML = '';

    // Пустой результат
    if (filtered.length === 0) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-info text-center">Тем не найдено</div></div>';
        return;
    }

    // Рендер каждой карточки из шаблона
    filtered.forEach(topic => {
        const isOpen  = topic.status === 'open';
        const canTake = currentUser && currentUser.role === 'student' && isOpen;

        // Клонируем содержимое шаблона
        const node = template.content.cloneNode(true);

        // Хелпер для поиска элемента по data-field внутри клона
        const $ = (field) => node.querySelector(`[data-field="${field}"]`);

        // Заполняем текстовые поля (textContent экранирует HTML автоматически)
        $('title').textContent       = topic.title;
        $('description').textContent = topic.description;
        $('supervisor').textContent  = topic.supervisor;
        $('faculty').textContent     = topic.faculty;

        // Статус
        const statusEl = $('status');
        statusEl.textContent = isOpen ? 'Свободна' : 'Занята';
        statusEl.classList.add(isOpen ? 'bg-success' : 'bg-secondary');

        // Студент, занявший тему
        if (topic.student_id) {
            const s = users.find(u => u.id === topic.student_id);
            if (s) {
                $('student').textContent = s.full_name;
                $('studentRow').style.display = '';
            }
        }

        // Кнопка «Занять тему»
        const btn = $('takeButton');
        if (canTake) {
            btn.style.display = '';
            btn.addEventListener('click', () => takeTopic(topic.id));
        }

        container.appendChild(node);
    });
}

// ---------- Занять тему ----------
function takeTopic(topicId) {
    if (!currentUser || currentUser.role !== 'student') return;

    const topic = topics.find(t => t.id === topicId);
    if (!topic || topic.status !== 'open') {
        showNotification('Тема уже занята', 'danger');
        return;
    }

    topic.status = 'taken';
    topic.student_id = currentUser.id;
    localStorage.setItem('topics', JSON.stringify(topics));

    showNotification('Тема успешно занята!');
    showTopics();
}

// ---------- Привязка фильтров ----------
document.getElementById('applyFilters')?.addEventListener('click', showTopics);
document.getElementById('search')?.addEventListener('input', showTopics);
document.getElementById('program')?.addEventListener('change', showTopics);
document.getElementById('status')?.addEventListener('change', showTopics);


// ---------- Старт ----------
initData();
updateUI();
showTopics();
