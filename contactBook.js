"use strict";
let contacts = [];
function addContact(contact) {
    // Generate the next ID
    const nextId = (contacts.at(-1)?.id ?? 0) + 1;
    // Build the full contact object
    const newContact = {
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
addContact({ name: "jen", email: "jen@oldskool.com", phone: "123-45678" });
addContact({ name: "dogo", phone: "0987-65433" });
function listContacts() {
    // Check if no contact and print message
    if (contacts.length === 0) {
        console.log("No contacts found.");
        return;
    }
    console.log("Contacts list:");
    for (const contact of contacts) {
        console.log(`Contacts ${contact.id}:
      ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email ?? "N/A"}, Phone: ${contact.phone ?? "N/A"}`);
    }
}
listContacts();
