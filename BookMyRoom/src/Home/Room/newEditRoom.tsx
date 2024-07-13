import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSelector } from 'react-redux';

const schema = z.object({
  name: z.string(),
  maxCapacity: z.number().positive(),
  regularPrice: z.number().positive(),
  discount: z.number().optional(),
  description: z.string(),
  photo: z.string(),
});

const NewEditRoom = ({ handleCloseEditModal }) => {
  const currentRoom = useSelector((state) => state.rooms.currentRoom);
  console.log('current room', currentRoom);

  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: currentRoom, 
  });

  useEffect(() => {
    reset(currentRoom); 
  }, [currentRoom, reset]);

  const closeEditModal = () => {
    handleCloseEditModal();
  };

  const onSubmit = (data) => {
    console.log(data);
    closeEditModal();
  };

  return (
    <>
      <form className="create-cabin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Cabin name</label>
          <input type="text" id="name" {...register('name')} />
        </div>
        <div className="form-group">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input type="number" id="maxCapacity" {...register('maxCapacity')} />
        </div>
        <div className="form-group">
          <label htmlFor="regularPrice">Regular price</label>
          <input type="number" id="regularPrice" {...register('regularPrice')} />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input type="number" id="discount" {...register('discount')} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description for website</label>
          <textarea id="description" {...register('description')}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Cabin photo</label>
          <input type="file" id="photo" {...register('photo')} />
        </div>
        <div className="form-actions">
          <button type="button" onClick={closeEditModal}>Cancel</button>
          <button type="submit" disabled={!isValid}>Create new cabin</button>
        </div>
      </form>
      <div className="overlay"></div>
    </>
  );
};

export default NewEditRoom;
