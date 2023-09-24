import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../redux/filterSlice';
import { selectFilter } from '../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = evt =>
    dispatch(filterContacts(evt.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleFilterChange} />
      {/* <input
        type="text"
        value={filter}
        onChange={evt => dispatch(filterContacts(evt.currentTarget.value))} */}
      {/* /> */}
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };
