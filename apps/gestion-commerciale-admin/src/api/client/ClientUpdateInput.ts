import { CommandeUpdateManyWithoutClientsInput } from "./CommandeUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  adresse?: string | null;
  commandes?: CommandeUpdateManyWithoutClientsInput;
  dateDinscription?: Date;
  email?: string;
  entreprise?: string | null;
  nom?: string;
  prenom?: string;
  telephone?: string;
};
