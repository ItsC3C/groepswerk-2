import React from "react";
import { PokemonBundle } from "../../types";
import styles from "../../css/Components-css/ShopPageCSS/ProductGridComponent.module.css";
import { BundleCard } from "../HomeComponents/BundleCard";

interface BundleGridProps {
  bundles: PokemonBundle[];
}

const BundleGridComponent: React.FC<BundleGridProps> = ({ bundles }) => {
  if (!bundles.length) return <p>No bundles found.</p>;

  return (
    <section className={styles.grid}>
      {bundles.map((bundle) => (
        <BundleCard key={bundle._id} {...bundle} />
      ))}
    </section>
  );
};

export default BundleGridComponent;
