import "./index.css";
import TrackingPage from "./pages/Tracking";
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <>
      <TrackingPage />
    </>
  );
}

export default App;
