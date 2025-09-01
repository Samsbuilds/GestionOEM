import { LigneCommande as TLigneCommande } from "../api/ligneCommande/LigneCommande";

export const LIGNECOMMANDE_TITLE_FIELD = "prixUnitaire";

export const LigneCommandeTitle = (record: TLigneCommande): string => {
  return record.prixUnitaire?.toString() || String(record.id);
};
