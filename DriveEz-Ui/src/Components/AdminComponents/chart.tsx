import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

const MyCharts: React.FC = () => {
  const pieChart1Ref = useRef<Chart<"pie", number[], string> | null>(null);
  const pieChart2Ref = useRef<Chart<"pie", number[], string> | null>(null);

  useEffect(() => {
    // Pie Chart 1
    const pieCanvas1 = document.getElementById('pieChart1') as HTMLCanvasElement;
    if (pieCanvas1) {
      if (pieChart1Ref.current) {
        pieChart1Ref.current.destroy();
      }
      pieCanvas1.parentElement?.setAttribute('style', 'width: 400px; height: 400px;');
      pieChart1Ref.current = new Chart(pieCanvas1, {
        type: 'pie',
        data: {
          labels: ['Available', 'Unavailable'],
          datasets: [{
            label: 'Count',
            data: [5, 2],
            backgroundColor: [
              '#fc8dbc',
              '#5c8ecc'
            ],
            borderWidth: 1
          }]
        }
      });
    }

    // Pie Chart 2
    const pieCanvas2 = document.getElementById('pieChart2') as HTMLCanvasElement;
    if (pieCanvas2) {
      if (pieChart2Ref.current) {
        pieChart2Ref.current.destroy();
      }
      pieCanvas2.parentElement?.setAttribute('style', 'width: 400px; height: 400px;');
      pieChart2Ref.current = new Chart(pieCanvas2, {
        type: 'pie',
        data: {
          labels: ['Petrol', 'Diesel', 'CNG', 'EV'],
          datasets: [{
            label: 'Count',
            data: [2, 1, 3, 2],
            backgroundColor: [
              'orange',
              'green',
              'blue',
              'purple'
            ],
            borderWidth: 1
          }]
        }
      });
    }

    // Cleanup functions
    return () => {
      if (pieChart1Ref.current) {
        pieChart1Ref.current.destroy();
      }
      if (pieChart2Ref.current) {
        pieChart2Ref.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '50px' }}>
        <div style={{ width: '400px', height: '400px' }}>
          <canvas id="pieChart1"></canvas>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Car Availability</p>
          </div>
        </div>
        <div style={{ width: '400px', height: '400px' }}>
          <canvas id="pieChart2"></canvas>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Fuel Type</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCharts;
