export default function Servicios() {
  const listaServicios = [
    { titulo: 'Bright Standard', precio: '$159', desc: 'Limpieza profunda para todo tipo de material. Elimina manchas y olores.' },
    { titulo: 'Bright Gamuza', precio: '$179', desc: 'Especial para gamuza, nobuk y materiales delicados con cepillado suave.' },
    { titulo: 'Bright Gorra', precio: '$89', desc: 'Recupera color y forma original sin maltratar la visera.' },
    { titulo: 'Bright Botas', precio: 'Desde $199', desc: 'Ideal para botas de trabajo, uso rudo o casuales.' },
    { titulo: 'Little Bright', precio: '$120', desc: 'Limpieza profunda especial para tallas infantiles (hasta del 21).' },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-black uppercase text-[#12171a]">Menú de Precios</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {listaServicios.map((s, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#00c5df] flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-[#12171a]">{s.titulo}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
            <span className="bg-[#12171a] text-[#00c5df] font-bold px-3 py-1 rounded-full text-sm">
              {s.precio}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}