import clsx from "clsx"

export interface PageProps {
  header?: React.ReactNode;
  oneScreen?: boolean
}

const Page: React.FC<PageProps> = ({ header, oneScreen = false, children }) => {
  return (
    <div className={clsx(oneScreen ? 'h-screen' : "min-h-screen")}>
      {header}

      <div className="flex">
        <div className="flex-grow mx-auto w-full max-w-7xl px-4">{children}</div>
      </div>
    </div>
  );
};

export default Page;
