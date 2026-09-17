export default function Inicio() {
  return (
    <section className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#00c5df]">
        <h2 className="text-2xl font-black uppercase tracking-wide text-[#12171a] mb-2">
          Tú te relajas, nosotros cuidamos tus sneakers
        </h2>
        <p className="text-gray-600">
          No es magia, es Bright Clean. Somos especialistas en recolección, limpieza profunda y entrega a domicilio.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#00c5df]">
          <h3 className="font-bold text-lg mb-1">1. Agenda por WhatsApp</h3>
          <p className="text-sm text-gray-600">Escríbenos al 461-377-9685 y coordina tu entrega rápidamente.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#00c5df]">
          <h3 className="font-bold text-lg mb-1">2. Recogemos tus Sneakers</h3>
          <p className="text-sm text-gray-600">Pasamos por ellos a la dirección que nos indiques en Celaya, Gto.</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#00c5df]">
          <h3 className="font-bold text-lg mb-1">3. Limpieza y Entrega</h3>
          <p className="text-sm text-gray-600">Secado controlado, cuidado profesional y entrega directo en tu puerta.</p>
        </div>
      </div>
    </section>
  );
}