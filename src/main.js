import { createApp } from "vue";
import App from "./App.vue";
import './main.css';
import * as VueRouter from "vue-router";
import ShoppingCardPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductsDetailPage from "./pages/ProductsDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.Base_Url),
      routes: [
        {
          path: "/product",
          component: ProductsPage,
        },
        {
          path:'/product/:productId',
          component: ProductsDetailPage
        },
        {
          path: "/cart",
          component: ShoppingCardPage,
        },

        // this is the route path for an error page that can  be seen across all pages

        {
          path: '/:pathMatch(.*)*',
          component: NotFoundPage,
        }
      ],
    })
  )

  .mount("#app");
