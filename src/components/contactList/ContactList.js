import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const deletContact = (contactId) => {
    dispatch(actions.deleteContact(contactId));
  };
  const getFilterContacts = (state) => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contacts = useSelector(getFilterContacts);
  return (
    <ul className={styles.contactList}>
      {contacts.map(
        ({ id, name, number }) =>
          name.length > 0 &&
          number.length > 0 && (
            <li key={id} className={styles.list}>
              {name}: {number}
              <button
                className={styles.button}
                type="button"
                onClick={() => deletContact(id)}
              >
                Delete
              </button>
            </li>
          )
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
