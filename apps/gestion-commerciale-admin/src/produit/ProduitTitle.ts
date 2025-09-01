import { Produit as TProduit } from "../api/produit/Produit";

export const PRODUIT_TITLE_FIELD = "categorie";

export const ProduitTitle = (record: TProduit): string => {
  return record.categorie?.toString() || String(record.id);
};
