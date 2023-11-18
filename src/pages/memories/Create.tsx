import { useForm } from "react-hook-form"
import { submit } from "../../services/memories";
import { NewMemory } from "../../types/Memory";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewMemory>()

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
      <input {...register("name", { required: true })} />
      <input {...register("description", { required: true })} />
      <input type="date" {...register("timestamp", { required: true })} />
      {errors.name && <span>This field is required</span>}
      {errors.description && <span>This field is required</span>}
      {errors.timestamp && <span>This field is required</span>}
      <input type="submit" />
      </form>
    </div>
  )
}

export default Create;