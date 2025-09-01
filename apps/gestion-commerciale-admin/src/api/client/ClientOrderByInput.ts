import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  adresse?: SortOrder;
  createdAt?: SortOrder;
  dateDinscription?: SortOrder;
  email?: SortOrder;
  entreprise?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  prenom?: SortOrder;
  telephone?: SortOrder;
  updatedAt?: SortOrder;
};
