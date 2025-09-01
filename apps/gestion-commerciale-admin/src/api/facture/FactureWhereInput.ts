import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FactureWhereInput = {
  id?: StringFilter;
  numeroFacture?: StringNullableFilter;
  statutPaiment?: StringFilter;
};
