interface Contact {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  tags?: string[];
}

let contacts: Contact[] = [];

function addContact(contact: Omit<Contact, "id">) {
  // Generate the next ID
  const nextId = (contacts.at(-1)?.id ?? 0) + 1;

  // Build the full contact object
  const newContact: Contact = {
    id: nextId,
    name: contact.name,
    ...(contact.email !== undefined && { email: contact.email }),
    ...(contact.phone !== undefined && { phone: contact.phone }),
    ...(contact.tags !== undefined && { tags: contact.tags }),
  };

  // Add to array
  contacts.push(newContact);

  // Print confirmation
  console.log(`Contact added: ${newContact.name}`);
}
