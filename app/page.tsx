import Articles from "@/components/Articles";
import Assessment from "@/components/Assessment";
import Categories from "@/components/Categories";
import Cities from "@/components/Cities";
import Clients from "@/components/Clients";
import Competencies from "@/components/Competencies";
import Courses from "@/components/Courses";
import GroupeTrainer from "@/components/GroupeTrainer";
import TopSearch from "@/components/TopSearch";

export default function Home() {


    // Clean up the event listener when the component unmounts
    
  // lg:1456px
  // md:1905px
  // sm:2178px
  // 1769px
  return (
    <div>
      <TopSearch/>
      <GroupeTrainer/>
      <Cities/>
      <Competencies/>
      <Categories/>
      <Clients/>
      <Assessment/>
      <Courses/>
      <Articles/>
    </div>
  );
}
