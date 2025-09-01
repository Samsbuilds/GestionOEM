import { Commande } from "../commande/Commande";

export type Client = {
  adresse: string | null;
  commandes?: Array<Commande>;
  createdAt: Date;
  dateDinscription: Date;
  email: string;
  entreprise: string | null;
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  updatedAt: Date;
};
