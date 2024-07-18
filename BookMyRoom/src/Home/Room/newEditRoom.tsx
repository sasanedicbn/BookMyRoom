import { useForm } from 'react-hook-form';

const NewEditRoom = ({ room = {}, setOpenEditModal, closeMenuModal, handleEditSubmit }) => {
  console.log('mounted');
  const isEditSeason = room.id ? true : false;
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: isEditSeason ? room : {}
  });

  const closeEditModal = () => {
    setOpenEditModal(false);
    closeMenuModal(false);
  };

  const onSubmit = (data) => {
    if(isEditSeason){
    handleEditSubmit({ ...data })} else{
      console.log('add new cabin')
    }
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
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description for website</label>
          <div className='input-error'>
            <textarea
              id="description"
              {...register('description')}
            ></textarea>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="image">Cabin photo</label>
          <div className='input-error'>
            <input
              type="file"
              id="image"
              {...register('image')}
            />
            {errors.image ? <p>{errors?.image?.message}</p> : ''}
          </div>
        </div>
        <div className="form-actions">
          <button type="button" onClick={closeEditModal}>Cancel</button>
          <button
            type="submit"
            className={isValid ? 'green' : 'grey'}
          >
            {isEditSeason ? 'Save' : 'Add new cabin'}
          </button>
        </div>
      </form>
      <div className="overlay" onClick={closeEditModal}></div>
    </>
  );
};

export default NewEditRoom;
