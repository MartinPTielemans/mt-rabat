import { IconComponent } from "@/app/components/IconComponent";
import { aboutPageData } from "@/app/data/staticContent";

export default function OmOsPage() {
  const data = aboutPageData;

  return (
    <main className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {data.description}
            </p>
          </div>

          {/* Company Description */}
          <div className="mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.companyDescription}
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Vores Værdier
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent name={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kontakt Information
            </h2>
            <div className="space-y-4 text-gray-600">
              <p><strong>Telefon:</strong> {data.contactInfo.phone}</p>
              <p><strong>Email:</strong> {data.contactInfo.email}</p>
              <div className="whitespace-pre-line">
                <strong>Adresse:</strong><br />
                {data.contactInfo.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}