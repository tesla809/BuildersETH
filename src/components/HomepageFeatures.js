import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Designed with open source contributions from people like you! Our
        community aims to teach developers how to quickly learn and apply web3
        development skills.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Focus on what matters. Explore what real web3 developers do day to day.
        Go beyond "Hello World" tutorials. We combine theory with real-world
        examples.
      </>
    ),
  },
  {
    title: "Powered by the Commmunity",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Leverage our collective knowledge. Strive to make one small
        contribution. The sum is greater than the whole!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
