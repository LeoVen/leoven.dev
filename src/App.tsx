import React, { useState } from "react";
import "./App.css";

import CodeBrackets from "./code-brackets";
import ThemePicker from "./theme-picker";
import AnchorButton from "./anchor-button";

function App() {

  const [theme, setTheme] = useState("ctp-mocha");

  return (
    <div className={theme + " tw-text-ctp-text"}>
      <div className="tw-bg-ctp-base tw-min-h-[100vh]">
        <ThemePicker changeTheme={(newTheme) => setTheme(newTheme)} />
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-min-h-[100vh]">
          <div className="tw-bg-ctp-crust tw-p-[2rem]">
            <h1 className="tw-text-6xl tw-text-ctp-lavender">Leonardo Vencovsky</h1>
            <h2 className="tw-text-4xl tw-text-ctp-lavender">Curriculum Vitae</h2>
            <CodeBrackets className="tw-max-w-2xl" title="Coming Soon">
              <p>Meanwhile check out other places here:</p>
              <br />
              <div className="tw-flex tw-items-center tw-justify-center tw-flex-wrap">
                <AnchorButton href="https://github.com/LeoVen" target="_blank">
                  GitHub
                </AnchorButton>
                <AnchorButton href="https://www.linkedin.com/in/leonardo-vencovsky-911252149/" target="_blank">
                  LinkedIn
                </AnchorButton>
                <AnchorButton href="./assets/files/CV_Leonardo_Vencovsky.pdf" target="_blank">
                  CV in PDF
                </AnchorButton>
              </div>
            </CodeBrackets>
          </div >
        </div>
      </div>
    </div>
  );
}

export default App;
