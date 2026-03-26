type Brand = {
  name: string;
  icon: string;
  color?: string;
};

type BrandFilterProps = {
  brands: Brand[];
  selectedBrand: string | null;
  onSelectBrand: (brand: string | null) => void;
};

export default function BrandFilter({ brands, selectedBrand, onSelectBrand }: BrandFilterProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg h-fit sticky top-24">
      <h2 className="text-2xl font-bold mb-6">Marcas</h2>
      <div className="space-y-2">
        <button
          onClick={() => onSelectBrand(null)}
          className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${
            selectedBrand === null
              ? 'bg-[#00ff00] text-black'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <span className="text-lg mr-2">📱</span>
          Todos os Produtos
        </button>
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => onSelectBrand(brand.name)}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${
              selectedBrand === brand.name
                ? 'ring-2 ring-[#00ff00]'
                : 'hover:opacity-90'
            }`}
            style={{
              backgroundColor: brand.color || '#f3f4f6',
              color: brand.color ? '#fff' : '#374151'
            }}
          >
            <span className="text-lg mr-2">{brand.icon}</span>
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}
