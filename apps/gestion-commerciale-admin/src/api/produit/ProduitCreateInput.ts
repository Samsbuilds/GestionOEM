import { LigneCommandeCreateNestedManyWithoutProduitsInput } from "./LigneCommandeCreateNestedManyWithoutProduitsInput";

export type ProduitCreateInput = {
  categorie: string;
  dateDajout: Date;
  description?: string | null;
  ligneCommandes?: LigneCommandeCreateNestedManyWithoutProduitsInput;
  nom: string;
  prixAchat: string;
  prixVente?: string | null;
  quantitStock: string;
  reference?: string | null;
  statut?: string | null;
};
