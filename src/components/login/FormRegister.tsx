import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function FormLogin() {
  const [error, setError] = useState('');
  const handleSumbit = async (event: any) => {
    event.preventDefault();
    try {
      const res = await signIn('credentials', {
        redirect: false,
        phonenumber: event.target.phonenumber.value,
        username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });
    } catch (error) {
      setError('email sudah digunakan ');
    }
  };
  return (
    <div className="font-sans">
      <div className="flex flex-col items-center justify-center h-screen sm:h-screen">
        <div className="flex flex-row place-content-center gap-4">
          <Image src="/logo.png" alt="" width={100} height={40} />
          <h1 className="place-items-center font-sans text-7xl font-medium text-[#2570EB] sm:hidden md:hidden">
            Daftar
          </h1>
        </div>
        <h1 className="mt-3 text-3xl sm:text-xl  font-bold">
          Mendaftarkan Akun KarirTerbuka
        </h1>
        <h4 className="mt-3 sm:mt-1  mb-3 sm:text-sm">
          Buat profil dan cari pekerjaan lebih mudah
        </h4>

        <div className="w-6/12 md:w-8/12 sm:w-11/12">
          <div className="my-5">
            <input
              name="number_hp"
              className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5"
              placeholder="Nomor Telepon"
              required={true}
            />
          </div>
          <input
            type="Email"
            name="sandi_pengguna"
            placeholder="Email"
            className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5 my-5"
            required={true}
          />
          <input
            type="password"
            name="sandi_pengguna"
            placeholder="Sandi"
            className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5 my-5"
            required={true}
          />
          <input
            type="password"
            name="konfirmasi_sandi_pengguna"
            placeholder="Konfirmasi Sandi"
            className="bg-gray-50 border border-[#526077] sm:text-sm rounded-lg block w-full p-2.5"
            required={true}
          />
          <button
            type="submit"
            className="mt-4 text-white bg-[#2570EB] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:duration-200 hover:bg-white hover:text-[#2570EB] hover: border-solid border-2 border-[#2570EB] w-full"
          >
            Masuk
          </button>
          <hr className="h-px my-8 bg-[#2570EB] border-0"></hr>
          <button
          onClick={() => {
            signIn('facebook', {
              callbackUrl: '/',
              redirect: false,
            });
          }}
            type="button"
            className="w-full block bg-white hover:duration-200 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex justify-start">
              <Image
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                loading="lazy"
                alt="Facebook logo"
                width={0}
                height={0}
              />
              <span className="ml-4"> Lanjutkan dengan Facebook</span>
            </div>
          </button>
          <button
            onClick={() =>
              signIn('google', {
                callbackUrl: '/',
                redirect: false,
              })
            }
            type="button"
            className="mt-3 w-full block bg-white hover:duration-200 hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex justify-start duration-200">
              <Image
                className="w-6 h-6"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="Google logo"
                width={0}
                height={0}
              />
              <span className="ml-4"> Lanjutkan dengan Google</span>
            </div>
          </button>
          <p className="w-full text-center mt-5">
            Dengan melanjutkan, anda menyetujui ketentuan penggunaan disabilitas
            dan mengkonfirmasi bahwa Anda telah membaca Kebijakan Privasi
            Disabilitas.
          </p>
          <div className="w-full sm:mt-0 sm:max-w-sm xl:p-0">
            <p className="text-lg text-black text-center font-medium mt-7">
              Sudah memiliki akun?{' '}
              <Link
                href="/login-register"
                className="font-medium text-[#2570EB] hover:underline dark:text-[#2570EB]"
              >
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function push(arg0: string) {
  throw new Error('Function not implemented.');
}
