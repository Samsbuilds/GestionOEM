import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FactureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_facture" source="dateFacture" />
        <TextField label="ID" source="id" />
        <TextField label="montant_total" source="montantTotal" />
        <TextField label="numero_facture" source="numeroFacture" />
        <TextField label="statut_paiment" source="statutPaiment" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
