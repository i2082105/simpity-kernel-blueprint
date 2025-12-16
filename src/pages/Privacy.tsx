import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  1.1 Simpity, a GP Solutions GmbH company (further referred to as "we", "us", "company") is committed to safeguarding the privacy of our website visitors. Therefore we prepared this privacy policy to show our website visitors that our company:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>complies with data protection law and follows good practices in the sphere of data protection;</li>
                  <li>respects the right to privacy;</li>
                  <li>is open about how it stores and processes personal data;</li>
                  <li>protects itself from the risks of a data breach.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  1.2 This privacy policy applies where we are acting as a data controller with respect to the personal data of our website visitors; in other words, where we determine the purposes and means of the processing of that personal data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. How we collect your personal data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  2.1 We collect your personal data when you give it to us directly through filling in any information forms on our website. Please do not supply any other person's personal data to us.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  2.2 Additionally we, like many companies, may use analytics tracking systems (such as Google Analytics, for example) to automatically collect certain information about you when you visit our website.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  2.3 We do not knowingly collect personal data from children under the age of 18 without obtaining parental consent. If you are under 18, then please do not use or access our website at any time or in any manner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How we use your personal data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  3.1 In this Section 3 we set out the general categories of personal data that we may process, the purposes for which we may process personal data, and the legal basis of the processing.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  3.2 We may process data about your use of our website ("usage data"). The usage data may include IP address, browser and operating system being used, information about pages you visit and how you navigate the website. This usage data may be processed for the purposes of analyzing the use of the website. The legal basis for this processing is our legitimate interests, namely monitoring and improving our website and services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  3.3 We may process information contained in any enquiry you submit to us regarding our products and/or services ("enquiry data"). The enquiry data may include: your name, your employer name, your contact details. The enquiry data may be processed for the purposes of offering, marketing and selling relevant products and/or services to you.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  3.4 We may process information relating to our customer relationships, including customer contact information ("customer relationship data"). The customer relationship data may be processed for the purposes of managing our relationships with customers, communicating with customers, and keeping records of those communications.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Providing your personal data to others</h2>
                <p className="text-muted-foreground leading-relaxed">
                  4.1 We do not sell or rent your personal data to third parties.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  4.2 We do not share your personal data with third parties for marketing purposes.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  4.3 We may disclose your personal data to any member of our group of companies (this means our subsidiaries and affiliates, including GP Solutions GmbH) insofar as reasonably necessary for the purposes set out in this privacy policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  4.4 We may disclose your personal data to our third party service providers, suppliers, agents, subcontractors and other associated organizations for the purposes of completing tasks and providing services to you on our behalf.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. International transfers of your personal data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  5.1 Our group of companies has offices and facilities in Germany and Poland. You should be aware that transfers outside the EEA, if any, will be protected by appropriate safeguards, namely the use of standard data protection clauses adopted or approved by the European Commission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                  <li><strong>Right of access</strong> – you have the right to know exactly what your personal data is held and how it is processed.</li>
                  <li><strong>Right of rectification</strong> – you are entitled to have personal data rectified if it is inaccurate or incomplete.</li>
                  <li><strong>Right to erasure</strong> – in some circumstances you have the right to have your personal data deleted or removed.</li>
                  <li><strong>Right to restrict processing</strong> – in some circumstances you are entitled to block or suppress processing of your personal data.</li>
                  <li><strong>Right to object</strong> – you may object to our processing of your personal data if we use it for direct marketing purposes.</li>
                  <li><strong>Right to data portability</strong> – you are entitled to receive the personal data concerning you in a structured, commonly used and machine-readable format.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may exercise any of your rights in relation to your personal data by written notice to us sent by e-mail.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Retaining and deleting personal data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  7.1 Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for the purposes it was collected for.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  7.2 We will retain your personal data as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                  <li>Usage data collected through analytics will be retained for 26 months;</li>
                  <li>Enquiry data will be retained as long as you may be interested in our products and services;</li>
                  <li>Customer relationship data will be retained as long as you continue to be our customer and for a maximum of 10 years once you stop being our customer.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Technical aspects</h2>
                <p className="text-muted-foreground leading-relaxed">
                  8.1 When you give us personal data, we take steps to ensure that appropriate technical and organizational controls are in place to protect it.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  8.2 We follow generally accepted industry standards to protect the information submitted to us. This includes firewalls, password protection and other access and authentication controls. We use SSL technology to encrypt data during transmission.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  8.3 If we learn of a security systems breach, we will inform you and the authorities of the occurrence of the breach in accordance with applicable law.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  8.4 The hosting facilities for our website are situated in Germany.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  9.1 A cookie is a file containing an identifier that is sent by a web server to a web browser and is stored by the browser. We use cookies for authentication and to analyze the use and performance of our website.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  9.2 Before starting to use our website you are informed that we are using cookies. You may agree to such use of cookies or delete cookies using instructions specified in your browser settings.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  9.3 We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. Google's privacy policy is available at: <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">https://www.google.com/policies/privacy/</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Other information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  10.1 We may update this privacy policy from time to time by publishing a new version on our website.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  10.2 You should check this page occasionally to ensure you are happy with any changes to this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Our details</h2>
                <p className="text-muted-foreground leading-relaxed">
                  11.1 This website is owned and operated by Simpity, a GP Solutions GmbH company.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  11.2 We are registered in Germany and our registered office is at Lise-Meitner-Str. 1, 85716 Unterschleißheim.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  11.3 You can contact us by email at <a href="mailto:info@simpity.eu" className="text-primary hover:text-primary/80">info@simpity.eu</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
