import { Fournisseur as TFournisseur } from "../api/fournisseur/Fournisseur";

export const FOURNISSEUR_TITLE_FIELD = "adresse";

export const FournisseurTitle = (record: TFournisseur): string => {
  return record.adresse?.toString() || String(record.id);
};
