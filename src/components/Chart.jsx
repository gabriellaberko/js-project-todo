import { useTaskStore } from "../stores/taskStore";
import { PieChart, Pie, Cell } from "recharts";

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

  const sliceColors = ["#45b0ff", "#6699f3", "##837fdf", "#9a64c2", "#a8459f", "#ad2077"];


  return(
      <PieChart width={280} height={280}>
      <Pie   
        data={pieChartCategoryData}
        dataKey="value"
        nameKey="name"
        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`} // display category name + percent
        outerRadius={100}
      >
      {pieChartCategoryData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={sliceColors[index % sliceColors.length]} />
      ))}
      </Pie>
      </PieChart>
  );
}