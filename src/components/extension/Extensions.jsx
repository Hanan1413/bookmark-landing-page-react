import React from "react";
import Text from "../text/Text";
import Extension from "./Extension";

function Extensions({extension}) {
  return (

    <div>
      <Text
        title="Download the extension"
        text="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritze."
      />
      <Extension extension={extension} />
    </div>
  );
}

export default Extensions;
