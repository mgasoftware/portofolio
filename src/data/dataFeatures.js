export const projectsData = [
  {
    id: "1",
    title: "MGA Market",
    descriptions: [
      "This project MGA Market use only Django framework is a market place who you can post an item, create account and chat whith seller.",
      " I have two repo on this project one using postgreSQL for the database on render.com and the other who use SQL lite on local machine.",
      " The demo must have some issue cause Render.com doesn't alow for free to persist the media image and their server doesn't work anytimes.",],
    image: "/assets/projects/mga_market_django.png",
    techs: ["Django", "Model", "HTML", "Tailwind", "Template","postgreSQL"],
    codeLink: "https://github.com/mgasoftware/django-rest-mgamarket",
    demoLink: "https://mgamarket-djangoapp.onrender.com/",
    framework: "Django"
  },
  {
    id: "2",
    title: "MGA Market",
    descriptions: [
      "This project MGA Market use NextJS for the front and Django REST for the back, is a market place who you can see the items from the django mga market and sign in.",
      " The demo must have some issue cause the back is store on Render.com and it doesn't alow for free to persist the media image and their server doesn't work anytimes.",
      " ",],
    image: "/assets/projects/mga_market_nextjs.png",
    techs: ["NextJS", "Django REST","Typescript", "HTML", "CSS",],
    codeLink: "https://github.com/mgasoftware/nextjs-mgasoftware",
    demoLink: "https://nextjs-mgasoftware.vercel.app/",
    framework: "NextJS"
  },
  {
    id: "3",
    title: "Shop Pass",
    descriptions: [
      "À propos de l'application",
      "Intégrez toutes vos cartes de fidélité avec code-barres dans votre application en toute sécurité. Aucune donnée n'est collectée, aucune nécessité d'être connecté sur internet.",
      "APPLICATION SANS COLLECTE DE DONNEES",
      "Aucune inscription, aucune pub, aucune nécessité de se connecter.",
      "AJOUTEZ TOUTES VOS CARTES DE FIDÉLITÉ",
      "Vous pouvez ajouter les cartes de fidélité de tous vos magasins en toute simplicité.",
      "CARTE PERSONNALISABLE",
      "Chaque carte que vous intégrez est personnalisable par son nom.",
      "SIMPLICITE D'UTILISATION",
      "Les cartes enregistrées sont toutes visibles sur la page d'accueil.",],
    image: "/assets/projects/shoppass.png",
    techs: ["React Native", "JavaScript", "HTML", "CSS", "Expo", "SQLite"],
    codeLink: "https://play.google.com/store/apps/details?id=com.mgasoftware.shoppass",
    demoLink: "https://play.google.com/store/apps/details?id=com.mgasoftware.shoppass",
    framework: "React Native"
  },
  {
    id: "4",
    title: "HRNET",
    descriptions: [
      "HRnet is an application for a company to manage human resources.",
      " It is a comprehensive system that allows for the creation, management, and tracking of employee-related information, including personal data, contact details, employment records, performance, benefits, leave, training, and more.",
      " HRnet application was based on jQuery, a popular JavaScript library for DOM manipulation and user interface interactions.",
      " However, due to evolving technologies and performance issues encountered with the jQuery plugins used, I have decided to convert it using React, a modern JavaScript library for building interactive user interfaces. The conversion of HRnet to React will improve the performance, stability, and maintainability of the application. By employing functional programming principles and avoiding the use of classes, we will be able to create more modular, reusable, and easily testable React components.",
      " Additionally, by completely eliminating jQuery from the application, we can benefit from the advantages of a 100% React architecture without mixing the two frameworks."],
    image: "/assets/projects/hrnet.png",
    techs: ["React", "JavaScript", "HTML", "CSS"],
    codeLink: "https://github.com/mgasoftware/hrnet",
    demoLink: "https://hrnet-nine.vercel.app/",
    framework: "React JS"
  },
  {
    id: "5",
    title: "Kasa",
    descriptions: [
      "As part of an Openclassrooms project, I was asked to integrate the design of a figma model using React.js technology and react-router.",
      " Kasa is an online apartment reservation site.",],
    image: "/assets/projects/kasa.png",
    techs: ["React", "React Router", "HTML", "CSS"],
    codeLink: "https://github.com/mgasoftware/kasa/tree/main",
    demoLink: "https://kasa-n6hv83uyg-mgasoftware.vercel.app/",
    framework: "React JS"
  },
  {
    id: "6",
    title: "SportSee",
    descriptions: [
      "SportSee is a project I carried out as part of my Front-end Developer training at OpenClassrooms.",
      " I integrated and developed an analytics dashboard for a sports web application using HTML, CSS, JavaScript, React, React Router, and the Recharts data visualization tool. I also used an API to retrieve the data needed to display the graphs.",
      " The end result is a functional and aesthetically pleasing dashboard, enabling users to analyze their sports performance in detail.",],
    image: "/assets/projects/sportsee.png",
    techs: ["React", "Rechart", "HTML", "CSS"],
    codeLink: "https://github.com/mgasoftware/sportsee",
    demoLink: "https://sportsee-peach.vercel.app/",
    framework: "React JS"
  },
  {
    id: "7",
    title: "OhMyFood",
    descriptions: [
      "OhMyFood is the development of a 'mobile first' website that lists menus from gourmet restaurants. In addition to the traditional reservation systems, customers will be able to compose their meal menu so that the dishes are ready upon their arrival, eliminating waiting times at the restaurant.",
      " The mobile and desktop mock-ups of the site has been made by OpenClassRoom. The mock-ups has been made with Figma, which demonstrates the animations and behaviors to be integrated.",
      " The website is be developed for mobile, tablet, and desktop devices, strictly following the information determined in the mock-ups. It's responsive and 'mobile first', with polished animations."],
    image: "/assets/projects/ohmyfood.png",
    techs: ["HTML", "SASS"],
    codeLink: "https://github.com/mgasoftware/ohMyFood/tree/main",
    demoLink: "https://mgasoftware.github.io/",
    framework: "HTML CSS"
  },
]
