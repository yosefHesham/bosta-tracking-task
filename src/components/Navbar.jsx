import { useState } from "react";
import PropTypes from "prop-types";
import SearchModal from "./SearchModal";
import BostaLogo from "./BostaLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = ["Main", "Prices", "Talk To Sales"];
const Navbar = ({ handleTrackingId }) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const trackShippmentColor = showModal
    ? "text-red-500 border rounded p-5"
    : "text-gray-900";
  return (
    <nav className="flex justify-between sm:justify-evenly items-center border-b pb-5 w-full ">
      <BostaLogo />
      <ul className="gap-5 hidden sm:flex items-center">
        {navItems.map((item) => (
          <li
            key={item}
            className="cursor-pointer  font-bold  text-l text-gray-900"
          >
            {item}
          </li>
        ))}
      </ul>
      <section className="gap-5 items-center relative hidden sm:flex">
        <p
          className={`cursor-pointer font-bold hidden md:block  text-l ${trackShippmentColor} open-modal`}
          onClick={handleShowModal}
        >
          Track Your Shipment {">"}
        </p>
        <p className="cursor-pointer font-bold  text-l text-gray-900 ">
          Sign In{" "}
        </p>
        <p className="cursor-pointer primary-color font-bold">AR</p>
        {showModal && <SearchModal handleSubmit={handleTrackingId} />}
      </section>

      <FontAwesomeIcon
        size="xl"
        icon="fa-solid fa-bars"
        className="cursor-pointer sm:hidden mr-5 sm:mr-0  "
      />
    </nav>
  );
};

Navbar.propTypes = {
  handleTrackingId: PropTypes.func.isRequired,
};
export default Navbar;
