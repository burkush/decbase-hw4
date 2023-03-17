# Домашнє завдання №4

### Завдання:

Створити веб-сайт за макетом, використовуючи HTML, SCSS та JavaScript.

### Основні вимоги

- Сайт має бути адаптивним та кросбраузерним
- У проекті має бути використана методологія БЕМ
- Сторінка має бути валідною
- Обов’язкове використання CSS-препроцесорів
- В README файл додати опис реалізованого проекту
- Усі зміни й анімації мають відбуватися плавно
- Перед завантаженням сторінки має бути реалізована анімація завантаження сторінки
- Якщо користувач знаходиться 1 хвилину на сайті і нічого не робить, спитати чи він ще тут і якщо відповідь не буде отримана – закрити сторінку
- У довільному місці на сторінці додати взаємодію з публічним API

### Особливості реалізації

- Для секції "Our Services" дані беруться із локального JSON-файлу. Фільтрація відбувається за значенням поля **type**
- Слайдер реалізовано без використання сторонніх бібліотек. Він адаптується під різні розміри екрану, і в залежності від цього показує або один слайд, або два слайди одночасно
- У якості публічного API було обрано [**Art Institute of Chicago API**](https://api.artic.edu/docs/), який повертає інформацію про витвори мистецтва з Чиказького художнього інституту. Даний API не вимагає аутентифікації, а також має хорошу документацію
- Була використана методологія БЕМ, яка дозволяє використовувати компонентний підхід у розробці інтерфейсів та уникати повторень
- У якості CSS-співпроцесора було обрано SCSS, а структура файлів побудована у відповідності до **7-1 SASS Architecture**. Така архітектура дозволяє легко масштабувати проект, а також полегшує управління файлами стилів
- Сторінка валідна та адаптивна, були реалізовані всі вимоги до даного проекту, включно з валідацією форми та анімаціями
