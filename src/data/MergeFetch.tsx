import React, { useState, useEffect } from "react";
import FetchPref from "./FetchPref";
import FetchValue from "./FetchValue";

function MergeFetch() {
  const [pref, setPref] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>MergeFetch</h1>
      {/* <FetchValue setPref={setPref} /> */}
      <FetchPref setPref={setPref} />
      <h2>{pref}</h2>
    </div>
  );
}

export default MergeFetch;
