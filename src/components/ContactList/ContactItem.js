import s from './ContactList.module.css';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.text}>
        {contact.name}: {contact.number}
      </p>

      <button
        className={s.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export { ContactItem };
