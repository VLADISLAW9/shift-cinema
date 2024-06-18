## Проект

Макет и API данного проекта взята с [ШИФТ SUMMER ИНТЕНСИВА](https://omniscient-honeydew-f15.notion.site/90eef6b45a7843158d5731a1d4fd2440) компании ЦФТ. 


## Запуск проекта

```
npm install - устанавливаем зависимости
npm run dev - Запуск проекта 
```

---

## Скрипты

-   `npm run dev` - Запуск frontend проекта в dev режиме
-   `npm run build` - Сборка frontend приложения
-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером
-   `npm run prettier` - Исправление ts, tsx, json файлов форматером Prettier
-   `npm run test:unit` - Запуск unit тестов с jest
-   `npm run storybook` - запуск Storybook
-   `npm run storybook:build` - Сборка storybook билда
-   `npm run prepare` - прекоммит хуки

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Тесты

В проекте используются 3 вида тестов:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library -`npm run test:unit`
4. e2e тестирование с Cypress `npm run test:e2e`

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров

-   `npm run lint:ts` - Проверка ts файлов линтером
-   `npm run lint:ts:fix` - Исправление ts файлов линтером
-   `npm run lint:scss` - Проверка scss файлов style линтером
-   `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

-   `npm run storybook`

---

## pre commit хуки

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью zustand.

Пример: 

```typescript jsx
import { create } from 'zustand';
import type { User } from '../types/user';

export interface UserState {
  user?: Partial<User>;
  isLoggedIn: boolean;
}

export interface UserActions {
  initUser: (user: User) => void;
  setUserData: (user: Omit<User, 'id'>) => void;
  clearUser: () => void;
}

const initialState: UserState = {
  user: undefined,
  isLoggedIn: false
};

export const useUserStore = create<UserState & UserActions>((set) => ({
  ...initialState,

  initUser: (user) => {
    set({ user });
    set({ isLoggedIn: true });
  },

  setUserData: (newUserData) => {
    set(({ user }) => ({ user: { id: user?.id, ...newUserData } }));
  },

  clearUser: () => {
    set(initialState);
  }
}));
```


Запросы на сервер отправляются с помощью [TanStackQuery](/src/shared/api/api.ts)

Пример: 

```typescript jsx
import { useQuery } from '@tanstack/react-query';
import { $api } from '@/shared/api/api';
import { USER_LOCALSTORAGE_KEY } from '@/shared/consts/localstorage';
import type { Response } from '@/shared/types/response';
import type { User } from '../model/types/user';

interface InitAuthDataResponseSchema extends Response {
  user: User;
}

export const useInitAuthDataQuery = () =>
  useQuery({
    queryKey: ['initAuthData'],
    queryFn: async () => {
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (!token) {
        throw new Error('token not found');
      }

      const response = await $api.get<InitAuthDataResponseSchema>('/users/session');

      return response.data;
    }
  });

```

---