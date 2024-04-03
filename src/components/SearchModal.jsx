import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchModal = ({ handleSubmit }) => {
    // const [inputValue, setInputValue] = useState('');

    return <section className="rounded border shadow-md  w-96 absolute p-8 top-10 flex bg-white gap-5">

        <p>Track Your Shippment</p>
        <div className="flex border rounded-m">
            <input type="text" onKeyDown={(event) => {
                if (event.key == 'Enter') {
                    console.log(event.target.value)
                    handleSubmit(event.target.value)
                }
            }}></input>

            <div className="bg-red-500 w-4  h-5">

                <FontAwesomeIcon />
            </div>
        </div>

    </section>

}

export default SearchModal