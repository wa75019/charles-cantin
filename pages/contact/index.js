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
      <div className={styles.name}>
        <div classname={styles.formStyle}>
          <label htmlFor="lname">
            Nom
          </label>
          <input
            id="lname"
            type="lname" 
            name="lname"
          />
          <ValidationError 
            prefix="Lname" 
            field="lname"
            errors={state.errors}
          />
        </div>
        <div classname={styles.formStyle}>
          <label htmlFor="fname">
            Prénom
          </label>
          <input
            id="fname"
            type="fname" 
            name="fname"
          />
          <ValidationError 
            prefix="Fname" 
            field="fname"
            errors={state.errors}
          />
        </div>
      </div>
      <div className={styles.formStyle}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className={styles.formStyle}>
        <label htmlFor="email">
          Message
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      
      <button type="submit" disabled={state.submitting}>
        Submit
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