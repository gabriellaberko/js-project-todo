import { useTaskStore } from "../stores/taskStore";
import { PieChart, Pie, Cell, Legend } from "recharts";

export const Chart = () => {

  const tasks = useTaskStore(state => state.tasks);

  const categories = tasks.map((task)=> task.category);

  //count how many instances of each category
  const categoryCount = categories.reduce((acc, category) => {
    acc[category] = (acc[category]||0) + 1;
    return acc;
  }, {});

  //turn into an object array to use for pie chart
  const pieChartCategoryData = Object.entries(categoryCount).map(([name, value])=>({ name, value }));

  const sliceColors = ["#52C5FF", "#A78BFA", "#9a64c2", "#a8459f", "#ad2077"];

  // const sliceColorsGreyScale = ["#333333", "#575757", "#7e7e7e", "#a7a7a7", "#d2d2d2"];


  return(
      <PieChart width={280} height={180}>
      <Pie   
        data={pieChartCategoryData}
        dataKey="value"
        nameKey="name"
        cx="40%"  //make space for legend
        cy="50%"
        outerRadius={60}
      >
      {pieChartCategoryData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={sliceColors[index % sliceColors.length]} />
      ))}
      </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          iconType="circle"
        />
      </PieChart>
  );
}