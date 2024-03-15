export default function Example() {
    return (
      <div>
        <div className="max-w-7xl justify-center mx-auto relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Wonach suchst du?"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm">Lupen Icon</span>
          </div>
        </div>
      </div>
    )
  }
  