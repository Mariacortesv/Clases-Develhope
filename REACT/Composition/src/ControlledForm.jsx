import { useForm } from "./useForm";

export function ControlledForm() {
  const { formData, handleInputChange } = useForm();

  return (
    <form>
      <label>
        Username:
        <input
          onChange={handleInputChange}
          value={formData.username}
          name="username"
          type="text"
        />
      </label>

      <input
        name="password"
        type="password"
        onChange={handleInputChange}
        value={formData.password}
      />
    </form>
  );
}
