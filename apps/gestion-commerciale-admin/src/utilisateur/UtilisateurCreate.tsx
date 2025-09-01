import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_de_creation" source="dateDeCreation" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="motdepasse" source="motdepasse" />
        <TextInput label="nom_utilisateur" source="nomUtilisateur" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Create>
  );
};
