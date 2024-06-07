import React, { useState } from "react";
import "./App.css";

import ThemePicker from "./theme-picker";
import { ComingSoon } from "./coming-soon";

function App() {

  const [theme, setTheme] = useState("ctp-mocha");

  return (
    <div className={theme + " tw-text-ctp-text"}>
      <div className="tw-bg-ctp-base tw-min-h-[100vh]">
        <ThemePicker changeTheme={(newTheme) => setTheme(newTheme)} />
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-min-h-[100vh]">
          <ComingSoon />
        </div>
      </div>
    </div>
  );
}

export default App;
