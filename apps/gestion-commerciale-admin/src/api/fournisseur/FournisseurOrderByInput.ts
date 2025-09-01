import { SortOrder } from "../../util/SortOrder";

export type FournisseurOrderByInput = {
  adresse?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nomFournisseur?: SortOrder;
  produitsLivres?: SortOrder;
  telephone?: SortOrder;
  updatedAt?: SortOrder;
};
