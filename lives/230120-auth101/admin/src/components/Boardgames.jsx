import {
  Datagrid,
  DateField,
  List,
  NumberField,
  TextField,
  ImageField,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export function BoardgameList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="imgUrl" />
        <NumberField source="minPlayers" />
        <NumberField source="maxPlayers" />
        <NumberField source="minDuration" />
        <NumberField source="maxDuration" />
        <NumberField source="minAge" />
        <DateField source="createdAt" />
        <NumberField source="year" />
        <TextField source="idOwner" />
      </Datagrid>
    </List>
  );
}

export function BoardgameEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="name" />
        <TextInput source="imgUrl" />
        <TextInput source="description" />
        <NumberInput source="minPlayers" />
        <NumberInput source="maxPlayers" />
        <NumberInput source="minDuration" />
        <NumberInput source="maxDuration" />
        <NumberInput source="minAge" />
        <DateInput source="createdAt" />
        <NumberInput source="year" />
        <TextInput source="idOwner" />
      </SimpleForm>
    </Edit>
  );
}
