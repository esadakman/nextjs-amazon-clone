# NextJS - Amazon Clone
<!-- stripe listen --forward-to localhost:3000/api/webhook -->
## Objective

- Project aims to create a Airbnb clone with using NextJS.
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

- I prepared a small-scale project in order to understand the NextJS that I have learned recently.
- I use next-auth for authentication, Fake Store API for product informations, stripe for payment process, firebase and firebase-admin for collecting order informations and TailwindCSS for styling.
- I found the project from Youtube([Sonny Sangha](https://www.youtube.com/@SonnySangha)). You can see the related video from [here](https://www.youtube.com/watch?v=DF68MNDxVwU)

## Project Link

#### You can reach my project from [here](https://nextjs-amazon-clone-esadakman.vercel.app/) 👈

### Project Skeleton

```
nextjs-amazon-clone (folder)
|----readme.md
SOLUTION
├── components
│    ├── Banner.jsx
│    ├── CheckoutProduct.jsx
│    ├── Header.jsx
│    ├── Order.jsx
│    ├── Product.jsx 
│    └── ProductFeed.js
├── pages
│    ├── api
│    │    ├─── auth 
│    │    │      └── [...nextauth].js
│    │    ├─── create-checkout-session.js 
│    │    └─── webhook.js  
│    ├── _app.js
│    ├── _document.js
│    ├── checkout.js
│    ├── index.js
│    ├── orders.js
│    └── success.js
├── public
│    ├── amazon_logo.png
│    ├── favicon.ico
│    ├── logo.svg
│    └── prime_banner.jpg
├── slices
│    └── basketSlice.js
├── styles
│    └── global.css
├── .gitignore
├── .env.local
├── firebase.js
├── next.config.js
├── package.json
├── postcss.config.js
├── store.js
├── stripe.exe
├── tailwind.config.js
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JavaScript
- ReactJS
- NextJS
- TailwindCSS
- redux-toolkit
- next-auth
- firebase
- firebase-admin
- momentjs
- date-fns
- responsive-carousel
- react-currency-formatter
- heroicons
- bar-of-progress

To run this project;

- Signup https://stripe.com/ and create new account.  
- Copy your public token from your account page.
- Create a .env.local file and set your MAPBOX_KEY for maps and locations:

After these you can run the project as usual =>

```
$ git clone https://github.com/esadakman/nextjs-amazon-clone.git
$ cd ./nextjs-amazon-clone
$ npm install / yarn
$ npm run dev / yarn dev

Open http://localhost:3000 with your browser to see the result.
```

### Preview of the Project

 <!-- <img src="./airbnb-clone.gif" alt="gif"   /> -->
