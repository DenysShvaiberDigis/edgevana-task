import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { Button, CustomCheckbox, FormInput } from '@/components';
import { RegistrationValidator } from '@/validators';

import Logo from '../../../public/images/logo.png';
import Incentives from '../../../public/images/sign-up/incentives.jpg';
import Mobile from '../../../public/images/sign-up/mobile.jpg';

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupInputs>({
    mode: 'onChange',
    resolver: joiResolver(RegistrationValidator),
  });

  async function submitHandler(data: SignupInputs) {
    if (!isValid) return;

    try {
      console.log('Data>', data);

      router.push('/dashboard');
    } catch (e) {
      console.log('Error >', e);
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 overflow-x-hidden h-screen">
      <div className="p-4">
        <div className="h-10 relative">
          <Image src={Logo} alt="logo" width={150} height={40} />
        </div>

        <div className="flex flex-col justify-center items-center h-[calc(100vh-8rem)]">
          <div>
            <h2 className="text-primary-00 font-bold text-[26px]">Sign Up</h2>

            <p className="text-[15px] mt-3">Create your account</p>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-y-5 mt-8 w-[410px] max-w-[410px]"
            >
              <div className="flex gap-x-3">
                <FormInput
                  id="firstName"
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  register={register}
                  error={errors.firstName}
                  required
                />
                <FormInput
                  id="lastName"
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  register={register}
                  error={errors.lastName}
                  required
                />
              </div>

              <FormInput
                id="username"
                type="text"
                label="Username"
                placeholder="Username"
                register={register}
                error={errors.username}
                required
              />

              <FormInput
                id="email"
                type="email"
                label="E-mail"
                placeholder="E-mail"
                register={register}
                error={errors.email}
                required
              />

              <FormInput
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                register={register}
                error={errors.password}
                required
              />

              <div className='mt-5'>
                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      register={register}
                      name={field.name}
                      checked={field.value}
                      content={
                        <p className="text-sm">
                          I certify that i am 18 years of age or older, i agree
                          to the to Edgevana`s{' '}
                          <Link
                            href="/"
                            className="text-primary-01 text-sm font-semibold hover:text-primary-00 transition-colors duration-200"
                          >
                            Terms of Use
                          </Link>{' '}
                          , and i have read the{' '}
                          <Link
                            href="/"
                            className="text-primary-01 text-sm font-semibold hover:text-primary-00 transition-colors duration-200"
                          >
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      }
                    />
                  )}
                />
              </div>

              <Button className="mt-8">Sign Up</Button>
            </form>
          </div>

          <p className="font-medium text-[15px] mt-[30px] text-center">
            <Link
              href="/"
              className="text-primary-01 text-sm font-semibold hover:text-primary-00 transition-colors duration-200"
            >
              Sign up{' '}
            </Link>
            for business account
          </p>
        </div>

        <footer>
          <p className="text-center text-xs py-4">© Edgevana 2022</p>
        </footer>
      </div>

      <div className="bg-gradient-to-r from-[#F2F4FC] to-white h-full">
        <div className="flex justify-center items-center h-full">
          <div className="text-center px-4">
            <h2 className="text-primary-00 text-[42px] font-bold">
              Earn free crypto after making your first purchase.
            </h2>

            <p className="mt-5 text-sm">
              The average Edgevana operator earns $950 a month in incentives.{' '}
              <Link
                href="/"
                className="text-primary-01 font-semibold hover:text-primary-00 transition-colors duration-200"
              >
                See terms
              </Link>
            </p>

            <div className="mt-14 flex justify-center">
              <div className="relative w-[70%] bg-white p-4 rounded-3xl">
                <Image src={Incentives} alt="general info" />

                <div className="absolute w-[30%] -bottom-12 -left-12">
                  <div className="relative bg-white p-2 rounded-3xl">
                    <Image src={Mobile} alt="chats" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
