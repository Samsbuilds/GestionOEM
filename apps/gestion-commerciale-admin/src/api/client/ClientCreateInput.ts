import { CommandeCreateNestedManyWithoutClientsInput } from "./CommandeCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  adresse?: string | null;
  commandes?: CommandeCreateNestedManyWithoutClientsInput;
  dateDinscription: Date;
  email: string;
  entreprise?: string | null;
  nom: string;
  prenom: string;
  telephone: string;
};
