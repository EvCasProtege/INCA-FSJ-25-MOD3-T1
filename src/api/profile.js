export const saveProfile = async (profileData) => {
    // Simula una llamada a una API
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Perfil guardado:', profileData);
        resolve({ success: true });
      }, 1000);
    });
  };
  