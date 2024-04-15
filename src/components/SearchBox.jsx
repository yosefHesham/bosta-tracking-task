import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useLocalization } from "../contexts/LocalizationContext";

const SearchBox = ({ handleSubmit }) => {
  const { t } = useLocalization();
  return (
    <div className="flex border rounded-xl md:w-80">
      <input
        type="text"
        placeholder={t("shipmentNo")}
        className="rounded-m px-5 w-full"
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
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBox;
