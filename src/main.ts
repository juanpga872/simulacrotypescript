import { PageController } from "./controller/page.controller"

const loginForm = document.querySelector("#loginForm") as HTMLFormElement
const loginEmail = document.querySelector("#emailIUser") as HTMLInputElement
const loginPassword = document.querySelector("#passwordIUser") as HTMLInputElement

const url = "https://reqres.in/api/"

loginForm.addEventListener("submit", async (event: Event) => {
  event.preventDefault()

  const user = {
    email: loginEmail.value,
    password: loginPassword.value
  }
  const pageController = new PageController(url)
  const responseOfLogin = await pageController.login(user, "login")

  sessionStorage.setItem("token", responseOfLogin.token)
})