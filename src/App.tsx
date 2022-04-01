import React from "react";
import "./App.css";

import { AnchorButton, Button, ButtonGroup } from "@blueprintjs/core";

function App() {
  return (
    <div className="centered">
      <h1>Leonardo Vencovsky</h1>
      <h2>Curriculum Vitae</h2>
      <p>Coming soon... Meanwhile, check me out here:</p>
      <ButtonGroup minimal={true}>
        <AnchorButton
          text="GitHub"
          icon="git-repo"
          href="https://github.com/LeoVen"
          target={"_blank"}
          rel="noreferrer"
        />
        <AnchorButton
          text="LinkedIn"
          icon="link"
          href="https://www.linkedin.com/in/leonardo-vencovsky-911252149/"
          target={"_blank"}
          rel="noreferrer"
        />
        <AnchorButton
          text="CV in PDF"
          icon="book"
          href="./assets/files/CV_Leonardo_Vencovsky.pdf"
          target={"_blank"}
          rel="noreferrer"
        />
      </ButtonGroup>
    </div>
  );
}

export default App;
