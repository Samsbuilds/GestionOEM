import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";

export const CommandeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Commandes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="date_commande" source="ateCommande" />
        <ReferenceField label="client_id" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="etat" source="etat" />
        <TextField label="ID" source="id" />
        <TextField label="montant_total" source="montantTotal" />
        <TextField label="numero_commande" source="numeroCommande" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
