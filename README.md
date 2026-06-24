# 🧪 Testing

Проект для валидации банковских карт с определением платёжной системы и проверкой номера по алгоритму Луна.

## 📋 Описание

Веб-приложение определяет платёжную систему (Visa, Mastercard, Мир и др.) по номеру карты и проверяет его корректность с помощью алгоритма Луна.

## 🛠 Технологический стек

- **Языки:** TypeScript, HTML, CSS
- **Сборка:** Webpack
- **Тестирование:** Jest
- **CI/CD:** Appveyor
- **Покрытие кода:** Istanbul (lcov)

## 🚀 Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/username/testing.git
cd testing

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Сборка для продакшена
npm run build

# Запуск тестов
npm test

# Просмотр покрытия кода
npm run coverage
```

## 💻 Примеры использования

```typescript
import { luhnCheck } from './src/app/luhnAlg';
import { getPaymentSystem } from './src/app/paymentSys';

// Проверка номера карты
const isValid = luhnCheck('4532015112830366'); // true

// Определение платёжной системы
const system = getPaymentSystem('4532015112830366'); // 'visa'
```

## 📁 Структура проекта

```
testing/
├── src/                    # Исходный код
│   ├── app/               # Основные модули
│   │   ├── app.ts         # Главный модуль
│   │   ├── domUtils.ts    # Работа с DOM
│   │   ├── luhnAlg.ts     # Алгоритм Луна
│   │   └── paymentSys.ts  # Определение платёжной системы
│   ├── images/            # Изображения платёжных систем
│   ├── __tests__/         # Тесты
│   ├── index.html         # HTML-шаблон
│   ├── index.ts           # Точка входа
│   └── styles.css         # Стили
├── __mocks__/             # Моки для тестов
├── coverage/              # Отчёты о покрытии
├── jest.config.js         # Конфигурация Jest
├── webpack.config.js      # Конфигурация Webpack
├── tsconfig.json          # Конфигурация TypeScript
├── babel.config.js        # Конфигурация Babel
└── package.json           # Зависимости и скрипты
```

## 📄 Лицензия

MIT