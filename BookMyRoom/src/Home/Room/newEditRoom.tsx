import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSelector } from 'react-redux';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  maxCapacity: z.preprocess((value) => Number(value), z.number().positive("Must be a positive number")),
  regularPrice: z.preprocess((value) => Number(value), z.number().positive("Must be a positive number")),
  discount: z.preprocess((value) => value === "" ? undefined : Number(value), z.number().positive("Must be a positive number").optional()),
  description: z.string().min(1, "Description is required"),
  photo: z.string().optional()
});

const NewEditRoom = ({ handleCloseEditModal, handleEditSubmit }) => {
  const currentRoom = useSelector((state) => state.rooms.currentRoom);
  const { isEditModalOpen } = useSelector((state) => state.modals);

  console.log('currentRoom:', currentRoom);
  console.log('isEditModalOpen:', isEditModalOpen);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: isEditModalOpen ? {
      ...currentRoom,
      maxCapacity: String(currentRoom.maxCapacity || ''),
      regularPrice: String(currentRoom.regularPrice || ''),
      discount: String(currentRoom.discount || ''),
    } : {
      name: '',
      maxCapacity: '',
      regularPrice: '',
      discount: '',
      description: '',
      photo: '',
    },
  });

  useEffect(() => {
    console.log('Resetting form with:', currentRoom);
    if (isEditModalOpen) {
      reset({
        ...currentRoom,
        maxCapacity: String(currentRoom.maxCapacity || ''),
        regularPrice: String(currentRoom.regularPrice || ''),
        discount: String(currentRoom.discount || ''),
      });
    } else {
      reset({
        name: '',
        maxCapacity: '',
        regularPrice: '',
        discount: '',
        description: '',
        photo: '',
      });
    }
  }, [currentRoom, isEditModalOpen, reset]);

  const onSubmit = (data) => {
    console.log('sasa');
    console.log('data:', data);
    console.log('iz on submita currentRoom:', currentRoom);
    handleEditSubmit({ ...currentRoom, ...data });
  };

  return (
    <>
      <form className="create-cabin-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Cabin name</label>
          <input
            type="text"
            id="name"
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input
            type="number"
            id="maxCapacity"
            {...register('maxCapacity')}
          />
          {errors.maxCapacity && <span>{errors.maxCapacity.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="regularPrice">Regular price</label>
          <input
            type="number"
            id="regularPrice"
            {...register('regularPrice')}
          />
          {errors.regularPrice && <span>{errors.regularPrice.message}</span>}
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
          {errors.description && <span>{errors.description.message}</span>}
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
          <button type="button" onClick={handleCloseEditModal}>Cancel</button>
          <button 
            type="submit" 
            disabled={!isValid} 
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

