import { useForm } from 'react-hook-form';

// const schema = z.object({
//   name: z.string().min(1, "Name is required"),
//   maxCapacity: z.string(),
//   regularPrice: z.string(),
//   discount: z.string(),
//   description: z.string().min(1, "Description is required"),
//   photo: z.string().optional(),
// });

const NewEditRoom = ({ room={}, setOpenEditModal }) => {
  console.log('mountet')
  const isEditSeasen = room.id ? true : false
  const {
    register,
    handleSubmit,
    formState: { isValid, errors},
    reset,
  } = useForm({
    defaultValues: isEditSeasen ? room : {}
  });
  
  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  const onSubmit = (data) => {
    console.log('Submit data:', data);

  };

  return (
    <>
      <form className="create-cabin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Cabin name</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'Cabin name is required'
            })}
          />
          {<p>{errors?.name?.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input
            type="number"
            id="maxCapacity"
            {...register('maxCapacity')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="regularPrice">Regular price</label>
          <input
            type="number"
            id="regularPrice"
            {...register('regularPrice')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            id="discount"
            {...register('discount')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description for website</label>
          <textarea
            id="description"
            {...register('description')}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Cabin photo</label>
          <input
            type="file"
            id="photo"
            {...register('photo')}
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={closeEditModal}>Cancel</button>
          <button
            type="submit"
            // disabled={!isValid}
            className={isValid ? 'green' : 'grey'}
          >
            Save
          </button>
        </div>
      </form>
      <div className="overlay"></div>
    </>
  );
};

export default NewEditRoom;
