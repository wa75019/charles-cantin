import styles from './contact.module.css'
import Layout from '../../components/layout/layout'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("moqrjadz");
  if (state.succeeded) {
      return <p>Merci pour votre message !</p>;
  }
  return (
    <form onSubmit={handleSubmit} method='POST' action='https://formspree.io/f/moqrjadz' className={styles.form}>
          <label htmlFor="lname">
            Nom :
          </label>
          <input
            id="lname"
            type="lname" 
            name="lname"
            required
          />
          <ValidationError 
            prefix="Lname" 
            field="lname"
            errors={state.errors}
          />
          <label htmlFor="fname">
            Prénom :
          </label>
          <input
            id="fname"
            type="fname" 
            name="fname"
            required
          />
          <ValidationError 
            prefix="Fname" 
            field="fname"
            errors={state.errors}
          />  
        <label htmlFor="email">
          Adresse E-mail :
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="email">
          Message :
        </label>
        <textarea
          id="message"
          name="message"
          rows= "5"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      <button type="submit" disabled={state.submitting}>
        Envoyez
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}