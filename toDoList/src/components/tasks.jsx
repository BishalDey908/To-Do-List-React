
export default function Tasks(props){

    
    return(
        <>
        <div className="flex flex-row xl:my-8 xl:w-[456px] md:my-8 my-4 bg-slate-400 w-80 place-content-between py-2 px-2 rounded">

        <li className="text-2xl md:text-3xl ">{props.text} </li>   {/*props use */}
        <div className=" md:mt-2 mt-1 flex-2">


        <i className="fa-solid fa-trash fa-xl mr-2 " onClick={()=>{
            props.onSelect(props.id)  //deleteItems(id)
        }}></i>

        <i class="fa-solid fa-pen-to-square" onClick={()=>{
            props.onSelect1(props.id) 
        }}></i>

        </div >
        </div>
        </>
    )
}