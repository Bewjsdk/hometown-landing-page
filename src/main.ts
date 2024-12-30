import guide from "./components/guide"
import hero from "./components/hero"
import navbar from "./components/navbar"
import travel from "./components/travel"

import "./style.css"

const main = () => {
  const app = document.querySelector<HTMLDivElement>("#app")

  if (!app) return;

  app.append(navbar, hero, travel, guide)  

}

main()
