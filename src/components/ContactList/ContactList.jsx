
import React from 'react';

import { deleteContact  } from 'redux/users/users.operations';
import { useDispatch, useSelector } from "react-redux";
import { getStatusFilter, getTasks } from "redux/users/users.selectors";

 
export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  const normalizedFilter = filter.toLowerCase();
  const contacts = useSelector(getTasks);
  const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
      );

  const handleDelete = idx => {
dispatch(
      deleteContact(idx),
    );
	};

    return (
      <>
         <ul>
            {
            filteredContacts.map(({ id, name, number }) => (
                
                <li key={id}>
                  <span> {name}: {number}</span>
                  <button onClick={() =>handleDelete(id)}>Delete</button>
                </li>
              ))}
        </ul>
      </>
          
    );
}
