import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import ChatButton from './chatButton'
import { products } from './products';
import seller from '../assets/img/pp.png'

const reviews = { href: '/verkaeufer', average: 4, totalCount: 117 }

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
                    <div className="flex flex-col content-between mt-4 lg:row-span-3 lg:mt-0 lg:border-l lg:border-gray-200 pl-8 pr-8 pt-8 bg-cl2 rounded-3xl">
                        <h2 className="sr-only">Product information</h2>
                        <p className="ml-4 mt-4 text-5xl font-bold  tracking-tight text-white">{product.price}</p>
                        <div className="flex flex-col items-center justify-center mt-7 md:mt-16">
                            <a href="/verkaeufer" className="flex flex-col items-center justify-center">
                                <h1 className="text-1xl font-bold tracking-tight text-white sm:text-2xl mb-0">Ihr Verkäufer</h1>
                                <img src={seller} alt="Seller" className="w-20 h-20 rounded-full mb-3 mt-2" />
                                <h2 className="text-l font-bold tracking-tight text-white sm:text-1xl mb-0">Max Mustermann</h2>
                            </a>
                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-cl1' : 'text-gray-300',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-gray-300 hover:text-cl1">
                                        {reviews.totalCount} Bewertungen
                                    </a>
                                </div>
                            </div>
                        </div>
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