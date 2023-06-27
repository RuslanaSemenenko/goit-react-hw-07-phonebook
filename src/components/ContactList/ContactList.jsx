import { TaskList, TaskListItem } from './ContactList.module.jsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { useGetContactsQuery } from 'redux/contactsSlice';

const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const { filter } = useSelector(getFilter);

  if (!data) {
    return null;
  }

  const visibleContacts = data.filter(
    contact =>
      contact.name &&
      filter &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {!error && isLoading && <div>Loading</div>}
      <TaskList className="List_box">
        {visibleContacts.map(contact => (
          <TaskListItem className="List_item" key={contact.id}>
            <Contact contact={contact} />
          </TaskListItem>
        ))}
      </TaskList>
    </div>
  );
};

export default ContactList;
