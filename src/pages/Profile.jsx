import { useForm } from 'react-hook-form';
import { saveProfile } from '../api/profile';

function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await saveProfile(data);
    if (response.success) {
      alert('Perfil guardado con éxito');
    } else {
      alert('Error al guardar el perfil');
    }
  };

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>Este campo es obligatorio</span>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Email no válido</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Profile;
