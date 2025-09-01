import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_de_creation" source="dateDeCreation" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="motdepasse" source="motdepasse" />
        <TextInput label="nom_utilisateur" source="nomUtilisateur" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
