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
