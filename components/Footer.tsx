import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex px-2 py-3 md:py-4 bg-gray-700 text-white">
      <div className="m-auto max-w-3xl text-center">
        <h2 className="font-header text-bts-500 font-bold text-xl md:text-3xl">
          Bus To Show
        </h2>

        <p>
          In the future, and now in the present, Bus to Show&apos;s strategy is
          to provide autonomous vehicles in which humans board and magically get
          transported to their favorite local events.{" "}
          {/* It&apos;s simple: it saves
                lives and saves fuel that preserves the environment for future
                people. */}
          All you need to do is hop on board and be{" "}
          <span className="font-bold">apart of the solution.</span>
        </p>

        {/* Learn more here buttons

            copyright

            anything else? */}
      </div>
    </footer>
  );
};

export default Footer;
