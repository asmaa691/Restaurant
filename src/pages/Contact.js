import React from 'react';

export default function Contact() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-red-600">Contact Us</h2>

      <div className="space-y-3 text-gray-700">
        <p><strong>Email:</strong> contact@flames54.com</p>
        <p><strong>Phone:</strong> +961 81 815 779</p>
        <p><strong>Address:</strong> Saida, Hlaliyeh Main Road</p>
      </div>

      <p className="mt-6 text-gray-600">
        We’d love to hear from you! Feel free to reach out with any questions or feedback.
      </p>
    </section>
  );
}
