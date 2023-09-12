import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { filterContacts } from 'components/redux/filterSlice';
import { selectFilter } from 'components/redux/selectors';

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
