import React from "react";
import { PokemonBundle } from "../../types";
import styles from "../../css/Components-css/ShopPageCSS/ProductGridComponent.module.css";

interface BundleGridProps {
  bundles: PokemonBundle[];
}

const BundleGridComponent: React.FC<BundleGridProps> = ({ bundles }) => {
  return (
    <section className={styles.grid}>
      {bundles.map((bundle) => (
        <div key={bundle._id} className={styles.bundleCard}>
          <img
            src={bundle.img}
            alt={bundle.name}
            className={styles.bundleImage}
          />
          <h3>{bundle.name}</h3>
          <p>{bundle.series}</p>
          <p>${bundle.price}</p>
        </div>
      ))}
    </section>
  );
};

export default BundleGridComponent;
