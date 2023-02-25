import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    english: {
      translation: {
        greetings: "Hello, I am Daniel",
        fdg: "frontend developer",
        about: "about",
        projects: "projects",
        stack: "stack",
        experience: "experience",
        mpp: "My pet projects",
        fd: "Frontend",
        bd: "Backend",
      },
    },
    ukrainian: {
      translation: {
        greetings: "Привіт, я Даніель",
        fdg: "фронтенд розробник",
        about: "про мене",
        projects: "проекти",
        stack: "стек",
        experience: "досвід",
        mpp: "Мої пет проекти",
        fd: "Фронтенд",
        bd: "Бекенд",
      },
    },
  },
  lng: "english",
});

export default i18next;
