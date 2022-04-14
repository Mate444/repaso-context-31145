import { formatUser } from "../utils/utils";
const Button = (props) => {
  const { changeUser, user } = props;
  return (
    <div>
      <button onClick={() => changeUser(user)}>{formatUser(user)}</button>
    </div>  
  )
}

export default Button;
