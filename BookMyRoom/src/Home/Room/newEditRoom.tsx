import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().nonempty("Cabin name is required"),
  maxCapacity: z.number().positive("Must be greater than 0"),
  regularPrice: z.number().positive("Must be greater than 0"),
  discount: z.number().optional(),
  description: z.string().nonempty("Description is required"),
  photo: z.any().refine(file => file && file.length > 0, "Photo is required"),
});

const NewEditRoom = ({ handleCloseEditModal }) => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const closeEditModal = () => {
    handleCloseEditModal();
  };

  const onSubmit = (data) => {
    console.log(data);
    handleCloseEditModal();
  };

  useEffect(() => {
    reset();
  }, [reset]);


  return (
    <>
      <form className="create-cabin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Cabin name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input
            type="number"
            id="maxCapacity"
            {...register("maxCapacity", { valueAsNumber: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="regularPrice">Regular price</label>
          <input
            type="number"
            id="regularPrice"
            {...register("regularPrice", { valueAsNumber: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            id="discount"
            {...register("discount", { valueAsNumber: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description for website</label>
          <textarea
            id="description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Cabin photo</label>
          <input
            type="file"
            id="photo"
            {...register("photo")}
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={closeEditModal}>Cancel</button>
          <button type="submit" disabled={!isValid} className={!isValid ? 'disabled-button' : ''}>Create new cabin</button>
        </div>
      </form>
      <div className="overlay"></div>
    </>
  );
};

export default NewEditRoom;
