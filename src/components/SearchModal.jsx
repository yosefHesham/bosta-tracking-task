import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PropTypes from "prop-types";

const SearchModal = ({ handleSubmit }) => {
  return (
    <section className="rounded border shadow-md  absolute p-8 top-16 bg-white gap-5">
      <p className="text-start text-gray-500 font-semibold">
        Track Your Shippment
      </p>
      <div className="flex border rounded-xl">
        <input
          type="text"
          placeholder="Shippment No"
          className="rounded-m px-5"
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              handleSubmit(event.target.value);
            }
          }}
        ></input>

        <div className="bg-red-500 p-5  h-full rounded-tr-md flex items-center justify-center rounded-br-md">
          <FontAwesomeIcon icon="fa-solid fa-search" color="white" />{" "}
        </div>
      </div>
    </section>
  );
};

SearchModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchModal;
