import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FournisseurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Fournisseurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="adresse" source="adresse" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nom_fournisseur" source="nomFournisseur" />
        <TextField label="produits_livres" source="produitsLivres" />
        <TextField label="telephone" source="telephone" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
