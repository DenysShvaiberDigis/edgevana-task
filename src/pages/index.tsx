import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';

import { Button } from '@/components';

import Logo from '../../public/images/logo.png';
import GeneralInfo from '../../public/images/sign-up/general-info.jpg';
import Chats from '../../public/images/sign-up/chats.jpg';
import CaretRight from '../../public/icons/carret-right.svg';
import CaretLeftGray from '../../public/icons/carret-left-gray.svg';
import UserIcon from '../../public/icons/user-purple.svg';
import BriefcaseIcon from '../../public/icons/briefcase-purple.svg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  function goToSignUp() {
    router.push('/sign-up');
  }

  return (
    <main className={inter.className}>
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-x-hidden h-screen">
        <div className="p-4">
          <div className="h-10 relative">
            <Image src={Logo} alt="logo" width={150} height={40} />
          </div>

          <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)]">
            <div>
              <h2 className="text-primary-00 font-bold text-[26px]">
                Welcome to Edgevana
              </h2>

              <p className="text-[15px] mt-3">
                Choose your account type to get started
              </p>

              <div className="mt-10 flex flex-col gap-y-5">
                <Link href="/sign-up">
                  <div className="px-8 py-5 max-w-[400px] flex gap-x-8 border-[1.5px] border-secondary-00/50 rounded-lg hover:cursor-pointer hover:border-primary-02 hover:bg-light-00 duration-200">
                    <div className="w-5 min-w-[20px] h-[26px] relative mt-2">
                      <Image src={UserIcon} alt="user" fill />
                    </div>

                    <div>
                      <p className="text-primary-00 font-semibold">
                        Individual
                      </p>

                      <p className="text-sm mt-[10px]">
                        For individuals who want to participate, develop or
                        build with a click of a button.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/sign-up">
                  <div className="px-8 py-5 max-w-[400px] flex gap-x-6 border-[1.5px] border-secondary-00/50 rounded-lg hover:cursor-pointer hover:border-primary-02 hover:bg-light-00 duration-200">
                    <div className="w-7 min-w-[28px] h-[26px] relative mt-2">
                      <Image src={BriefcaseIcon} alt="user" fill />
                    </div>

                    <div>
                      <p className="text-primary-00 font-semibold">Business</p>

                      <p className="text-sm mt-[10px]">
                        For companies and institutions who need access to our
                        suite of tools and real-time insights to manage and run
                        their operations.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <Button className="mt-10" onClick={goToSignUp}>
                Get Started
              </Button>

              <p className="font-medium text-[15px] mt-[30px] text-center">
                Already have an account?{' '}
                <Link
                  href="/"
                  className="text-primary-01 text-sm font-semibold hover:text-primary-00 transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <footer>
            <p className="text-center text-xs py-4">© Edgevana 2022</p>
          </footer>
        </div>

        <div className="bg-gradient-to-r from-[#F2F4FC] to-white h-full">
          <div className="relative py-24 md:pt-0 flex flex-col items-end justify-center h-full">
            <div className="relative w-[70%] bg-white py-4 pl-4 rounded-3xl">
              <Image src={GeneralInfo} alt="general info" />

              <div className="absolute -bottom-12 -left-24">
                <div className="relative w-[35%] bg-white p-2 rounded-3xl">
                  <Image src={Chats} alt="chats" />
                </div>
              </div>
            </div>

            <div className="relative mt-16 flex justify-between items-center w-[70%] mr-2 gap-x-4 -left-24">
              <div>
                <p className="text-primary-00 font-semibold text-[22px] w-[90%]">
                  Accelerating the next generation of the internet
                </p>
                <p className="text-secondary-01 text-sm mt-3 w-[90%]">
                  Participate in over 100+ protocols with one click | Zero to
                  operator in 60 seconds
                </p>
              </div>

              <div className="flex absolute -right-20 gap-x-[18px]">
                <button className="relative flex justify-center items-center w-10 h-10 rounded-full border border-secondary-01/50">
                  <Image src={CaretLeftGray} alt="carret" />
                </button>
                <button className="relative flex justify-center items-center w-10 h-10 rounded-full border border-primary-01">
                  <Image src={CaretRight} alt="carret" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
