import { LocalizationProvider } from "./contexts/LocalizationContext";
import "./index.css";
import TrackingPage from "./pages/Tracking";
import { library } from "@fortawesome/fontawesome-svg-core";

import "./il8next/i18n";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <>
      <LocalizationProvider>
        <TrackingPage />
      </LocalizationProvider>
    </>
  );
}

export default App;
