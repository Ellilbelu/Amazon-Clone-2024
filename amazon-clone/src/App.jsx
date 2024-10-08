import "./App.css";
import "./index.css";
import Routing from "./Routing";
import { DataContext } from "./Components/Data Provider/DataProvider";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import { useContext, useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser
      })
      } else {
        dispatch({
          type : Type.SET_USER,
          user : null
        });
      }
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
