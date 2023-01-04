import { createContext, useState } from "react";

// Créer un contexte pour le thème
const UserContext = createContext();

// Créer un fournisseur pour le contexte de thème
function UserProvider({ children }) {
  const [userId] = useState(1);

  return (
    // Fournir le thème actuel au contexte
    <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
export { UserContext };
