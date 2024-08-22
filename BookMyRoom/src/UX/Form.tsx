const Form = () => {
    return(
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
    )
}

export default Form;