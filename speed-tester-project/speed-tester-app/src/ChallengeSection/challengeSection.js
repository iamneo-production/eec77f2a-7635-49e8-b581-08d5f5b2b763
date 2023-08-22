import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./challengeSection.css";

const ChallengeSection = (
) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Show me How fast you are!
            </h1>
            <TestContainer
                testInfo={[]}
                selectedParagraph={"Hello world"}
                words={0}
                characters={0}
                wpm={0}
                
            />
        </div>
    );
};

export default ChallengeSection;
