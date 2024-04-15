import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const LocalizationContext = createContext();

export const useLocalization = () => useContext(LocalizationContext);

export const LocalizationProvider = ({ children }) => {
  const localizationHook = useTranslation();

  return (
    <LocalizationContext.Provider value={localizationHook}>
      {children}
    </LocalizationContext.Provider>
  );
};

LocalizationProvider.propTypes = {
  children: PropTypes.node,
};
