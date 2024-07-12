const NewEditCabin = () => {
    return (
    <>
      <form className="create-cabin-form">
        <div className="form-group">
          <label htmlFor="name">Cabin name</label>
          <input
            type="text"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxCapacity">Maximum capacity</label>
          <input
            type="number"
            id="maxCapacity"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="regularPrice">Regular price</label>
          <input
            type="number"
            id="regularPrice"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount</label>
          <input
            type="number"
            id="discount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description for website</label>
          <textarea
            id="description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="photo">Cabin photo</label>
          <input
            type="file"
            id="photo"
            required
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={() => {}}>Cancel</button>
          <button type="submit">Create new cabin</button>
        </div>
      </form>
      <div className="overlay"></div>
      </>
    );
  };
  
  export default NewEditCabin;
  