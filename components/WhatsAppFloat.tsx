export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/51900801969"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/whatsapp-icon.png" alt="" className="w-full h-full object-cover" />
    </a>
  );
}
