import { SortOrder } from "../../util/SortOrder";

export type ProduitOrderByInput = {
  categorie?: SortOrder;
  createdAt?: SortOrder;
  dateDajout?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  prixAchat?: SortOrder;
  prixVente?: SortOrder;
  quantitStock?: SortOrder;
  reference?: SortOrder;
  statut?: SortOrder;
  updatedAt?: SortOrder;
};
