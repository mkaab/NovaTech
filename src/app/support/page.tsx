import { Mail, Phone, Clock, MapPin } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white selection:text-black">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Contact Support</h1>
        <p className="text-white/60 text-lg mb-12">
          We're here to help. Reach out to us through any of the channels below and our team will get back to you as soon as possible.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <Mail className="w-8 h-8 mb-6 text-white/80" />
            <h2 className="text-xl font-medium mb-2">Email Us</h2>
            <p className="text-white/50 mb-4">For general inquiries, order updates, and technical support.</p>
            <a href="mailto:support@novatech.pk" className="text-lg font-medium hover:underline">support@novatech.pk</a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <Phone className="w-8 h-8 mb-6 text-white/80" />
            <h2 className="text-xl font-medium mb-2">Call Us</h2>
            <p className="text-white/50 mb-4">Available Monday to Friday, 9:00 AM to 6:00 PM (PKT).</p>
            <a href="tel:+923000000000" className="text-lg font-medium hover:underline">+92 300 0000000</a>
          </div>
        </div>

        <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-white/70" />
              <h2 className="text-xl font-medium">Headquarters</h2>
            </div>
            <p className="text-white/50">NovaTech Tower, Block 4, Clifton<br />Karachi, Pakistan</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-white/70" />
              <h2 className="text-xl font-medium">Business Hours</h2>
            </div>
            <p className="text-white/50">Mon - Fri: 9am - 6pm<br />Sat - Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
