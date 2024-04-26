// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../components/AboutView.vue";
import HomePage from "../components/HomePage.vue";
import CartView from "../components/CartView.vue";
import LogIn from "../components/LogIn.vue";
import SignUp from "../components/SignUp.vue";
import favourites from "../components/FavouriteView.vue";
// const about = ()=> import ('/about')

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/CartView",
    name: "CartView",
    component: CartView,
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
    children:[
      {
        path: "/profile",
        name: "profile",
                component: () => import("../components/ProfileView.vue"),
      }
    ]
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/favourites",
    name: "favourites",
    component: favourites,
  },
  // { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// // Add navigation guards to protect the profile route
// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // Check if the user is authenticated (e.g., via Vuex store)
//     const isAuthenticated = true; // Replace with your authentication logic
//     if (isAuthenticated) {
//       next();
//     } else {
//       next('/login'); // Redirect to login if not authenticated
//     }
//   } else {
//     next();
//   }
// });

export default router;
