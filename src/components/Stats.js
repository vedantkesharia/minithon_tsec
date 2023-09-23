import React, { useState, useEffect } from "react";
import "./styles/Stats.css";
import AOS from "aos";
import "aos/dist/aos.css";
import VisibilitySensor from "react-visibility-sensor";

function Counter({ target, className, interval, isVisible }) {
  const [count, setCount] = useState(0);
  let intervalTime = interval || 10;

  useEffect(() => {
    let timeout;
    if (!isVisible) return;
    if (count < target) {
      timeout = setTimeout(() => {
        setCount(count + 1);
      }, intervalTime);
    } else {
      clearTimeout(timeout);
    }
    return () => clearTimeout(timeout);
  }, [count, target, intervalTime, isVisible]);

  return <div className={className}><strong>{`${count}+`}</strong></div>;
}

function Stat({ title, subtitle, target, interval }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <VisibilitySensor onChange={(visible) => setIsVisible(visible)}>
      <div className="stat" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <Counter target={target} className="stat_counter" interval={interval} isVisible={isVisible} />
        <div className="stat_content">
          <h3 className="stat_content_title">{title}</h3>
          <p className="stat_content_subtitle">{subtitle}</p>
        </div>
      </div>
    </VisibilitySensor>
  );
}

const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="stats">
        <Stat
          title="Companies"
          subtitle="Number of our customers worldwide"
          target={250}
          interval={5}
        />
        <Stat
          title="Countries"
          subtitle="Collaborative Commandos"
          target={40}
          interval={10}
        />
        <Stat
          title="Products"
          subtitle="Our total products"
          target={80}
          interval={10}
        />
        <Stat
          title="Services"
          subtitle="Our Services"
          target={100}
          interval={10}
        />
      </div>
    </>
  );
};

export default Stats;