import { useState } from "react"
import Tasks from "./tasks"

export default function Todo() {

    const [input, setInput] = useState("")
    const [tasklist, settaskList] = useState([])
    const [index2, setIndex2] = useState("")


    // -------------------------InsertOpearation start--------------------------------------


    function showInput(inputValue) {          //store the user input 
        setInput(inputValue.target.value)     //acces the user input use "inputValue.target.value"
    }

    function listItems() {                    //add items into the array
        settaskList((oldItems) => {          //"oldItems" is used to acces previous element on the array
            return [...oldItems, input]  // return previous value then add new value
        })
        setInput("")
    }

    // -------------------------InsertOpearation end--------------------------------------

    // -------------------------deleteOpearation start--------------------------------------


    

    // -------------------------deleteOpearation end--------------------------------------

    function edit1(id) {
        setIndex2(id)
        tasklist.forEach((p, index) => {
            if (index === index2) {
                setInput(p)
                console.log(tasklist[index] = input)
            }
        })
    }


    return (
        <>
            <div className=" w-auto">
                <div className="mt-6 flex place-content-center ml-2">
                    <input className="h-10 w-96 text-center rounded-full" type="text" placeholder="Input text here" value={input} onChange={showInput} />
                    
                    <button className="mx-2 bg-orange-500 w-20 rounded-full" onClick={listItems}>Add</button>
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
                                    onSelect1={edit1}
                                />   // "props => text"
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}