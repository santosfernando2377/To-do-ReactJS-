import Menu from "../../components/tasks/menu"
import { useRouter } from "next/router"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
export default function viewTask() {
    
    const task = {
      nome: '',
      descricao: ''
    }

    const Router = useRouter()
    const [tarefa, setTarefa] = useState({})
    const [Task, setTask] = useState(task)

    const id = Router.asPath

    const query = id.split('=')

      useEffect(() =>{
      axios.get(`http://localhost:3001/tarefa?id=${query[1]}`)
      .then((response) => {
        setTarefa(response.data[0])
      })
      .catch((response) => {
        console.log(response)
      })
      }, [])

      function onChange(event) {
        const {name, value} = event.target

        setTask({... Task,[name]:value})
        console.log(Task)
      }

      function onSubmit(event) {
        event.preventDefault()
      }

      async function onCompleted() {
        await axios.delete(`http://localhost:3001/tarefa/${query[1]}`)
        .then((response) => {
          Router.push('/tasks')
        })
        .catch((response) => {
          console.log(response)
        })
      }

      async function onTask() {
        await axios.patch(`http://localhost:3001/tarefa/${query[1]}`,{
          titulo: Task.nome,
          tarefa: Task.descricao
        })
        .then((response) => {
          Router.reload()
        })
        .catch((response) => {
          console.log(response)
        })
      }

    return (
        <>
        <Menu/>
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
                    defaultValue={tarefa.titulo}
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
                    defaultValue={tarefa.tarefa}
                    onChange={onChange}
                />
              </label>
              <div className="flex flex-row">
              <button onClick={onTask} className="
                w-full flex 
                items-center 
                justify-center 
                my-3
                mx-2 
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
                ">Atualizar</button>
                <button onClick={onCompleted} className="
                w-full flex 
                items-center 
                justify-center 
                my-3
                mx-2 
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
                ">Concluir</button>
              </div>
                
            </div>
          </div>
        </div>
        </form>
        </>
    )
}