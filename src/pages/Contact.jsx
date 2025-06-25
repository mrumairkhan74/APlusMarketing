import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await axios.post('/api/contact', formData); // backend API
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-700">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4 border">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 border rounded h-32"
            required
          />
          <button type="submit" title='Submit' className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Send Message
          </button>
          {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
        </form>

        {/* Office Details + Map */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h2>
            <p>A+ Marketing & Builder's</p>
            <p>Block A, Jinnah Garden, Islamabad, Pakistan</p>
            <p><strong>Phone:</strong> +92 335 5500590</p>
            <p><strong>Email:</strong> info@aplusmarketing.com</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13296.683017580901!2d73.16651535977704!3d33.57491552344373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede7360bfb9f%3A0x2a247c4e1fc427c9!2sA%20PLUS%20MARKETING%20%26%20BUILDER&#39;S!5e0!3m2!1sen!2s!4v1750612274362!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="A+ Marketing Location Map"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
