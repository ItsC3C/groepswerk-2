export const typeToSlug: Record<string, string> = {
  etb: "elite-trainer-boxes",
  box: "booster-boxes",
  pack: "booster-packs",
  "booster-bundle": "booster-bundles",
};

export const slugToType: Record<string, string> = Object.fromEntries(
  Object.entries(typeToSlug).map(([type, slug]) => [slug, type])
);
