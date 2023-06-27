import React from 'react';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Contact = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(contact.id);
      Notify.success('Contact was deleted from your phonebook');
    } catch (error) {
      Notify.failure('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="List_item">
      <span>
        {contact.name}: <span className="List_span">{contact.number}</span>
      </span>
      <button className="List_button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};
