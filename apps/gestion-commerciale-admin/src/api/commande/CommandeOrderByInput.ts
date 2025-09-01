import { SortOrder } from "../../util/SortOrder";

export type CommandeOrderByInput = {
  ateCommande?: SortOrder;
  client_idId?: SortOrder;
  createdAt?: SortOrder;
  etat?: SortOrder;
  id?: SortOrder;
  montantTotal?: SortOrder;
  numeroCommande?: SortOrder;
  updatedAt?: SortOrder;
};
