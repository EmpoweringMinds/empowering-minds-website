import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/917003055263?text=Hi%20Empowering%20Minds%2C%20I%20would%20like%20to%20know%20more%20about%20your%20academy%20courses.";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 z-[9999] md:bottom-6 md:right-6">
      <div className="group relative">
        <div className="pointer-events-none absolute bottom-[calc(100%+12px)] right-0 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition duration-300 group-hover:opacity-100 md:bottom-auto md:right-[calc(100%+12px)] md:top-1/2 md:-translate-y-1/2 md:whitespace-nowrap">
          Chat with us on WhatsApp
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_32px_rgba(37,211,102,0.35)] transition duration-300 hover:scale-[1.08] hover:shadow-[0_18px_36px_rgba(37,211,102,0.42)] md:h-[60px] md:w-[60px]"
        >
          <FaWhatsapp className="text-[28px] md:text-[32px]" />
        </a>
      </div>
    </div>
  );
}
