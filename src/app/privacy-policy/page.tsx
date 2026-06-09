export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 selection:bg-white selection:text-black">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-white/50 text-sm mb-12">Last updated: June 10, 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you make a purchase, create an account, subscribe to our newsletter, or contact customer support. This may include your name, email address, phone number, shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your transactions and fulfill your orders.</li>
              <li>Communicate with you about your orders, products, and promotional offers.</li>
              <li>Provide, maintain, and improve our services and website experience.</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">3. Data Sharing and Security</h2>
            <p>
              We do not sell your personal information to third parties. We may share your information with trusted third-party service providers (such as shipping partners and payment processors) solely for the purpose of fulfilling your orders. We implement strict security measures to protect your personal information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-white mb-4">4. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights or have any questions about our privacy practices, please contact us at <a href="mailto:support@novatech.pk" className="text-white hover:underline">support@novatech.pk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
