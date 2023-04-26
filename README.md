<p align="center" width="100%">
    <img width="30%" src="https://raw.githubusercontent.com/tronross/happy-helpers/master/planning/logo.png">
</p>
<p align="center" >A crowd-sourcing volunteering app with a focus on building community through in-person interactions and mutual aid. Whether you need a cup of milk from a neighbor, or help to fix a broken door; Happy Helpers can provide you with a volunteer.</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#how-it-works">How It Works</a>
    </li>
     <li>
      <a href="#purpose">Purpose</a>
    </li>
    <li>
      <a href="#tech-stack">Tech Stack</a>
    </li>
    <li>
      <a href="#screenshots">Screenshots</a>
    </li>
    <li>
    <a href="#setup">Setup</a>
    </li>
    <li>
    <a href="#dependencies">Dependencies</a>
    </li>
    <li>
    <a href="#project-directory-structure">Project Directory</a>
    </li>
    <li>
    <a href="#contributors">Contributors</a>
    </li>
  </ol>
</details>

## How it Works?

- Users can post a task they need help with or browse upcoming tasks which can be filtered by location, category and date.

- Offering help is simple: just find a task you want to volunteer for and hit OFFER. Once an offer comes in for one of your own tasks, you can view the profiles of the volunteers and select the best match.

- After being accepted for a task, you can view it on your profile page with more information. The embedded Chat Engine lets you ensure that everything is in place as you patiently wait for the day to come to help or be helped by your neighbor.

- Once the task is finished, you can check it complete and reward your volunteer with a star, if deserved. Stars show up on your profile to show others they can rely on you to get the job done!

## Purpose

Happy Helpers has been created by Web Development students John Ross, Sarah Campbell, Alric Fernandes, and Mike Dalton for the Finals project at Lighthouse Labs.

## Tech Stack


[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Screenshots

### The landing page
Find out how the site is designed to bring people together in their communities and either login or sign up for an account:

![Landing Page](./planning/screenshots/landing.gif)

### The home page
View requests for help in your local area.  Filter and search by category, dates or the distance from your door:

![Home Page](./planning/screenshots/home.gif)

### The new task page
Need a hand? You can easily add a request for help with the New Task form:

![New Task Page](./planning/screenshots/form.gif)

### The task page
View all of a user's requests for help and other similar requests to help you decide which tasks to volunteer for.
At the click of a button, you can make a difference:

![Profile Page](./planning/screenshots/task.gif)

### The myHelp page
Choose a volunteer from the offers of help for your own requests. Once completed, give the volunteer a star recommendation for a job well done:

![MyHelp Page](./planning/screenshots/myHelp.gif)

### The profile page
Update your profile as your life changes or you learn new skills. Keep an eye on all of your upcoming tasks and see your history of completed tasks:

![Profile Page](./planning/screenshots/profile.gif)

### The messages page
Chat with your volunteer or requester to make sure everything's in place before the job begins. Then maybe send a message of gratidude after the work has been done:

![Messages Page](./planning/screenshots/messages.gif)


## Setup

- Clone the project from the GitHub repository <https://github.com/tronross/happy-helpers>.

- Install dependencies with `npm install`.

- Create a `.env.local` file and add your Google Maps Api public key in the form:

  `NEXT_PUBLIC_API_KEY="your key here"`.
  - If needed, you can sign up for a free development account at:

    <https://developers.google.com/maps/documentation/javascript/get-api-key>.

- Create a new PostgreSQL database using `CREATE DATABASE finals`.

- Seed the test data using the Prisma commands:

  `> npx prisma db push --force-reset`

  `> npx prisma db seed`

- Type `> npm run dev` to run the development server.

- Open the page <http://localhost:3000> in your browser and enjoy the site!


## Dependencies

![next: 13.2.4](https://img.shields.io/badge/-next%3A%2013.2.4-%230D9488)
![react: 18.2.0](https://img.shields.io/badge/-react%3A%2018.2.0-%230D9488)
![react-chat-engine](https://img.shields.io/badge/-react--chat--engine-%230D9488)
![react-dom](https://img.shields.io/badge/-react--dom-%230D9488)
![react-geocode](https://img.shields.io/badge/-react--geocode-%230D9488)
![react-scripts](https://img.shields.io/badge/-react--scripts-%230D9488)
![react-tailwindcss-datepicker](https://img.shields.io/badge/-react--tailwindcss--datepicker-%230D9488)
![react-xarrows](https://img.shields.io/badge/-react--xarrows-%230D9488)
![prisma/client](https://img.shields.io/badge/-prisma%2Fclient-%230D9488)
![tailwindcss](https://img.shields.io/badge/-tailwindcss-%230D9488)
![tailwind-scrollbar-hide](https://img.shields.io/badge/-tailwind--scrollbar--hide-%230D9488)
![axios](https://img.shields.io/badge/-axios-%230D9488)
![dayjs](https://img.shields.io/badge/-dayjs-%230D9488)
![eslint](https://img.shields.io/badge/-eslint-%230D9488)
![flowbite](https://img.shields.io/badge/-flowbite-%230D9488)
![googlemaps/js-api-loader](https://img.shields.io/badge/-googlemaps%2Fjs--api--loader-%230D9488)
![normalize.css](https://img.shields.io/badge/-normalize.css-%230D9488)

## Project Directory Structure
```
finals
├── planning
└──  prisma
    ├── migrations
    ├── public
    │   └── images
    └── src
        ├── components
        │   └── taskForm
        ├── helpers
        ├── pages
        │   ├── api
        │   │   ├── addresses
        │   │   ├── messages
        │   │   ├── offers
        │   │   ├── organizations
        │   │   ├── tasks
        │   │   ├── offers
        │   │   └── users
        │   ├── profile-page
        │   └── task
        └── styles
```

## Contributors

 <img src="https://avatars.githubusercontent.com/u/101600481?v=4" width="50px"/>    **John Ross**

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/john-ross-9a3345274/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tronross)


 <img src="https://avatars.githubusercontent.com/u/10466420?v=4" width="50px" class="cont-img" /> **Sarah Campbell**

 [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sarah-campbell-805569a7/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/campbell46)


 <img src="https://media.licdn.com/dms/image/C5603AQFZ0woGB_yERg/profile-displayphoto-shrink_400_400/0/1517598557473?e=1687996800&v=beta&t=Ww8xfryCML0GswV1c8x5BqsHKQvvh5E4rmrakj3Bqes" width="50px" class="cont-img" />  **Alric Fernandes**

 [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alric-fernandes-63968a64/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/alricf)


 <img src="https://avatars.githubusercontent.com/u/109972253?v=4" width="50px" class="cont-img" /> **Mike Dalton**

  [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mike-dalton-4a002224) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mikedaltonmtl)