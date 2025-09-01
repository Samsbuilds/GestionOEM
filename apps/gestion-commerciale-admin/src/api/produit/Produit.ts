import { LigneCommande } from "../ligneCommande/LigneCommande";

export type Produit = {
  categorie: string;
  createdAt: Date;
  dateDajout: Date;
  description: string | null;
  id: string;
  ligneCommandes?: Array<LigneCommande>;
  nom: string;
  prixAchat: string;
  prixVente: string | null;
  quantitStock: string;
  reference: string | null;
  statut: string | null;
  updatedAt: Date;
};
