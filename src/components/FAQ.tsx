import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "Apa wisata utama di Desa Karang Jaya?",
      answer:
        "Wisata unggulan Desa Karang Jaya adalah Kebun Duren yang menawarkan pengalaman menikmati durian langsung dari kebun serta suasana alam yang asri.",
    },
    {
      question: "Komoditas apa yang menjadi unggulan desa?",
      answer:
        "Komoditas unggulan Desa Karang Jaya meliputi Durian, Madu, Duku, dan Cokelat yang menjadi sumber ekonomi masyarakat.",
    },
    {
      question: "Kapan waktu terbaik untuk berkunjung?",
      answer:
        "Waktu terbaik berkunjung adalah saat musim panen durian dan cuaca cerah sehingga wisatawan dapat menikmati seluruh potensi wisata dengan nyaman.",
    },
    {
      question: "Apakah wisata cocok untuk keluarga?",
      answer:
        "Ya. Wisata di Karang Jaya cocok untuk keluarga, pelajar, komunitas, maupun wisatawan umum yang ingin menikmati suasana alam pedesaan.",
    },
    {
      question: "Bagaimana cara menuju Desa Karang Jaya?",
      answer:
        "Pengunjung dapat menggunakan kendaraan pribadi maupun transportasi umum menuju Kabupaten Lampung Selatan lalu mengikuti petunjuk menuju Desa Karang Jaya.",
    },
  ];

  return (
    <section className="bg-[#f8f6f1] py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-yellow-600">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Pertanyaan Umum
          </h2>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-2xl font-bold">
                  {open === index ? "-" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;