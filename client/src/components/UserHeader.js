const UserHeader = (props) => {
  const { user } = props;

  const formatUser = (userType) => {
    switch(userType) {
      case 'Admin': {
        return 'Administrador'
      }
      case 'User': {
        return 'Usuario'
      }
      case 'Guest': {
        return 'Invitado'
      }
      default: return userType
    }
  }

  return (
    <header>
      <h1>Bienvenido {formatUser(user)}!</h1>
    </header>
  )
}

export default UserHeader;
