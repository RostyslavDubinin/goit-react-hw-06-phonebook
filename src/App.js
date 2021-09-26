import ContactForm from "./components/contactForm";
import Filter from "./components/filter";
import ContactList from "./components/contactList";

function App() {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
