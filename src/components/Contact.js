import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  const sendToWhatsApp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const message = event.target.message.value;
    const whatsappUrl = `https://wa.me/919072319137?text=Name: ${encodeURIComponent(name)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">Have a project or question? I'd love to hear from you.</p>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Fade direction="left" triggerOnce>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
              <form onSubmit={sendToWhatsApp}>
                <div className="mb-5">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
                  <textarea id="message" name="message" placeholder="Hi Shamil, let's connect!" rows="6" className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-md focus:ring-2 focus:ring-orange-500 outline-none transition-all" required></textarea>
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  <FaWhatsapp /> Send via WhatsApp
                </button>
              </form>
            </div>
          </Fade>

          <Fade direction="right" delay={200} triggerOnce>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently available for freelance work and new opportunities. You can reach out to me through the form or via the contact details below.
              </p>
              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-sm">
                  <FaEnvelope className="text-2xl text-orange-400" />
                  <a href="mailto:shamiilmuhmd@gmail.com" className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors">shamiilmuhmd@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-sm">
                  <FaPhone className="text-2xl text-orange-400" />
                  <a href="tel:+919072319137" className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors">+91 9072319137</a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-sm">
                  <FaLinkedin className="text-2xl text-orange-400" />
                  <a href="https://www.linkedin.com/in/muhammed-shamil-p/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
