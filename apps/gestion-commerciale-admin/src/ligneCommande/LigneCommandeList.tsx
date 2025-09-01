import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMANDE_TITLE_FIELD } from "../commande/CommandeTitle";
import { PRODUIT_TITLE_FIELD } from "../produit/ProduitTitle";

export const LigneCommandeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Ligne_Commandes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="commande_id"
          source="commande.id"
          reference="Commande"
        >
          <TextField source={COMMANDE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="prix_unitaire" source="prixUnitaire" />
        <ReferenceField
          label="produit_id"
          source="produit.id"
          reference="Produit"
        >
          <TextField source={PRODUIT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantité" source="quantit" />
        <TextField label="remise" source="remise" />
        <TextField label="total_lignes" source="totalLignes" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
