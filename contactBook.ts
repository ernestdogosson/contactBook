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

addContact({ name: "ernest" });
addContact({ name: "ernest", email: "jen@oldskool.com", phone: "123-45678" });
addContact({ name: "dogo", phone: "0987-65433" });

function listContacts() {
  // Check if no contact and print message
  if (contacts.length === 0) {
    console.log("No contacts found.");
    return;
  }

  // Loop through Contacts and print list
  console.log("Contacts list:");
  for (const contact of contacts) {
    console.log(
      `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email ?? "N/A"}, Phone: ${contact.phone ?? "N/A"}`,
    );
  }
}

listContacts();

function findByName(name: string): Contact[] {
  // Find matching contact with name
  const matchingContacts = contacts.filter((contact) => contact.name === name);

  // Check if match is not found and print message or print contact list
  if (matchingContacts.length === 0) {
    console.log(`No contacts found for "${name}".`);
  } else {
    console.log(`Contact list:`, matchingContacts);
    console.log(`${matchingContacts.length} contact(s) found.`);
  }

  return matchingContacts;
}

findByName("ernest");
