import { i18n } from "src/utils/i18n"
import { notivue } from "src/utils/notifications"
import { pinia } from "src/utils/pinia"
import { appRouter } from "src/utils/router"
import { createApp } from "vue"
import App from "./app.vue"
import "./index.scss"

appRouter.addRoute({
  path: "/",
  redirect: "/action-popup",
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     return next('/action-popup')
//   }

//   next()
// })

const app = createApp(App).use(i18n).use(notivue).use(pinia).use(appRouter)

app.mount("#app")

export default app

self.onerror = function (message, source, lineno, colno, error) {
  console.info("Error: " + message)
  console.info("Source: " + source)
  console.info("Line: " + lineno)
  console.info("Column: " + colno)
  console.info("Error object: " + error)
}
