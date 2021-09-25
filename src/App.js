import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    );
  }
}

export default App;
