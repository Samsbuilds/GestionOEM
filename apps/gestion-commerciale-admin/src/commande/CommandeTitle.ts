import { Commande as TCommande } from "../api/commande/Commande";

export const COMMANDE_TITLE_FIELD = "ateCommande";

export const CommandeTitle = (record: TCommande): string => {
  return record.ateCommande?.toString() || String(record.id);
};
