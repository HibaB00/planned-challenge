import { useForm, SubmitHandler } from "react-hook-form"
import { submit } from "../../services/memories";
import { NewMemory } from "../../types/Memory";
import { useAuth } from "../../contexts/AuthContext";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMemory>()

  const { currentUser } = useAuth();

  if (!currentUser) return <p>YOU DON'T HAVE ACCESS</p>

  const create: SubmitHandler<NewMemory> = (data) => submit({...data, user_id: currentUser.id}).then(() => window.location = "/")

  return (
    <div>
      <form onSubmit={handleSubmit(create)}>
      <input {...register("name", { required: true })} />
      <input {...register("description", { required: true })} />
      <input {...register("image_url", { required: true })} />
      <input type="date" {...register("timestamp", { required: true })} />
      {errors.name && <span>This field is required</span>}
      {errors.name && <span>This field is required</span>}
      {errors.description && <span>This field is required</span>}
      {errors.image_url && <span>This field is required</span>}
      {errors.timestamp && <span>This field is required</span>}
      <input type="submit" />
      </form>
    </div>
  )
}

export default Create;