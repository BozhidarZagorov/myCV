import { useState } from "react";

import Home from "./sections/Home";
import CV from "./sections/CV";
import Contacts from "./sections/Contact";

function App() {
  const [downloadFn, setDownloadFn] = useState(null);
  return (
    <main>
      <Home onDownloadCV={downloadFn} />
      <CV onDownloadReady={setDownloadFn} />
      <Contacts />
    </main>
  );
}

export default App;