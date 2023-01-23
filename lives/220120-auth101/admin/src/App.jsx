import { Admin, Resource } from "react-admin";
import dataProvider from "@services/dataProvider";
import { BoardgameEdit, BoardgameList } from "@components/Boardgames";
import authProvider from "@services/authProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="boardgames" list={BoardgameList} edit={BoardgameEdit} />
    </Admin>
  );
}

export default App;
