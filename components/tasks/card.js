export default function Card(props) {
    return (
        <div className="
        w-full
        h-auto 
        drop-shadow-2xl 
        bg-gray-100 
        rounded
        my-2
        px-3 
        border 
        border-solid 
        border-slate-300
        sm:w-5/12 
        sm:h-auto 
        sm:drop-shadow-2xl 
        sm:bg-gray-100 
        sm:rounded 
        sm:my-3 
        sm:mx-3 
        sm:py-2 
        sm:px-2 
        sm:border 
        sm:border-solid 
        sm:border-slate-300
        md:w-4/12 
        md:h-auto 
        md:drop-shadow-2xl 
        md:bg-gray-100 
        md:rounded 
        md:my-3 
        md:mx-3 
        md:py-2 
        md:px-2 
        md:border 
        md:border-solid 
        md:border-slate-300"
        >
            <p className="text-lg font-normal my-2">{props.label}</p>
            <p className="text-base h-12 font-light flex flex-row flex-wrap overflow-x-hidden overflow-y-scroll my-3">
                {props.description}
            </p>
            <a href={`http://localhost:3000/tasks/viewtask?task=${props.idTask}`} target="_self">
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
                ">
                    Ver tarefa
                </button>
            </a>

        </div>
    )
}