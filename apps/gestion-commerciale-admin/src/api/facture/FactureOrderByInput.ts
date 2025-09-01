import { SortOrder } from "../../util/SortOrder";

export type FactureOrderByInput = {
  createdAt?: SortOrder;
  dateFacture?: SortOrder;
  id?: SortOrder;
  montantTotal?: SortOrder;
  numeroFacture?: SortOrder;
  statutPaiment?: SortOrder;
  updatedAt?: SortOrder;
};
