import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FactureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Factures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_facture" source="dateFacture" />
        <TextField label="ID" source="id" />
        <TextField label="montant_total" source="montantTotal" />
        <TextField label="numero_facture" source="numeroFacture" />
        <TextField label="statut_paiment" source="statutPaiment" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
