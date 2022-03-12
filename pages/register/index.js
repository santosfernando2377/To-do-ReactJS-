import Input from "../../components/login/input"
import {useState} from "react"
import { useRouter } from "next/router"
import axios from "axios"


export default function Register() {
    
    const Router = useRouter()

    const Register = {
        nome: '',
        email: '',
        senha: ''
    }

    const [register, setRegister] = useState(Register)

    function onChange(event) {
        const {name, value} = event.target

        setRegister({...register,[name]:value})
    }

    function onSubmit(event) {
        event.preventDefault()
    }

    function onSend() {
        axios.post('http://localhost:3001/usuario',{
            email: register.email,
            senha: register.senha,
            nome: register.nome
        })
        .then((response) => {
            Router.push('/')
        })
        .catch((response) => {
            console.log(response)
        })
    }

    return (
        <>
            <main>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Cadastro de Acesso</h2>
      
    </div>
    <form onSubmit={onSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <Input
        label="Nome"
        name="nome"
        type="text"
        autoComplete="nome"
        placeholder="Nome"
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
        />
        <Input
        label="E-mail"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
        />
        <Input
        label="Senha"
        name="senha"
        type="password"
        autoComplete="password"
        placeholder="Senha"
        onChange={onChange}
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
        />
      </div>

      <div>
        <button type="submit" onClick={onSend}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cadastrar
        </button>
      </div>
    </form>
  </div>
</div>
      </main>
        </>
    )
}