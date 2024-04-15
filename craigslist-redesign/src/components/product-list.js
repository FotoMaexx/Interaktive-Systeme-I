export default function ProductList({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
        <div className="mt-6 space-y-6">
          {products.map((product) => (
            <div key={product.id} className="group flex items-center space-x-4 border-b border-gray-200 pb-6">
              <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-md bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg text-gray-900">
                  <a href={product.href}>
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
