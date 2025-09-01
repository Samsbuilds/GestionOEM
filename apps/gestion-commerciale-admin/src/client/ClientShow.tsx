import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "./ClientTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adresse" source="adresse" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_dinscription" source="dateDinscription" />
        <TextField label="email" source="email" />
        <TextField label="entreprise" source="entreprise" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Prenom" source="prenom" />
        <TextField label="Telephone" source="telephone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Commande"
          target="client_idId"
          label="Commandes"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="date_commande" source="ateCommande" />
            <ReferenceField
              label="client_id"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="etat" source="etat" />
            <TextField label="ID" source="id" />
            <TextField label="montant_total" source="montantTotal" />
            <TextField label="numero_commande" source="numeroCommande" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
