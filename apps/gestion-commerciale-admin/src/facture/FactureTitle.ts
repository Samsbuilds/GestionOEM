import { Facture as TFacture } from "../api/facture/Facture";

export const FACTURE_TITLE_FIELD = "montantTotal";

export const FactureTitle = (record: TFacture): string => {
  return record.montantTotal?.toString() || String(record.id);
};
