import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProduitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Produits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Categorie" source="categorie" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_dajout" source="dateDajout" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="prix_achat" source="prixAchat" />
        <TextField label="prix_vente" source="prixVente" />
        <TextField label="quantité_stock" source="quantitStock" />
        <TextField label="Reference" source="reference" />
        <TextField label="statut" source="statut" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
