import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import { addContact  } from "redux/users/users.operations";

export const ContactForm = () => {
    const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
      actions.resetForm();
      dispatch(
      addContact(values) ,
    );
    };
  
    return (
      <>
        <Formik
       initialValues={{ name: '', number: '' }}
       onSubmit={handleSubmit}
        >
<Form>
  <h2>Name</h2>
  <Field       
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>
  <ErrorMessage name="name" component="div" />
  <h2>Number</h2>
  <Field
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required/>
<ErrorMessage name="number" component="div" />
<button type="submit">
  Add contact
</button>
         </Form>   
     </Formik>
      </>
          
    );
  }

