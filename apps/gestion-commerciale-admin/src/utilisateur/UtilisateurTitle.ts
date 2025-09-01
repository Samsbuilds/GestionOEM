import { Utilisateur as TUtilisateur } from "../api/utilisateur/Utilisateur";

export const UTILISATEUR_TITLE_FIELD = "motdepasse";

export const UtilisateurTitle = (record: TUtilisateur): string => {
  return record.motdepasse?.toString() || String(record.id);
};
