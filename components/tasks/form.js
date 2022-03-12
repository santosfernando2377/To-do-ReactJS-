import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

export default function Form() {

    const Router = useRouter()
    
    const Task = {
        nome: '',
        descricao: ''
    }

    const [task, setTask] = useState(Task)

    function onChange (event) {
        const {name, value} = event.target
        
        setTask({... task, [name]: value})
    }

    function onSubmit(event) {
        event.preventDefault()
    }

    function onSend() {
        axios.post('http://localhost:3001/tarefa', {
            titulo: task.nome,
            tarefa: task.descricao,
            userEmail: localStorage.getItem('email')
        })
        .then((response) => {
            Router.push('/tasks/')
        })
        .catch((reponse) =>{
            console.log(reponse)
        })
    }
    
    return (
        <form onSubmit={onSubmit}>
        <div className="py-12 px-12">
          <h2 className="text-2xl font-bold">Cadastro de Tarefa</h2>
          <div className="mt-8 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Nome</span>
                <input 
                    type="text" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="nome" 
                    name="nome"
                    onChange={onChange}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Descrição</span>
                <input 
                    type="text" 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                    id="descricao" 
                    name="descricao"
                    onChange={onChange}
                />
              </label>
              <button className="
                w-full flex 
                items-center 
                justify-center 
                my-3 
                px-8 
                py-3 
                border 
                border-transparent 
                text-base 
                font-medium 
                rounded-md 
                text-white 
                bg-indigo-600 
                hover:bg-indigo-700 
                " onClick={onSend}>Enviar</button>
            </div>
          </div>
        </div>
        </form>
    )
}