import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

// choose light or dark logos for homepage
const undraw_ethereum = {
  lightImage: "img/undraw_ethereum_dark.svg",
  darkImage: "img/undraw_ethereum_light.svg",
};

const undraw_programming = {
  lightImage: "img/undraw_programming_dark.svg",
  darkImage: "img/undraw_programming_light.svg",
};

const undraw_unexpected_friends = {
  lightImage: "img/undraw_unexpected_friends_dark.svg",
  darkImage: "img/undraw_unexpected_friends_light.svg",
};

// note: replaced Svg with ThemedImage so images change with theme change
const FeatureList = [
  {
    title: "Easy to Use",
    // Svg: require("../../static/img/undraw_ethereum.svg").default,
    url: undraw_ethereum,
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
    // Svg: require("../../static/img/undraw_programming.svg").default,
    url: undraw_programming,
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
    // Svg: require("../../static/img/undraw_unexpected_friends.svg").default,
    url: undraw_unexpected_friends,
    description: (
      <>
        Leverage our collective knowledge. Strive to make one small
        contribution. The sum is greater than the whole!
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
        <ThemedImage
          className={styles.featureSvg}
          alt={title}
          sources={{
            light: useBaseUrl(url.lightImage),
            dark: useBaseUrl(url.darkImage),
          }}
        />
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
