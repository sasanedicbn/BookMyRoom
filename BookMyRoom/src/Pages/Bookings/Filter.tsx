import { useSearchParams } from "react-router-dom";
import Button from "../../UX/Button";

const Filter = ({options }) => {
    const [searchParams, setSearchParams] = useSearchParams()
   
    function handleClick(value) {
        searchParams.set('status', value)
        setSearchParams(searchParams)
    }
    return (
      <div>
        {options.map((o) => (
          <Button
          onClick={() => handleClick(o)}
          key={o}
          type="success"
          >
            {o}
          </Button>
        ))}
        </div>
    );
  };

  export default Filter;