import AnswerSection from "@/components/home-design/answer-section";
import CategoriesSection from "@/components/home-design/category-section";

const HomePage = () => {
  return (
    <div className="flex gap-4">
      <CategoriesSection />
      <AnswerSection />
    </div>
  );
};
export default HomePage;
