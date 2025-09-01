import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  createdAt?: SortOrder;
  dateDeCreation?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  motdepasse?: SortOrder;
  nomUtilisateur?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
