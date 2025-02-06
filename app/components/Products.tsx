const products = [
  { name: "Plastic Sheets", description: "High-quality plastic sheets for various applications" },
  { name: "Plastic Rods", description: "Durable plastic rods for industrial use" },
  { name: "Plastic Tubes", description: "Versatile plastic tubes for multiple industries" },
  { name: "Custom Molded Parts", description: "Tailored plastic parts to meet your specific needs" },
]

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

