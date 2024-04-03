import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchModal = ({ handleSubmit }) => {

    return <section className="rounded border shadow-md  w-96 absolute p-8 top-10 flex bg-white gap-5">

        <p>Track Your Shippment</p>
        <div className="flex border rounded-xl">
            <input type="text" placeholder="Shippment No" className="rounded-m px-5" onKeyDown={(event) => {
                if (event.key == 'Enter') {
                    console.log(event.target.value)
                    handleSubmit(event.target.value)
                }
            }}></input>

            <div className="bg-red-500 w-12  h-full rounded-tr-md flex items-center justify-center rounded-br-md">

                <FontAwesomeIcon icon="fa-solid fa-search" color="white" />            </div>
        </div>

    </section>

}

export default SearchModal