import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { registerUser } from '@/utils';
import { UserContext } from '@/context';
import { RegistrationValidator } from '@/validators';
import { Button, CustomCheckbox, FormInput } from '@/components';

import Logo from '../../../public/images/logo.png';
import Mobile from '../../../public/images/sign-up/mobile.jpg';
import Incentives from '../../../public/images/sign-up/incentives.jpg';

export default function SignUp() {
  const router = useRouter();
  const { login } = useContext(UserContext);

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
      const res = await registerUser(data);

      if (res.ok) {
        login(res.data?.user!)
      } else {
        toast.error(res.message!)
      }

      router.push('/discover');
    } catch (e) {
      console.log('Error >', e);
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      <div className="p-4">
        <div className="h-10 relative">
          <Image src={Logo} alt="logo" width={150} height={40} />
        </div>

        <div className="flex flex-col justify-center items-center mt-24">
          <div>
            <h2 className="text-primary-00 font-bold text-[26px]">Sign Up</h2>

            <p className="text-[15px] mt-3">Create your account</p>

            <form
              onSubmit={handleSubmit(submitHandler)}
              className="flex flex-col gap-y-9 md:gap-y-5 mt-8 md:w-[410px] max-w-[410px]"
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

              <div className="mt-5 relative">
                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => (
                    <CustomCheckbox
                      register={register}
                      required
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

                {errors?.agreeToTerms?.message && (
                  <div className="text-red-600 absolute left-0 text-xs mt-[2px]">
                    {errors.agreeToTerms.message}
                  </div>
                )}
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
        <div className="flex justify-center items-center py-24 h-full">
          <div className="text-center px-4">
            <h2 className="text-primary-00 text-2xl md:text-[42px] font-bold">
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
