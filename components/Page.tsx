import clsx from "clsx";

export interface PageProps {
  header?: React.ReactNode;
  oneScreen?: boolean;
}

const Page: React.FC<PageProps> = ({ header, oneScreen = false, children }) => {
  return (
    <div
      className={clsx(oneScreen ? "flex flex-col h-screen" : "min-h-screen")}
    >
      {header}

      <div
        className={clsx(
          "flex-grow mx-auto w-full max-w-7xl px-4",
          oneScreen && "flex flex-col min-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Page;
