import Image from 'next/image';
import { useRouter } from 'next/router';

import { Icons } from '../Icons/Icons';
import { useSessionStorage } from '@/hooks';
import UserImg from '../../../public/images/mock-avatar.jpg';

export const Sidebar = () => {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useSessionStorage('sidebarOpen', true);

  const menus = [
    {
      title: 'Nodes',
      icon: <Icons.Server className="min-w-[24px] w-[24px]" />,
      onClick: () => {},
    },
    {
      title: 'Dashboard',
      icon: <Icons.Dashboard className="min-w-[24px] w-[24px]" />,
      onClick: () => {},
    },
    {
      title: 'Ecosystem',
      icon: <Icons.Ecosystem className="min-w-[24px] w-[24px]" />,
      onClick: () => {},
    },
    {
      title: 'Analytics',
      icon: <Icons.Analytics className="min-w-[24px] w-[24px]" />,
      onClick: () => {},
    },
    {
      title: 'Teams',
      icon: <Icons.Teams className="min-w-[24px] w-[24px]" />,
      onClick: () => {},
    },
    {
      title: 'Discover Web3',
      icon: <Icons.DiscoverWeb3 className="min-w-[24px] w-[24px]" />,
      path: '/discover',
      onClick: () => goTo('/discover'),
    },
  ];

  function goTo(path: string) {
    router.push(path);
  }

  return (
    <aside
      className={`${
        sidebarOpen ? 'w-72' : 'w-16'
      } bg-white min-h-screen px-3 py-8 relative duration-300`}
    >
      <Icons.CaretRight
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`absolute text-[rgba(21, 31, 78, 0.72)] h-6 w-6 p-1 cursor-pointer -right-3 top-9 bg-white border border-primary-01 rounded-full ${
          sidebarOpen && 'rotate-180'
        }`}
      />

      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex gap-x-4 items-center">
            {/* <LogoIcon
          className={`cursor-pointer min-w-[40px] duration-500 ${
            sidebarOpen && 'rotate-[360deg]'
          }`}
          width={40}
          height={40}
        /> */}
            <h3
              className={`text-white origin-left font-medium text-xl duration-200 ${
                !sidebarOpen && 'scale-0'
              }`}
            >
              Denryu
            </h3>
          </div>
          <ul className="pt-6">
            {menus.map((menu, index) => (
              <button
                key={index}
                onClick={menu.onClick}
                className={`flex rounded-md p-2 w-full text-primary-00/40 text-sm items-center gap-x-4 
              mt-3 hover:bg-primary-01 hover:text-white transition-colors duration-200 ${
                menu?.path &&
                router.pathname.includes(menu.path) &&
                'bg-primary-01 text-white'
              }`}
              >
                {menu.icon}
                <span
                  className={`${
                    !sidebarOpen && 'scale-0'
                  } origin-left duration-200 whitespace-nowrap`}
                >
                  {menu.title}
                </span>
              </button>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <div
              className={`flex items-center gap-x-2 ${
                !sidebarOpen && 'w-0 scale-0 opacity-0'
              } duration-200`}
            >
              <div className="relative w-10 h-10">
                <Image src={UserImg} alt="user img" fill />
              </div>

              <div>
                <p className="mb-1 text-primary-00 font-semibold text-sm">
                  Ryan Fay
                </p>
                <p className="text-xs text-secondary-01">
                  ryanfay@edgevana.com
                </p>
              </div>
            </div>

            <div>
              <button className="p-3 rounded-full hover:bg-light-01 transition-colors duration-200">
                <Icons.Logout className="w-6 h-6 fill-white" />
              </button>
            </div>
          </div>

          <div
            className={`border mt-4 border-light-00 flex ${
              !sidebarOpen && 'flex-col'
            } gap-x-1 p-1 rounded-[32px]`}
          >
            <button
              className={`py-2 rounded-[32px] flex justify-center items-center ${
                sidebarOpen ? 'w-1/2 gap-x-2' : ''
              } cursor-pointer hover:bg-light-00 hover:text-primary-01 duration-200`}
            >
              <Icons.LightMode className="w-4 min-w-[16px] h-4 min-h-[16px]" />
              <span className={`${!sidebarOpen && 'scale-0 w-0'}`}>Light</span>
            </button>

            <button
              className={`py-2 rounded-[32px] flex justify-center items-center ${
                sidebarOpen ? 'w-1/2 gap-x-2' : ''
              } cursor-pointer hover:bg-light-00 hover:text-primary-01 duration-200`}
            >
              <Icons.DarkMode className="w-4 min-w-[16px] h-4 min-h-[16px]" />
              <span className={`${!sidebarOpen && 'scale-0 w-0'}`}>Dark</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
