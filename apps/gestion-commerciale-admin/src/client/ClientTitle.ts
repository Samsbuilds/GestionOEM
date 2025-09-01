import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "adresse";

export const ClientTitle = (record: TClient): string => {
  return record.adresse?.toString() || String(record.id);
};
