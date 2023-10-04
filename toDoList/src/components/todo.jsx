import { useState } from "react"
import Tasks from "./tasks"

export default function Todo() {

    const [input, setInput] = useState("")
    const [tasklist, settaskList] = useState([])
    


    // -------------------------InsertOpearation start--------------------------------------


    function showInput(inputValue) {          //store the user input 
        setInput(inputValue.target.value)     //acces the user input use "inputValue.target.value"
    }

    function listItems() {                    //add items into the array
        settaskList((oldItems) => {   
            if(input!==""){       //"oldItems" is used to acces previous element on the array
            return [...oldItems, input]
            }  // return previous value then add new value
            else{
                return[...oldItems]
            }
        })
        setInput("")

        if(input===""){
            alert("Please enter a task")
        }
    }

    // -------------------------InsertOpearation end--------------------------------------

    // -------------------------deleteOpearation start--------------------------------------


    function deleteItems(id) { //deleteItems(id)
        console.log("del")

        settaskList((oldItems) => {                       //access old elements in the array
            return oldItems.filter((arrElem, index) => {  //do filter and filter takes 2 option (element and indexnumber)
                return index !== id                     //if (index === id ? not delete) else delete  
            })
        })
    }

    // -------------------------deleteOpearation end--------------------------------------
    function clearall(){
        settaskList([])
    }


    return (
        <>
            <div className=" w-auto">
                <div className="mt-6 flex place-content-center ml-2">
                    <input className="h-10 w-96 text-center rounded-full" type="text" placeholder="Input text here" value={input} onChange={showInput} />
                    
                    <button className="mx-2 bg-orange-500 xl:w-20 md:w-20 w-24 mr-[-2px] rounded-full" onClick={listItems}>Add</button>
                    <hr />

                    <button className="mx-2 bg-orange-500 xl:w-20 w-28 rounded-full xl:text-1xl text-sm" onClick={clearall}>Clear All</button>
                    <hr />
                    
                </div>

                <div className="flex place-content-center">
                    <ul>
                        {
                            tasklist.map((items, index) => {          //set the items one by one to the list by "props"
                                return <Tasks
                                    id={index}
                                    key={index}
                                    text={items}
                                    onSelect={deleteItems}
                                    
                                />   // "props => text"
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}