import { useSearchParams } from "react-router-dom";

const Filter = ({options }) => {
    const [searchParams, setSearchParams] = useSearchParams()
   
    function handleClick(value) {
        searchParams.set('status', value)
        setSearchParams(searchParams)
    }
    return (
      <div>
        {options.map((o) => (
          <button
          onClick={() => handleClick(o)}
          key={o}
          >
            {o}
          </button>
        ))}
        </div>
    );
  };

  export default Filter;