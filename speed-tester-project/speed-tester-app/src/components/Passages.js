import React, { useState, useEffect } from "react";

function Passages() {
  const [passages, setPassages] = useState([]);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/passages")
      .then((response) => response.json())
      .then((data) => {
        setPassages(data);
        setCurrentPassageIndex(Math.floor(Math.random() * data.length));
      })
      .catch((error) => {
        console.error("Error fetching passages:", error);
      });
  }, []);

  return (
    <div>
      <div>
        <h2>Typing Speed Tester</h2>
        {currentPassageIndex !== null && (
          <div>
            <p>{passages[currentPassageIndex].text}</p>
            <button
              onClick={() =>
                setCurrentPassageIndex(
                  Math.floor(Math.random() * passages.length)
                )
              }
            >
              Get Another Random Passage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Passages;
