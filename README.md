# Лабораторно-практична робота №2
Ця бібліотека демонструє базові можливості TypeScript: типи, інтерфейси, класи та generics. Вона включає функції для роботи з числами, рядками, логуванням та приклади підключення змінних оточення через .env. Бібліотека призначена для навчальних цілей і показує, як організувати проект із семантичним версіонуванням та перевіркою коду через ESLint, Prettier та Husky.Ця бібліотека демонструє базові можливості TypeScript: типи, інтерфейси, класи та generics. Вона включає функції для роботи з числами, рядками, логуванням та приклади підключення змінних оточення через .env. Бібліотека призначена для навчальних цілей і показує, як організувати проект із семантичним версіонуванням та перевіркою коду через ESLint, Prettier та Husky.

## Інструкції з запуску

- Встановіть залежності: npm i

- Запустіть приклади використання: npm run demo

- Створіть збірку бібліотеки: npm run build

### Огляд кроків еволюції: 
- 0.1.0 - прості функції з any
- 0.2.0 - ті самі функції з базовими типами (сумісність збережено)
- 0.3.0 - додано нову функцію зі складним типом (сумісність збережено)
- 0.4.0 - додано інтерфейси та groupBy<T> (сумісність збережено)
- 0.5.0 - додано клас Logger, підключення .env та валідація через Zod formatNumber бере точність з APP_PRECISION (сумісність збережено)
- 1.0.0 - стабілізація API, експорти, посилений ESLint збірка CJS/ESM з .d.ts
- 2.0.0 - breaking change: зміна сигнатури add на прийом масиву чисел number[] демонстрація виправлення викликів у demo.ts

### Приклади використання функцій (add, capitalize, formatNumber, groupBy, Logger).
```
import { add, capitalize, formatNumber, groupBy, Logger, type LogLevel } from './index.js'
import { config } from './config.js'

console.log('sum:', add([2, 3, 4]))
console.log('capitalize:', capitalize('hello'))
console.log('formatNumber:', formatNumber(123.456))

const logger = new Logger(config.LOG_LEVEL as LogLevel)
logger.info('Application started')
logger.debug('Extra debug info')

--- add ---
console.log('sum(2,3,4):', add([2, 3, 4]))
Результат: 9

--- capitalize ---
console.log('capitalize("hello"):', capitalize('hello'))
Результат: 'Hello'

--- formatNumber ---
console.log('formatNumber(123.456):', formatNumber(123.456))
Результат: 123.456 (precision береться з APP_PRECISION у .env)

--- groupBy(з 4 версії) ---
const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
console.log('group ok:', groupBy(users, 'name'));
Результат:
{
 Alice: [{ id: 1, name: 'Alice' }],
 Bob: [{ id: 2, name: 'Bob' }]
}

- --- Logger ---
const logger = new Logger(config.LOG_LEVEL as LogLevel)
logger.info('Application started')
Результат: [INFO] Application started
logger.debug('Extra debug info')
Результат: [DEBUG] Extra debug info (якщо рівень debug)
```

## Нотатка про `.env`

У файлі `.env` можна вказати такі ключі:

- `APP_PRECISION` - кількість десяткових знаків для `formatNumber` (0–10).  
  Наприклад: `APP_PRECISION=3` → `formatNumber(123.456)` поверне `'123.456'`.

- `LOG_LEVEL` - рівень логування для `Logger`:  
  - `silent` - нічого не виводить  
  - `info` - виводить тільки INFO  
  - `debug` - виводить INFO і DEBUG  

Файл `.env` не додається до репозиторію (`.gitignore`) і за потреби можна змінювати значення.  

**Приклад який зараз у нас:**
```
APP_PRECISION=3
LOG_LEVEL=debug
```
## Посилання на теги релізів

Бібліотека має теги релізів у GitHub, що відповідають версіям:  

- [v0.1.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v0.1.0) - прості функції з `any`  
- [v0.2.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v0.2.0) - ті самі функції з базовими типами  
- [v0.3.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v0.3.0) - нова функція зі складним типом 
- [v0.4.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v0.4.0) - інтерфейси та `groupBy`  
- [v0.5.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v0.5.0) - клас `Logger` і `.env`  
- [v1.0.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v1.0.0) - стабілізація API і збірка CJS/ESM  
- [v2.0.0](https://github.com/ShinjiST/lab2-typescript/releases/tag/v2.0.0) - зміна сигнатури `add` на масив чисел  

# Перевірка коду
На фінальному стані всі перевірки проходять успішно:
### Typecheck
npm run typecheck
```
> lab2-typescript@2.0.0 typecheck
> tsc --noEmit
```
### Lint
npm run lint
```
> lab2-typescript@2.0.0 lint
> eslint . --ext .ts
```
### Format Check
npm run format:check
```
> lab2-typescript@2.0.0 format:check
> prettier --check .

Checking formatting...
All matched files use Prettier code style!
```
## Висновок
Проєкт налаштований коректно: код відповідає стандартам TypeScript, ESLint і Prettier, всі перевірки успішно проходять. Це демонструє правильну організацію бібліотеки, контроль якості коду та готовність до подальшого розвитку і релізів.
