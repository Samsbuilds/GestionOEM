import { SortOrder } from "../../util/SortOrder";

export type LigneCommandeOrderByInput = {
  commande_idId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  prixUnitaire?: SortOrder;
  produit_idId?: SortOrder;
  quantit?: SortOrder;
  remise?: SortOrder;
  totalLignes?: SortOrder;
  updatedAt?: SortOrder;
};
