import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import CardBlog from '@/components/cards/card-blog'
import blogData from '@/DataJSON/blog.json';

export default function Blog() {
    return (
        <div data-theme="light" className="h-full">
            <Header />
            <div className="bg-white container mx-auto">
                <div className="pt-[100px] ml-28 mr-20">
                    <h1 className="text-4xl font-semibold mt-2 mb-5 text-center">Baca Blog Terbaru Kami</h1>
                    <p className="text-xl font-medium mb-10 text-center">Kami berkomitmen untuk memberikan informasi bermanfaat, pandangan mendalam, dan saran praktis untuk membantu Anda mengetahu cara mencari pekerjaan, serta tetap terinformasi tentang perkembangan terbaru tentang beberapa pekerjaan.</p>
                    <div className="flex">
                        <div className="w-[60%] image-container relative mr-5" >
                            <Image src="https://s3-alpha-sig.figma.com/img/426e/7c8a/5cd93bbececad78c5f9b569cf16591c3?Expires=1701648000&Signature=XkwjFd6pPhPjxoFr7K-4AnyXSJAQlM-3COL2c2PHiBXIE~ZW5acTaSrHji-p3mxjEj4vTCRkJwesgI3YeQ9DQ49aMwFyqH0XU3GffSXJUJeRRYzW3FHoFS2FDnxkI4uusmuBLf9XEkNq98fvW0LfIXCimBy18CWIg6o08Kgo7WQ3ga16ZOVHRJ5rC~Ryx9hSXodk70GbKI6bXqzblmxqIMZiyoF-6lPB-Y5TnIH-jPW5baDkgQoL~ZgRezmZgNGt2PYZsSF5Ioguxd7XZvlRgojgBgxFuzvtXsHFVRF1tNkUMWUWjyA2NqymUj3fpVvLjamBNPxbyr708ba1JKks8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='' width={300} height={100} className="w-full object-cover h-[30rem]" />
                        </div>
                        <div className="w-[40%] grid grid-rows-2 mr-10 image-container relative h-[30rem]">
                            <Image src="https://s3-alpha-sig.figma.com/img/2afb/3d1c/c4f0c68132f60bf0202cb450c1ff5b18?Expires=1701648000&Signature=Nlgk4eGckee7Abgpoj91l2XEs-p6jo10CZIf4bcjWvP6NuwnPu~yYfYB4FtvX5dj15IPEX7YNxbDcC6Yc77xAuQTX99v0ig7Lcs2VGDWvSHjo8UB2qK7BHpP0QY2AecdIECfXAEqhijEb7NFqT2fXIS4x22INWwrn32Ztk5Z9LakQIzIGzbgZos0P-HJN2UzfJwyFeBveuPj7FYeB6SjkOAFy2Q7vKApZAx1uM2ZAqnYYK0ehxbIN0xBbfkhawuJXrGLPJgpq9RepIBPGpLxrDwfuow25reRD~Lw3zoj0~p1CPMv0h9xjGW1Q1t1znUpaejgaFR97xVbdG4p1jA8rA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='' width={300} height={100} className="w-full object-cover h-[14.5rem]" />
                            <Image src="https://s3-alpha-sig.figma.com/img/5acd/d0aa/cf77e9a6060169bd8be724f8232583e8?Expires=1701648000&Signature=JOk0hWzv7FsHswK-DbytLyS5AQzJwbGaGRla1JjmREtDbUK8TjfJbK0MMIQrSYRJEk991CLjOaHG0YD8~UxO-38eTYdrSxqPEwhklj6hM8Ar8-GBG2oW3HRlmGnS7tpYC8TtijeVKvb0Vi3L4i6cnaZpK0gg6co9EJTmODvtJ8D~egoXki0TZT~VlfmJn0BvT6fFw~Fcg8T53PUpodxgl5L~83FIkxqKhveUXq6IvL1vRoO9tKbZlQrZqiyNTuJAkc06ubxdRCLIENxdY8Em9rBsYDEOWjl8wASPBea-1mENrgDXQU6qz8kZ6wD-cqKQpfX2zF0WWKbgOLkSUwAUAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='' width={300} height={100} className="mt-2 w-full object-cover h-[14.5rem]" />
                        </div>
                    </div>
                </div>
                <form className="flex px-80 mt-16 h-12">
                    <div className="flex-[80%] relative z-10 flex space-x-3 bg-white border rounded-3xl border-black">
                        <div className="flex-[1_0_0%]">
                            <label
                                htmlFor="hs-search-article-1"
                                className="block text-sm text-gray-700 font-medium "
                            >
                                <span className="sr-only">Search article</span>
                            </label>
                            <input
                                type="email"
                                name="hs-search-article-1"
                                id="hs-search-article-1"
                                className="py-2.5 px-4 block w-full border-transparent rounded-l-3xl"
                                placeholder="Search..."
                            />
                        </div>
                        <div className="flex-[0_0_auto]">
                            <Link
                                className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-[20%] ml-2">
                        <h4 className="w-full text-xl text-center py-2 rounded-lg border border-transparent bg-[#2570EB] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"> Cari </h4>
                    </div>
                </form>
                <div className="mx-20 px-8 pt-10 border-spacing-2 border-2 rounded-lg mt-10">
                    <div className="grid grid-cols-3 gap-10 pt-14 mb-20">
                        {blogData.map((blog) => (
                            <CardBlog key={blog.id} data={blog} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}