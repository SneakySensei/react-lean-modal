import React, { useState } from 'react';
import Modal, { ANIMATIONS, AnimationType } from 'react-lean-modal';

import { ArrowDownIcon, CopyIcon, NpmIcon } from 'assets';
import Code from 'components/Code';

const code = (enterAnimation: string, exitAnimation: string) => `<Modal
  enterAnimation="${enterAnimation}"
  exitAnimation="${exitAnimation}"
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  titleElement={<h3>Example Modal</h3>}
/>
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [animation, setAnimation] = useState<{
    enterAnimation: AnimationType;
    exitAnimation: AnimationType;
  }>({ enterAnimation: 'fade', exitAnimation: 'rotate-right' });

  const handleOptionChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setAnimation((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <main className="relative text-body accent-accent text-gray-900">
        <a
          href="https://www.npmjs.com/package/react-lean-modal"
          target="_blank"
          rel="noreferrer"
          className="fixed top-0 right-0 mx-6 my-4 z-50"
        >
          <NpmIcon className="h-6 w-auto" />
        </a>
        {/* HERO */}
        <section className="sticky top-0 shadow-top-sm bg-[radial-gradient(#8e92ff_0.7px,_#ffffff_0.7px)] bg-[length:14px_14px] px-4">
          <div className="min-h-screen max-w-5xl mx-auto grid place-items-center">
            <div className="flex flex-col items-center">
              <article className="animate-fade-zoom-up accent shadow-lg w-full max-w-md overflow-hidden rounded-lg">
                <header className="px-4 py-3 bg-slate-700 flex items-center justify-between">
                  <h1 className="mr-4 text-slate-100">react-lean-modal</h1>
                  <span className="block h-3 w-3 rounded-full bg-red-500" />
                </header>
                <div className="px-6 py-8 bg-black bg-opacity-80">
                  <code className="block text-gray-500">{'//'} with npm</code>
                  <code
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        'npm i react-lean-modal'
                      );
                    }}
                    className="cursor-pointer group flex text-white justify-between items-center"
                  >
                    <span>$ npm i react-lean-modal</span>
                    <CopyIcon className="text-gray-500 group-hover:opacity-100 group-active:scale-75 opacity-0 transition-all ml-4" />
                  </code>
                  <br />
                  <code className="block text-gray-500">{'//'} with yarn</code>
                  <code
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        'yarn add react-lean-modal'
                      );
                    }}
                    className="cursor-pointer group flex text-white justify-between items-center"
                  >
                    <span>$ yarn add react-lean-modal</span>
                    <CopyIcon className="text-gray-500 group-hover:opacity-100 group-active:scale-75 opacity-0 transition-all ml-4" />
                  </code>
                </div>
              </article>
              <div className="z-10 mt-6 bg-white px-4 py-3 shadow-lg rounded-lg">
                Batteries-included, modal library for React powered by{' '}
                <a
                  href="https://reactcommunity.org/react-transition-group/"
                  target="_blank"
                  rel="noreferrer"
                >
                  react-transition-group
                </a>
              </div>
            </div>
            <a
              href="#overview"
              className="text-inherit no-underline font-normal absolute bottom-0 pb-7 flex flex-col items-center gap-4"
            >
              <ArrowDownIcon className="h-8 animate-bounce" />
              Getting Started
            </a>
          </div>
        </section>

        {/* OTHER SECTIONS */}
        <div className="sticky top-0 shadow-top-sm bg-white">
          {/* OVERVIEW */}
          <section id="overview" className="pt-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-h3 mb-12">
              <span className="text-accent font-bold">&gt;</span> Overview
            </h2>
            <p className="mb-4">
              This package exposes a{' '}
              <code className="inline-block px-1 rounded-md bg-accent bg-opacity-30">
                {'<Modal />'}
              </code>{' '}
              component which is fully controlled by a single prop. It comes
              packed with enter and exit animations for all your motion needs.
            </p>
            <p className="mb-4">
              It's currently powered by{' '}
              <a
                href="https://reactcommunity.org/react-transition-group/"
                target="_blank"
                rel="noreferrer"
              >
                react-transition-group
              </a>{' '}
              but I'm planning to turn it into a zero-dependency package in the
              near future so that it doesn't hurt your{' '}
              <a
                href="https://bundlephobia.com/package/react-lean-modal"
                target="_blank"
                rel="noreferrer"
              >
                bundle size
              </a>
              .
            </p>
          </section>
          {/* Example */}
          <section className="pt-24 px-4 max-w-6xl mx-auto">
            <h2 className="text-h3 mb-12">
              <span className="text-accent font-bold">&gt;</span> Example
            </h2>
            <div className="flex justify-center flex-wrap gap-x-6 gap-y-10">
              <div className="flex-1 min-w-[280px]">
                <div className="flex gap-x-4 gap-y-6 flex-wrap">
                  <label className="block flex-1 min-w-[210px]">
                    Enter Animation
                    <select
                      value={animation.enterAnimation}
                      onChange={handleOptionChange}
                      name="enterAnimation"
                      className="mt-3 bg-gray-50 border border-gray-300 text-inherit rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block w-full p-2.5"
                    >
                      {ANIMATIONS.map((anim) => (
                        <option key={anim} value={anim}>
                          {anim}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block flex-1 min-w-[210px]">
                    Exit Animation
                    <select
                      value={animation.exitAnimation}
                      onChange={handleOptionChange}
                      name="exitAnimation"
                      className="mt-3 bg-gray-50 border border-gray-300 text-inherit rounded-lg focus:ring-1 focus:ring-accent focus:border-accent block w-full p-2.5"
                    >
                      {ANIMATIONS.map((anim) => (
                        <option key={anim} value={anim}>
                          {anim}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="block mx-auto mt-6 bg-accent rounded-md hover:scale-105 active:scale-95 transition-transform text-white px-4 py-3"
                >
                  Open Modal
                </button>
              </div>
              <Code
                className="block mx-auto w-1/2 min-w-[410px]"
                code={code(animation.enterAnimation, animation.exitAnimation)}
                language="jsx"
              />
            </div>
          </section>
          {/* API */}
          <section className="py-24 px-4 max-w-6xl mx-auto text-caption">
            <h2 className="text-h3 mb-12">
              <span className="text-accent font-bold">&gt;</span> API
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-[680px] border-collapse border table-auto w-full">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="border p-1 font-semibold">Property</th>
                    <th className="border p-1 font-semibold">Description</th>
                    <th className="border p-1 font-semibold">Type</th>
                    <th className="border p-1 font-semibold">Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">isOpen</td>
                    <td className="border p-1">
                      Whether the modal is open or closed
                    </td>
                    <td className="border p-1">boolean</td>
                    <td className="border p-1">false</td>
                  </tr>
                  <tr>
                    <td className="border p-1">onClose</td>
                    <td className="border p-1">
                      Function that's called when a close action is registered
                      <br />
                      This is where we set the isOpen prop to false
                    </td>
                    <td className="border p-1">() =&gt; void</td>
                    <td className="border p-1">-</td>
                  </tr>
                  <tr>
                    <td className="border p-1">children</td>
                    <td className="border p-1">
                      Content to render inside the modal's content area
                    </td>
                    <td className="border p-1">React.ReactNode</td>
                    <td className="border p-1">-</td>
                  </tr>
                  <tr>
                    <td className="border p-1">enterAnimation</td>
                    <td className="border p-1">
                      The animation to show when modal opens
                    </td>
                    <td className="border p-1">
                      <a href="#AnimationType">AnimationType</a>
                    </td>
                    <td className="border p-1">"zoom-in"</td>
                  </tr>
                  <tr>
                    <td className="border p-1">exitAnimation</td>
                    <td className="border p-1">
                      The animation to show when modal closes
                    </td>
                    <td className="border p-1">
                      <a href="#AnimationType">AnimationType</a>
                    </td>
                    <td className="border p-1">"zoom-in"</td>
                  </tr>
                  <tr>
                    <td className="border p-1">titleElement</td>
                    <td className="border p-1">
                      Content to render on the left of the modal header
                    </td>
                    <td className="border p-1">React.ReactNode</td>
                    <td className="border p-1">-</td>
                  </tr>
                  <tr>
                    <td className="border p-1">closeIcon</td>
                    <td className="border p-1">
                      Content to render inside the close button
                    </td>
                    <td className="border p-1">React.ReactNode</td>
                    <td className="border p-1">Included SVG</td>
                  </tr>
                  <tr>
                    <td className="border p-1">classNames</td>
                    <td className="border p-1">
                      Additional class names to apply to the modal
                    </td>
                    <td className="border p-1">
                      <pre>
                        {'{'}
                        <br /> root?: string, <br /> backdrop?: string, <br />{' '}
                        content?: string, <br /> header?: string, <br />{' '}
                        closeButton?: string, <br /> body?: string <br />
                        {'}'}
                      </pre>
                    </td>
                    <td className="border p-1">{'{}'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 id="AnimationType" className="pt-10 text-h4 mb-6">
              <span className="text-accent">-</span> AnimationType
            </h3>
            <div className="px-5 py-4 bg-gray-300 rounded-md">
              {ANIMATIONS.map((item, index) => (
                <React.Fragment key={item}>
                  <span className="whitespace-nowrap">"{item}"</span>
                  {index !== ANIMATIONS.length - 1 && ' | '}
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>

        <Modal
          enterAnimation={animation.enterAnimation}
          exitAnimation={animation.exitAnimation}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          titleElement={<h3>Example Modal</h3>}
          classNames={{ header: 'bg-accent-light' }}
        >
          <h2 className="mb-4">Look I'm a Modal!</h2>
          <img alt="" src="https://picsum.photos/seed/a/2100/900" />
          <img alt="" src="https://picsum.photos/seed/b/2100/900" />
          <img alt="" src="https://picsum.photos/seed/c/2100/900" />
          <img alt="" src="https://picsum.photos/seed/d/2100/900" />
          <img alt="" src="https://picsum.photos/seed/e/2100/900" />
          <img alt="" src="https://picsum.photos/seed/f/2100/900" />
          <img alt="" src="https://picsum.photos/seed/g/2100/900" />
        </Modal>
      </main>
      <footer className="text-caption text-center p-2 bg-gray-300">
        <s>
          Made with <span className="text-red-600">❤</span>
        </s>{' '}
        Coded on ☕ by{' '}
        <a href="https://snehil.dev" target="_blank" rel="noreferrer">
          Snehil
        </a>{' '}
        | View on{' '}
        <a
          href="https://github.com/SneakySensei/react-lean-modal"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </>
  );
};

export default App;
