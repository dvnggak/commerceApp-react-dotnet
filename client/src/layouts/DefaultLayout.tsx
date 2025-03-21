import { Navbar } from "../components/Navbar";

interface IChildren {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">{children}</div>
    </div>
  );
};
