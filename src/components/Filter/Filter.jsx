
import {usersFilterAction} from 'redux/users/users.slice';
import { useDispatch} from 'react-redux';
import { useEffect } from "react";
import { useForm } from "react-hook-form";


export const Filter = () => {
 const dispatch = useDispatch();

  
  const { register, watch } = useForm({
    defaultValues: {
     filter: '',
    }
  });
let filter = watch('filter');

  
  useEffect(() => {
  dispatch(
    usersFilterAction(filter),
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])

    return (
      <>
        <form >
        <h2>Filter</h2>
          <input {...register("filter")} type="text" />
        </form>
      </>
          
    );
}

// Filter.propTypes = {
//   handleContacts: PropTypes.func.isRequired,
// };