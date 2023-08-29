import "../../styles/tabs.module.css";

export interface TabsProps {
    categories: string[];
    activeCategory: string;
    onTabChange: (category: string) => void;
  }
  
export const Tabs: React.FC<TabsProps> = ({ categories, activeCategory, onTabChange }) => {
    return (
      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active-tab" : "tab"}
            onClick={() => onTabChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
