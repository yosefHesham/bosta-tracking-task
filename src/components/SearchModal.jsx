import PropTypes from "prop-types";
import SearchBox from "./SearchBox";

const SearchModal = ({ handleSubmit }) => {
  return (
    <section className="rounded border shadow-md  absolute p-8 top-16 bg-white gap-5">
      <p className="text-start text-gray-500 font-semibold">
        Track Your Shippment
      </p>
      <SearchBox handleSubmit={handleSubmit} />
    </section>
  );
};

SearchModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchModal;
