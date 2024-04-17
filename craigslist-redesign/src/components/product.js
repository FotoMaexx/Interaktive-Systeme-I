import { useState, useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import ChatButton from './chatButton'
import { products } from './products';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ProductPage({ id }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productData = products.find(p => p.id.toString() === id);
        setProduct(productData);
        if (productData) {
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white">
            <div className="pt-6">

                {/* Image gallery */}
                <div className="mx-auto max-w-7xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={product.images[1].src}
                                alt={product.images[1].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={product.images[2].src}
                                alt={product.images[2].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="mt-4 lg:row-span-3 lg:mt-0 lg:border-l lg:border-gray-200 pl-8">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                            <ChatButton />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                    </div>

                    {/* Options */}


                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Beschreibung</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{product.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className="text-gray-400">
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}    