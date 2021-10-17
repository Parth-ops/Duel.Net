import React from "react";
import { useLocation} from 'react-router';

const ViewTeams = ({updateUser}) =>{

  const location = useLocation();
  var data = location.state.prop
  console.log(data)
    return(
        <div>
            View Teams
        </div>
    )
}

export default ViewTeams