import { useState } from 'react';
import Modal, { TRANSITIONS, TransitionType } from 'react-lean-modal';

import styles from './App.module.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [animation, setAnimation] = useState<{
    enterAnimation: TransitionType;
    exitAnimation: TransitionType;
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
    <div className={styles.app}>
      <h1>React Fast Modal</h1>
      <p>
        Modals can be tricky! They are tedious to implement also tend to change
        in style and animation from project to project.
      </p>
      <figure>
        <img src="https://picsum.photos/id/10/1728/1080" alt="filler" />
        <figcaption>Filler cover image to enable page scroll.</figcaption>
      </figure>
      <p>
        It's hard to manually assign layer orders for modals. You have to
        consider all z-indexes used on your page so that other elements are not
        rendered on top of the modal. Even if you keep a very high value there
        will come a day when some developer on your team uses a higher value
        for, let's say, the navbar? The best way to be certain that nothing is
        rendered on top of your modals is to put them outside your regular App
        root element. React portals come in clutch here.
      </p>

      <div className={styles.controls}>
        <label>
          enterAnimation
          <select
            value={animation.enterAnimation}
            onChange={handleOptionChange}
            name="enterAnimation"
          >
            {TRANSITIONS.map((anim) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </label>
        <label>
          exitAnimation
          <select
            value={animation.exitAnimation}
            onChange={handleOptionChange}
            name="exitAnimation"
          >
            {TRANSITIONS.map((anim: TransitionType) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={() => setShowModal(true)} className={styles.button}>
        Open Modal
      </button>
      <h2>Why use React Portals?</h2>
      <p>
        As per{' '}
        <a
          href="https://reactjs.org/docs/portals.html"
          target="_blank"
          rel="noreferrer"
        >
          React's documentation
        </a>
        ,
        <blockquote>
          Portals provide a first-class way to render children into a DOM node
          that exists outside the DOM hierarchy of the parent component.
        </blockquote>
      </p>
      <p>
        I'm planning to release this as a npm package but I'm still reading up
        on it.
      </p>

      <Modal
        enterTransition={animation.enterAnimation}
        exitTransition={animation.exitAnimation}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        titleElement={<h3>Example Modal</h3>}
      >
        <h2>Look I'm a Modal!</h2>
        <img
          alt="filler-a"
          className={styles.modalImage}
          src="https://picsum.photos/seed/a/2100/900"
        />
        <img
          alt="filler-b"
          className={styles.modalImage}
          src="https://picsum.photos/seed/b/2100/900"
        />
        <img
          alt="filler-c"
          className={styles.modalImage}
          src="https://picsum.photos/seed/c/2100/900"
        />
        <img
          alt="filler-d"
          className={styles.modalImage}
          src="https://picsum.photos/seed/d/2100/900"
        />
        <img
          alt="filler-e"
          className={styles.modalImage}
          src="https://picsum.photos/seed/e/2100/900"
        />
        <img
          alt="filler-f"
          className={styles.modalImage}
          src="https://picsum.photos/seed/f/2100/900"
        />
        <img
          alt="filler-g"
          className={styles.modalImage}
          src="https://picsum.photos/seed/g/2100/900"
        />
      </Modal>
    </div>
  );
};

export default App;
