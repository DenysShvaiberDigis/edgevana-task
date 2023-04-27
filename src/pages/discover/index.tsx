import dynamic from 'next/dynamic';

import { Icons, SurveyStepper } from '@/components';
import { useState } from 'react';

const Sidebar = dynamic(() => import('../../components/Sidebar/Sidebar'), {
  ssr: false,
});

const tabsHeadings = [
  'Overview',
  'Projects',
  'Events',
  'News',
  'Developer Toolkit',
  'Entrepreneur Toolkit',
];

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState<string>(tabsHeadings[5]);

  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />

      <main className="bg-light-02 overflow-y-auto">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center gap-x-5">
              <div className="bg-white rounded-full hidden sm:flex items-center justify-center h-[52px] w-[52px]">
                <Icons.DiscoverWeb3 className="min-w-[24px] w-[24px]" />
              </div>

              <div>
                <p className="text-primary-00 text-xl font-semibold">
                  Discover Web3
                </p>
                <p className="text-secondary-01 text-xs font-semibold">
                  Web3 / Entrepreneur Toolkit
                </p>
              </div>
            </div>

            <div className="relative flex mt-4 sm:mt-0">
              <input
                type="text"
                className="bg-inherit font-semibold border border-secondary-03 rounded-lg p-[17px] outline-none pl-[35px] text-secondary-01 placeholder:text-secondary-01/50"
                placeholder="Search"
              />

              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icons.Search className="min-w-[17px] w-[17px]" />
              </div>
            </div>
          </div>

          <div className="bg-white overflow-y-auto rounded-lg shadow-xl px-4 flex items-center gap-x-10 mt-6">
            {tabsHeadings.map((heading) => (
              <div key={heading} className="flex flex-col">
                <button
                  key={heading}
                  onClick={() => setSelectedTab(heading)}
                  className={`py-5 text-sm font-semibold whitespace-nowrap ${
                    selectedTab === heading ? 'text-primary-01 mb-[-1px]' : ''
                  }`}
                >
                  {heading}
                </button>

                {selectedTab === heading && (
                  <span className="bg-gradient-to-r from-blue-900 to-transparent h-[1px] w-full transition-colors duration-150"></span>
                )}
              </div>
            ))}
          </div>

          {selectedTab === tabsHeadings[5] && (
            <div className="flex justify-center items-center mt-8 sm:mt-16">
              <SurveyStepper />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
