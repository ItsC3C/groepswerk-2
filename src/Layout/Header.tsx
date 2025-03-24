import { Search, Heart, ShoppingCart, UserRound } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../css/Layout-css/Header.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import slugify from "slugify";

export function Header() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const { products } = useSelector((state: RootState) => state.products);
  const { bundles } = useSelector((state: RootState) => state.bundles);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filteredProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.types?.some(
          (t) =>
            typeof t === "string" &&
            t.toLowerCase().includes(query.toLowerCase())
        )
    );

    const filteredBundles = bundles.filter(
      (b) =>
        b.name.toLowerCase().includes(query.toLowerCase()) ||
        b.series?.toLowerCase().includes(query.toLowerCase()) ||
        b.type?.toLowerCase().includes(query.toLowerCase())
    );

    const all = [...filteredProducts, ...filteredBundles];

    const unique = Array.from(new Map(all.map((p) => [p.name, p])).values());

    setResults(unique.slice(0, 5));
  }, [query, products, bundles]);

  const handleSelect = (item: any) => {
    const slug = slugify(item.name, { lower: true, strict: true });

    if ("rarity" in item) {
      navigate(`/product/${slug}`);
    } else {
      navigate(`/shop/${slug}`);
    }

    setQuery("");
    setResults([]);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <NavLink to="/" className={styles.logo}>
            Pokéstore
          </NavLink>

          <nav className={styles.nav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `${styles.NavLink} ${isActive ? styles.activeNavLink : ""}`
              }
            >
              Register
            </NavLink>
          </nav>

          <div className={styles.actions}>
            <div className={styles.searchWrapper}>
              <input
                type="search"
                placeholder="What are you looking for?"
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search className={styles.searchIcon} />

              {results.length > 0 && (
                <ul className={styles.searchDropdown}>
                  {results.map((p) => (
                    <li
                      key={p._id}
                      onClick={() => handleSelect(p)}
                      className={styles.searchResultItem}
                    >
                      <span>{p.name}</span>

                      {/* Show rarity if it's a Pokemon card */}
                      {"rarity" in p && p.rarity?.name && (
                        <span className={styles.rarityTag}>
                          {p.rarity.name}
                        </span>
                      )}

                      {/* Show label if it's a bundle */}
                      {"price" in p && !("rarity" in p) && (
                        <span className={styles.bundleTag}>Bundle</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <span className={styles.iconButton}>
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  `${styles.icon} ${isActive ? styles.activeIcon : ""}`
                }
              >
                <Heart />
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${styles.icon} ${isActive ? styles.activeIcon : ""}`
                }
              >
                <ShoppingCart />
              </NavLink>
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  `${styles.icon} ${isActive ? styles.activeIcon : ""}`
                }
              >
                <UserRound />
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
