import React, { useState } from "react";
import "./Whycc.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Whycc = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="whycc">
      <h1 className="section__head">Why Code Companion</h1>
      <div className="whycc__figures">
        <div className="whycc__figures-fig">
          <span className="cont">
            <span className="value" data-val="120">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && <CountUp end={120} />}
              </ScrollTrigger>
            </span>
            <span className="value-unit">K</span>
          </span>
          <span className="fig-title">Doubts Solved</span>
        </div>
        <div className="whycc__figures-fig">
          <span className="cont">
            <span className="value" data-val="120">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && <CountUp end={160} />}
              </ScrollTrigger>
            </span>
            <span className="value-unit">K</span>
          </span>
          <span className="fig-title">Active Users</span>
        </div>
        <div className="whycc__figures-fig">
          <span className="cont">
            <span className="value" data-val="120">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                {counterOn && <CountUp end={240} />}
              </ScrollTrigger>
            </span>
            <span className="value-unit">K</span>
          </span>
          <span className="fig-title">Community</span>
        </div>
      </div>
      <div className="whycc__para">
      You connect with like-minded individuals who share the same skillset or aspirations, and finding mentors, offers valuable benefits. It provides access to a targeted network, facilitating learning and growth through knowledge sharing. Engaging with similar-minded individuals enhances motivation, builds a support system, and offers mentorship opportunities for guidance and accelerated progress in your chosen field.
      </div>
    </div>
  );
};

export default Whycc;
