import { useForm, SubmitHandler } from 'react-hook-form';
import { supabase } from '../../supabase/supabaseClient';
import { getRooms } from '../../store/roomsSlice';
import { useDispatch } from 'react-redux';
import Form from '../../UX/Form';

type Room = {
  id?: number;
  name?: string;
  maxCapacity?: number;
  regularPrice?: number;
  discount?: number;
  description?: string;
  image?: string;
}

type NewEditRoomProps = {
  room?: Room;
  closeMenuModal: (value: boolean) => void;
}

const NewEditRoom = ({ room = {}, closeMenuModal }: NewEditRoomProps) => {
  const dispatch = useDispatch();
  const isEditSeason = room.id ? true : false;

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<Room>({
    defaultValues: isEditSeason ? room : {},
    mode: 'onChange', 
  });

  const closeEditModal = () => {
    closeMenuModal(false);
  };

  const handleAddSubmit: SubmitHandler<Room> = async (newRoom) => {
    console.log('newRoom', newRoom);

    const { error } = await supabase.from('Bedrooms').insert(newRoom);

    if (error) {
      console.error('Error adding room:', error);
    } else {
      console.log('Room added successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      closeMenuModal(false);
    }
  };

  const handleEditSubmit: SubmitHandler<Room> = async (updatedRoom) => {
    console.log('updatedRoom', updatedRoom);

    const { error } = await supabase.from('Bedrooms').update(updatedRoom).eq('id', room.id);

    if (error) {
      console.error('Error updating room:', error);
    } else {
      console.log('Room updated successfully');
      const { data: rooms, error: fetchError } = await supabase.from('Bedrooms').select('*');
      if (!fetchError) {
        dispatch(getRooms(rooms));
      }
      closeMenuModal(false);
    }
  };

  const onSubmit: SubmitHandler<Room> = (data) => {
    console.log('onSubmit', data);
    if (isEditSeason) {
      handleEditSubmit(data);
    } else {
      handleAddSubmit(data);
    }
  };

  return (
    <Form
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      isEditSeason={isEditSeason}
      isValid={isValid}
      closeEditModal={closeEditModal}
    />
  );
};

export default NewEditRoom;
