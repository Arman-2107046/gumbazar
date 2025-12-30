import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex items-center justify-center px-4 ">
            <div className="w-full max-w-2xl">
                {/* Logo */}
                <div className="flex justify-center mb-10 md:mt-[8rem]">
                    <Link href="/">
                        <ApplicationLogo className="w-auto h-16 " />
                    </Link>
                </div>

                {/* Card */}
                <div className="w-full px-10 py-10 bg-white shadow-xl rounded-2xl">
                    {children}
                </div>
            </div>
        </div>
    );
}






















// import ApplicationLogo from '@/Components/ApplicationLogo';
// import { Link } from '@inertiajs/react';

// export default function GuestLayout({ children }) {
//     return (
//         <div className="flex flex-col items-center min-h-screen pt-6 bg-white sm:justify-center sm:pt-0">
//             <div>
//                 <Link href="/">
//                     <ApplicationLogo className="h-16 fill-current " />
//                 </Link>
//             </div>

//             <div className="w-full px-6 py-4 mt-16 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
//                 {children}
//             </div>

//         </div>
//     );
// }
