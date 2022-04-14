export const formatUser = (userType) => {
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
