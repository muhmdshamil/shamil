import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const Contact = () => {
  const sendToWhatsApp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const message = event.target.message.value;
    const whatsappUrl = `https://wa.me/919072319137?text=Name: ${encodeURIComponent(
      name
    )}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Fade direction="down" triggerOnce>
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase text-orange-500 mb-3">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Let&apos;s work together
            </h2>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Got an idea, a project, or just want to say hi? Drop a message below or reach out using any of the
              channels on the right.
            </p>
          </div>
        </Fade>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14 items-start"
        >
          <Fade direction="left" triggerOnce>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/40 to-pink-500/40 rounded-2xl blur opacity-60 dark:opacity-80" />
              <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/70 dark:border-gray-800/70 rounded-2xl p-8 md:p-10 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send a message</h3>
                <form onSubmit={sendToWhatsApp} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-100/70 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Hi Shamil, let&apos;s connect!"
                      rows="6"
                      className="w-full px-4 py-3 rounded-xl bg-gray-100/70 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white py-3.5 text-base font-semibold shadow-lg shadow-green-500/30 transition-all"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Send via WhatsApp</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </Fade>

          <Fade direction="right" delay={150} triggerOnce>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Prefer talking directly?</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  I&apos;m currently open to freelance projects, collaborations, and full-time opportunities. Feel free
                  to reach out through any of the platforms below — I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-orange-400/80 hover:shadow-md hover:shadow-orange-500/10 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:shamiilmuhmd@gmail.com"
                      className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400"
                    >
                      shamiilmuhmd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-orange-400/80 hover:shadow-md hover:shadow-orange-500/10 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Phone</p>
                    <a
                      href="tel:+919072319137"
                      className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400"
                    >
                      +91 9072319137
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 hover:border-orange-400/80 hover:shadow-md hover:shadow-orange-500/10 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/muhammed-shamil-p/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100 hover:text-orange-500 dark:hover:text-orange-400"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-500/10 via-green-500/10 to-emerald-500/10 border border-green-400/60 dark:border-green-500/70 hover:shadow-lg hover:shadow-green-500/20 transition-all">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-white">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-green-700 dark:text-green-300">WhatsApp</p>
                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
                      Quick replies for urgent queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
