export default function Input(props) {
    return (
        <div>
          <label htmlFor={props.name} className="sr-only">{props.label}</label>
          <input 
          id={props.name} 
          name={props.name} 
          type={props.type} 
          autoComplete={props.autoComplete} 
          required 
          className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ` + props.className} 
          placeholder={props.placeholder}
          onChange={props.onChange}/>
        </div>
    )
}