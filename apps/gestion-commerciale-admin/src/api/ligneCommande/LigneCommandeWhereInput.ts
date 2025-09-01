import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LigneCommandeWhereInput = {
  id?: StringFilter;
  remise?: StringNullableFilter;
};
