import { LigneCommandeUpdateManyWithoutProduitsInput } from "./LigneCommandeUpdateManyWithoutProduitsInput";

export type ProduitUpdateInput = {
  categorie?: string;
  dateDajout?: Date;
  description?: string | null;
  ligneCommandes?: LigneCommandeUpdateManyWithoutProduitsInput;
  nom?: string;
  prixAchat?: string;
  prixVente?: string | null;
  quantitStock?: string;
  reference?: string | null;
  statut?: string | null;
};
