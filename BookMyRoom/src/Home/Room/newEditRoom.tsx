import { useForm } from 'react-hook-form';

const NewEditRoom = ({ room = {}, setOpenEditModal, closeMenuModal, handleEditSubmit }) => {
  console.log('mounted');
  const isEditSeasen = room.id ? true : false;
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: isEditSeasen ? room : {}
  });

  const closeEditModal = () => {
    setOpenEditModal(false);
    closeMenuModal(false);
  };

  const onSubmit = (data) => {
    handleEditSubmit({ ...data, id: room.id });
  };

  return (
    <>
      <form className="create-cabin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Cabin name</label>
          <div className='input-error'>
            <input
              type="text"
              id="name"
              {...register('name', {
                required: 'Cabin name is required'
              })}
            />
            {errors.name ? <p>{errors?.name?.message}</p> : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <div className='input-error'>
            <input
              type="number"
              id="maxCapacity"
              {...register('maxCapacity', {
                required: 'MaxCapacity is required'
              })}
            />
            {errors.maxCapacity ? <p>{errors?.maxCapacity?.message}</p> : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="regularPrice">Regular price</label>
          <div className='input-error'>
            <input
              type="number"
              id="regularPrice"
              {...register('regularPrice', {
                required: 'Price is required'
              })}
            />
            {errors.regularPrice ? <p>{errors?.regularPrice?.message}</p> : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <div className='input-error'>
            <input
              type="number"
              id="discount"
              {...register('discount')}
            />
            {errors.discount ? <p>{errors?.discount?.message}</p> : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description for website</label>
          <div className='input-error'>
            <textarea
              id="description"
              {...register('description')}
            ></textarea>
            {errors.description ? <p>{errors?.description?.message}</p> : ''}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Cabin photo</label>
          <div className='input-error'>
            <input
              type="file"
              id="photo"
              {...register('photo')}
            />
            {errors.photo ? <p>{errors?.photo?.message}</p> : ''}
          </div>
        </div>
        <div className="form-actions">
          <button type="button" onClick={closeEditModal}>Cancel</button>
          <button
            type="submit"
            className={isValid ? 'green' : 'grey'}
          >
            {isEditSeasen ? 'Save' : 'Add new cabin'}
          </button>
        </div>
      </form>
      <div className="overlay" onClick={closeEditModal}></div>
    </>
  );
};

export default NewEditRoom;
