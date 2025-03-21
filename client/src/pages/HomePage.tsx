import BasicCard from "../components/Card";
import { products } from "../data/productsData";
import { DefaultLayout } from "../layouts/DefaultLayout";

export const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <BasicCard key={index} {...product} />
        ))}
      </div>
    </DefaultLayout>
  );
};
