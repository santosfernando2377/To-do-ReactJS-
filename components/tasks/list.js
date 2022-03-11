export default function List(props) {
    return (
        <div className="
        w-full
        h-full 
        px-3 
        py-3 
        flex 
        flex-col 
        flex-wrap 
        justify-center 
        items-center
        sm:w-full 
        sm:h-full 
        sm:px-3 
        sm:py-3 
        sm:flex 
        sm:flex-row 
        sm:flex-wrap 
        sm:justify-center 
        sm:items-center
        ">
            {props.children}
        </div>
    )
}