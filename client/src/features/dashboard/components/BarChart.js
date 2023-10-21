import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Last Year',
            data: labels.map(() => { return Math.random() * 10 + 50 }),
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'This Year',
            data: labels.map(() => { return Math.random() * 10 + 50 }),
            backgroundColor: 'rgba(53, 162, 235, 1)',
          },
        ],
      };

    return(
      <TitleCard title={"Yearly Comparsion"}>
            <Bar options={options} data={data} />
      </TitleCard>

    )
}


export default BarChart