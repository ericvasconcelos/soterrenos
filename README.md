# 🌍 Soterrenos Frontend

Frontend for the **Soterrenos** project, built with **React 19**, **Vite**, and **TypeScript**. The system includes integration with **React Query**, form management using **React Hook Form + Yup**, testing with **Jest**, and component documentation through **Storybook**.

---

## 🚀 Technologies Used

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Docker](https://www.docker.com/)
- [Radix UI](https://www.radix-ui.com/)

---

## 📦 Installation

```bash
# Install dependencies
yarn install
```

---

## 🧪 Running Tests

```bash
# Run all tests
yarn test

# Run in watch mode
yarn test:watch

# Generate coverage
yarn coverage
```

---

## 🖥️ Local Development

```bash
# Start the dev server
yarn dev
```

---

## 📘 Storybook

```bash
# Start Storybook in dev mode
yarn storybook
```

---

## 🛠️ Production Build

```bash
yarn build
```

---

## 🐳 Docker

### Build image

```bash
yarn docker:build
```

### Run container

```bash
yarn docker:run
```

The app will be available on port **8080** using `nginx`.

---

## 🌐 Nginx

The `nginx.conf` setup includes:

- SPA redirect (`try_files $uri $uri/ /index.html`)
- GZIP compression
- Security headers

---

## 🧾 Useful Scripts

| Script         | Description                                |
| -------------- | ------------------------------------------ |
| `dev`          | Start Vite in dev mode                     |
| `build`        | Compile the project with TypeScript + Vite |
| `preview`      | Preview the production build               |
| `test`         | Run tests using Jest                       |
| `lint`         | Run ESLint                                 |
| `format`       | Check formatting with Prettier             |
| `format:fix`   | Fix formatting with Prettier               |
| `check-types`  | Check TS types without emitting files      |
| `storybook`    | Start Storybook                            |
| `docker:build` | Build Docker image                         |
| `docker:run`   | Run Docker container locally               |

---

## 📝 License

This project is licensed under the **MIT** License.

---

## 📫 Contact

If you have any questions or suggestions, feel free to reach out to the project maintainer.
