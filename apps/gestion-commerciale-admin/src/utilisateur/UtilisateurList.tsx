import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UtilisateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Utilisateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_creation" source="dateDeCreation" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="motdepasse" source="motdepasse" />
        <TextField label="nom_utilisateur" source="nomUtilisateur" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
