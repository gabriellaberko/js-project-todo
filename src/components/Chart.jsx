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

  const sliceColors = ["#14B8A6","#45B0FF", "#2563EB", "#4F46E5", "#A78BFA", "#9a64c2", "#a8459f", "#ad2077", "#7C3AED"];

  return(
      <PieChart width={290} height={180}>
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