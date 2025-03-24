Sure! Here's a shorter version of the `README.md`:

```markdown
# 🧩 Angular User Dashboard

A responsive user dashboard built with Angular and Bootstrap, showcasing component architecture, form handling, routing, and state management.

---

## Features

- Displays a list of users from local mock data
- Real-time search by name or email
- Delete user functionality (in-memory)
- View full user details on a separate route
- Add user form with real-time validation
- Counter with live updates via a shared service

---

## Tech Stack

- [Angular 17+](https://angular.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- TypeScript & HTML5
- RxJS

---

## 📁 Project Structure

```
src/app/
│
├── components/
│   ├── navbar/
│   ├── user-list/
│   ├── user-details/
│   ├── add-user/
│   └── counter/
│
├── services/
│   ├── user.service.ts
│   └── counter.service.ts
```

---

## How to Run

```bash
git clone https://github.com/WamuyuGitongaEMTH/user-dashboard.git
cd user-dashboard
npm install
ng serve
```

Open your browser at:
👉 `http://localhost:4200`

---

## Notes

- User data is fetched from `src/assets/mock-data/users.json`
- Deleting a user is temporary (in-memory)

---

## Future Improvements

- Connect to a real backend API
- Add user editing functionality
- Persist changes using local storage or a backend
- Add pagination to the dashboard table

---

> Built with care by Wamuyu Gitonga
```