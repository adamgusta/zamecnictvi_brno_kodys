import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CircleCheck as CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const services = [
  'Emergency Lock-Out',
  'Lock Replacement / Fitting',
  'Lock Repair',
  'Security Upgrade',
  'Auto Locksmith',
  'Commercial Locksmith',
  'Free Security Assessment',
  'Other',
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    if (!form.service) e.service = 'Please select a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div>
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Request a Free Quote</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Fill out the form and we'll get back to you within minutes. Or call us directly for immediate assistance.
            </p>

            <div className="space-y-5">
              <ContactDetail icon={Phone} label="Phone" value="0770 000 0000" href="tel:07700000000" />
              <ContactDetail icon={Mail} label="Email" value="info@eliteaklocksmith.co.uk" href="mailto:info@eliteaklocksmith.co.uk" />
              <ContactDetail icon={MapPin} label="Coverage Area" value="Watford, Hertfordshire & surrounding areas" />
            </div>

            <div className="mt-10 p-5 bg-yellow-50 border border-yellow-200 rounded-2xl">
              <p className="text-gray-900 font-bold mb-1">Available Hours</p>
              <p className="text-gray-600 text-sm">Monday – Sunday: 6:00 AM – 10:00 PM</p>
              <p className="text-yellow-700 text-sm font-medium mt-1">Emergency response within 30 minutes</p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle2 className="w-14 h-14 text-green-500 mb-5" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Quote Request Sent!</h3>
                <p className="text-gray-500">We'll be in touch very shortly. For urgent help, call us directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FormField label="Full Name" required error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={fieldClass(!!errors.name)}
                  />
                </FormField>

                <FormField label="Phone Number" required error={errors.phone}>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07700 000 000"
                    className={fieldClass(!!errors.phone)}
                  />
                </FormField>

                <FormField label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={fieldClass(false)}
                  />
                </FormField>

                <FormField label="Service Required" required error={errors.service}>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={fieldClass(!!errors.service)}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Additional Details">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your situation or ask a question..."
                    className={`${fieldClass(false)} resize-none`}
                  />
                </FormField>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-yellow-500/30 text-base"
                >
                  <Send className="w-4 h-4" />
                  Send Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function fieldClass(hasError: boolean) {
  return `w-full bg-white border ${hasError ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-yellow-300'} rounded-lg px-4 py-2.5 text-gray-900 text-sm outline-none focus:ring-2 transition-shadow`;
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-yellow-500" />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{label}</p>
        {href ? (
          <a href={href} className="text-gray-900 font-semibold hover:text-yellow-600 transition-colors">
            {value}
          </a>
        ) : (
          <p className="text-gray-700 font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}
