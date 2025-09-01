import { Commande } from "../commande/Commande";
import { Produit } from "../produit/Produit";

export type LigneCommande = {
  commande_id?: Commande;
  createdAt: Date;
  id: string;
  prixUnitaire: string;
  produit_id?: Produit;
  quantit: string;
  remise: string | null;
  totalLignes: string;
  updatedAt: Date;
};
