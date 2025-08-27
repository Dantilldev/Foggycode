type Contact = { name: string; email?: string };

function formatContact(c: Contact): string {
  // TODO: check for c.email before using it; format as described

  if (c.email) {
    return c.name + " <" + c.email.toLowerCase() + ">";
  }
  return c.name + " (no-email)";
}

console.log(formatContact({name: "Ada"})); // 'Ada (no-email)'
console.log(formatContact({name: "Grace", email: "GRACE@EXAMPLE.COM"})); // 'Grace grace@example.com'

// Your Task
// Complete the function formatContact(c: { name: string; email?: string }): string.
// If email exists, return c.name + ' <' + c.email.toLowerCase() + '>'.
// Otherwise, return c.name + ' (no-email)'.
// Examples
// formatContact({ name: 'Ada' }) → 'Ada (no-email)'
// formatContact({ name: 'Grace', email: 'GRACE@EXAMPLE.COM' }) → 'Grace grace@example.com'
