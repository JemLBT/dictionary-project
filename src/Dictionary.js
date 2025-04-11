import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
      "aPkHSVSamYpJTrtkXYGiUN8ZfeqObXDppqW7buEdyLju1A44PsA0pQNa";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <div className="whichWord">
            <h4>
              <strong>Which word do you want to search?</strong>
            </h4>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
            </form>
          </div>
          <div className="hint">
            <em>suggested words: coffee, running, plants, coding...</em>
          </div>
        </section>
        <div className="Results">
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
