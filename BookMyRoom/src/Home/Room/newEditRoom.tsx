import { useForm } from 'react-hook-form';
import { supabase } from '../../superbase/superbaseClient';
import { getRooms } from '../../store/roomsSlice';
import { useDispatch } from 'react-redux';

const NewEditRoom = ({ room = {}, setOpenEditModal, closeMenuModal, handleEditSubmit, closeEditNewRoom }) => {
  const dispatch = useDispatch();
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
    if(!isEditSeason){
      closeEditNewRoom(); 
    }
  };

  const handleAddSubmit = async (newRoom) => {
    console.log('newRoom', newRoom);

    const { error } = await supabase
      .from('Bedrooms')
      .insert(newRoom);

    if (error) {
      console.error('Error adding row:', error);
    } else {
      console.log('Room added successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      closeMenuModal(false);
    }
  };

  const onSubmit = (data) => {
    console.log('kad je add', data);
    if (isEditSeason) {
      handleEditSubmit({ ...data });
    } else {
      handleAddSubmit(data);
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
          <label htmlFor="image">{isEditSeason ? 'Cabin photo' : 'Cabin photo (URL)' }</label>
          <div className='input-error'>
            <input
              type="input"
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
