import {Link} from "react-router-dom";
import UserPage from "./UserPage";
import Items from "./Object";
import Login from "./Login";
 const Protected = (props) => {
 if (props.value) {
    {
        props.value?<UserPage data={Items}></UserPage>:<Login></Login>
      }
 }
 
};
export default Protected