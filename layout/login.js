import Input from "../components/login/input"
import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function Login() {
  
  const Login = {
    email:'',
    senha:''
  }

  const Verification = {
    email:'',
    senha:''
  }

  const Router = useRouter()
  const [User, setUser] = useState(Login)
  const [Userdb, setUserDb] = useState(Verification)

  function onChange(event) {

    const {name, value} = event.target

    setUser({...User, [name]: value})
    
  }

  function onSubmit(event) {
    
    event.preventDefault()

  }

  function searchUser() {
    
    axios.get('http://localhost:3001/usuario',{
      params:{
        email: User.email,
      }
      
    }) 

      .then((response) => {
        const resposta = response.data[0]
        setUserDb(resposta)
      
      })
      
      .catch((response) => {
        console.log(response)

      })
  }

  function validationUser() {
    searchUser()
    if(User.email == Userdb.email && User.senha == Userdb.senha) {

      const expired = 9000000
      
      localStorage.setItem(`email`,`${Userdb.email}`, `${expired}`)
      localStorage.setItem(`senha`,`${Userdb.senha}`, `${expired}`)

      setTimeout(() => {
        Router.push(`./tasks`)
      }, 3000);

    } else {

      console.log('Email ou senha incorreto')

    }
    
  }

    return (
      <>
        <main>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Faça o login em sua conta</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Ou
        <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500"> Cadastre-se aqui mesmo </a>
      </p>
    </div>
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <Input
        label="E-mail"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
        onChange={onChange}
        />
        <Input
        label="Senha"
        name="senha"
        type="password"
        autoComplete="password"
        placeholder="Senha"
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
        onChange={onChange}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Esqueci minha senha? </a>
        </div>
      </div>

      <div>
        <button type="submit" 
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={validationUser}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Login
        </button>
      </div>
    </form>
  </div>
</div>
      </main>
      </>
    )
}