import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FournisseurWhereInput = {
  adresse?: StringNullableFilter;
  id?: StringFilter;
  nomFournisseur?: StringFilter;
  produitsLivres?: StringNullableFilter;
  telephone?: StringNullableFilter;
};
