import { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Clock, User, Building, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToWhatsApp = () => {
    const message = `Hi! I'm interested in your services.
    
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget: ${formData.budget}
Timeline: ${formData.timeline}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      budget: '',
      timeline: ''
    });
  };

  const sendToGmail = () => {
    const subject = encodeURIComponent('New Project Inquiry from ' + formData.name);
    const body = encodeURIComponent(`
Dear Samayu Solutions,

I'm interested in your services. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}

Best regards,
${formData.name}
    `);

    const gmailUrl = `mailto:hello@samayusolutions.com?subject=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      budget: '',
      timeline: ''
    });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Back to Home (just like Login page) */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something
            <span className="block text-gradient">Amazing Together</span>
          </h2>
          <p className="text-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with us and let's discuss 
            how we can help bring your vision to life.
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-lg p-8 mb-12"
          onSubmit={e => { e.preventDefault(); }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium text-primary mb-2">Name</label>
              <span className="absolute left-3 top-10 text-black"><User size={18} /></span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-border bg-white text-black placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <span className="absolute left-3 top-10 text-black"><Mail size={18} /></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-border bg-whitetext-black placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-primary mb-2">Company</label>
              <span className="absolute left-3 top-10 text-black"><Building size={18} /></span>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-border bg-whitetext-black placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Your Company"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-primary mb-2">Budget</label>
              <span className="absolute left-3 top-10 text-black"><MessageSquare size={18} /></span>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-border bg-whitetext-black placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Budget Range"
              />
            </div>
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-primary mb-2">Timeline</label>
              <span className="absolute left-3 top-10 text-black"><Clock size={18} /></span>
              <input
                type="text"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-border bg-whitetext-black placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Timeline (e.g. 2 months)"
              />
            </div>
            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-primary mb-2">Message</label>
              <span className="absolute left-3 top-10 text-black"><MessageSquare size={18} /></span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full pl-10 px-4 py-3 rounded-xl border border-border bg-whitetext-black placeholder:text-black focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Tell us about your project..."
                rows={4}
                required
              />
            </div>
          </div>
          {/* Show submit button only when form is valid */}
          {isFormValid && (
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="button"
                onClick={() => { sendToWhatsApp(); sendToGmail(); }}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 via-primary to-red-500 text-white font-bold hover:from-green-600 hover:to-red-600 transition"
              >
                Submit with WhatsApp & Gmail
              </button>
            </div>
          )}
        </form>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-body text-muted-foreground mb-4">
            Ready to start your project? Let's talk about it.
          </p>
          <Link to="/contact"
            className="inline-block px-8 py-3 rounded-xl bg-primary text-black font-semibold hover:bg-white/90 text-black transition">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
