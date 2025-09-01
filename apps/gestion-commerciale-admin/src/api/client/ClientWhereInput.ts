import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommandeListRelationFilter } from "../commande/CommandeListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  adresse?: StringNullableFilter;
  commandes?: CommandeListRelationFilter;
  dateDinscription?: DateTimeFilter;
  email?: StringFilter;
  entreprise?: StringNullableFilter;
  id?: StringFilter;
  nom?: StringFilter;
  prenom?: StringFilter;
  telephone?: StringFilter;
};
