import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  maxCapacity: z.number().positive("Must be a positive number"),
  regularPrice: z.number().positive("Must be a positive number"),
  discount: z.number().optional(),
  description: z.string().min(1, "Description is required"),
  photo: z.string().optional(),
});

const NewEditRoom = ({ room, setOpenEditModal }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      maxCapacity: '',
      regularPrice: '',
      discount: '',
      description: '',
      photo: '',
    },
  });

  useEffect(() => {
    if (room) {
      reset({
        name: room.name,
        maxCapacity: room.maxCapacity,
        regularPrice: room.regularPrice,
        discount: room.discount,
        description: room.description,
        photo: room.image, // assuming the 'photo' field is 'image' in your room object
      });
    }
  }, [room, reset]);

  const closeEditModal = () => {
    setOpenEditModal(false);
  };

  const onSubmit = (data) => {
    console.log('Submit data:', data);
    // Logika za submit formulara
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
          <button type="button" onClick={closeEditModal}>Cancel</button>
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
