<h1 align="center">
  NLW Return 🚀
</h1>

## 🚀 Objective

Esse projeto foi desenvolvido na semana NLW Return, criamos uma aplicação web que conseguimos dar feedbacks sobre a utilização do site, com ela o usuário irá conseguir relatar um problema, uma ideia e outros, o usuário consegue tirar um print da sua tela para mandar junto com o seu feedback caso seja preciso. </br>
Com essa aplicação pude aprender diversos conceitos, do lado do frontend foram React, Tailwindcss e componentes. </br>
E no backend aprendemos conceitos como SOLID, Prisma, testes unitários e como é feito a construção de uma aplicação de ponta a ponta

This project was developed in the NLW Return week, we created a web application that we were able to give feedback on the use of the site, with it the user will be able to report a problem, an idea and others, the user can take a print of their screen to send it along with your feedback if needed. </br>
With this application I was able to learn several concepts, on the frontend side were React, Tailwindcss and components. </br>
And in the backend we learn concepts such as SOLID, Prism, unit tests and how to build an end-to-end application

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/pt-BR/)
- [Typescript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [Tailwindcss](https://tailwindcss.com/)

**Clone the project**

```bash
$ git clone https://github.com/DanielSilva33/Feedback-widget.git
```

**Start project**

```bash
# Run backend
$ cd server

# Install the dependencies
$ npm install

# Run migrate
$ npx prisma migrate dev

# To finish, run the api service
$ npm run dev

# Well done, project is started!
```

```bash
# Run frontend
$ cd web

# Install the dependencies
$ npm install

# To finish, run the api service
$ npm run dev

# Well done, project is started!
```

## env

Create a .env.local file in the frontend project root and add the following environment </br> `VITE_API_URL=http://localhost:3333`</br>
As for the backend we create the .env file in the project root for just the environment for the database or add the link to your database </br>
`DATABASE_URL="file:./dev.db"`

---

<p align="center">
  Made with 💜&nbsp; by <a href="https://www.linkedin.com/in/daniel-silva-1a3209196/">Daniel Silva</a>
</p>
