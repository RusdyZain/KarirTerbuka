import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function maintenance() {
    return (
        <div data-theme="light" className="h-screen grid justify-items-center pt-20 text-[#2570EB]">
            <Image src="https://s3-alpha-sig.figma.com/img/903c/cb95/fd2b5cbdaf0d0449d25faf6f311e400f?Expires=1702252800&Signature=je1H4S5bgk5ulTLAOoL5D0Fa-x3yQB1tH0BwXgqkybxn3oDWzCM~ca0TBJmXskFJoN62RBdI5vShPZGCPbRIsZCzkL9metcDSJxY2Ac7DIMuu9PRZB-lV~gBh9TP-TkRfJbkkiU4WSJaaGNWBBKjLKNoZaHUHsbemZeFnrXQNttzCmcvF5~Y6MTKRczk8ldq4hOALeznm4tzQI~1IlxcMi-bGGXydlNyGcF374YbNUwMTCjdD76lkGqPAqoZtPboPMoy7CigSCbLa80u8QPFUjOFy0IpywWFH9f34wgrJ4p7NjVdOsUjSsomR0Fg0y8ThczQp2q41xhqJwKekMz3iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='' width={800} height={10} />
            <h1 className="text-5xl mt-[-90px] font-bold">Website Sedang Dalam Tahap Pengembangan</h1>
            <h2 className="text-3xl mt-[-130px] font-semibold w-[60rem] text-center">Mohon maaf atas ketidaknyamanannya, Website ini sedang dikembangkan untuk memberikan pengalaman yang lebih baik.</h2>
            <div className="mt-[-100px]">
                <Link href="/">
                    <button
                        type="button"
                        className="bg-blue-600 hover:bg-blue-800 text-white text-2xl font-semibold font-lato p-2 py-4 px-8 w-[260px] rounded-xl">
                        Kembali
                    </button>
                </Link>
            </div>
        </div>
    )
}
