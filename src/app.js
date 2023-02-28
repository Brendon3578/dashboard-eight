import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

const dayWithMoreSalesTextEl = document.getElementById("dayWithMoreSales");
const dayWithLessSalesTextEl = document.getElementById("dayWithLessSales");

Chart.register(annotationPlugin);

// gradient bar graph
const bar_ctx = document.getElementById("salesByDayWeekday").getContext("2d");

var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
purple_orange_gradient.addColorStop(0, "#90F7EC");
purple_orange_gradient.addColorStop(1, "#32CCBC");

(async function () {
  const salesPerWeekday = [
    { weekdayFullName: "Domingo", weekday: "domingo", value: 25 },
    { weekdayFullName: "Segunda-feira", weekday: "segunda", value: 75 },
    { weekdayFullName: "Terça-feira", weekday: "terça", value: 60 },
    { weekdayFullName: "Quarta-feira", weekday: "quarta", value: 100 },
    { weekdayFullName: "Quinta-feira", weekday: "quinta", value: 90 },
    { weekdayFullName: "Sexta-feira", weekday: "sexta", value: 85 },
    { weekdayFullName: "Sábado", weekday: "sábado", value: 55 },
  ];

  let highestSale = salesPerWeekday.reduce((previous, current) => {
    return current.value > previous.value ? current : previous;
  });

  let lowestSale = salesPerWeekday.reduce((previous, current) => {
    return current.value < previous.value ? current : previous;
  });

  dayWithMoreSalesTextEl.innerText = highestSale.weekdayFullName.toLowerCase();
  dayWithLessSalesTextEl.innerText = lowestSale.weekdayFullName.toLowerCase();

  const closedSales = [{}];

  const middleOfChart =
    Math.max(...salesPerWeekday.map((sales) => sales.value)) / 2;

  new Chart(document.getElementById("salesByDayWeekday"), {
    data: {
      labels: salesPerWeekday.map((row) => row.weekday),
      datasets: [
        {
          type: "bar",
          label: "Vendas por dia da semana",
          data: salesPerWeekday.map((row) => row.value),
          maxBarThickness: 15,
          order: 10,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        annotation: {
          annotations: {
            line1: {
              type: "line",
              yMin: middleOfChart,
              yMax: middleOfChart,
              borderColor: "#4A4556",
              borderWidth: 3,

              z: 1,
              drawTime: "beforeDatasetsDraw",
            },
          },
        },
      },

      elements: {
        bar: {
          borderRadius: 999,
          backgroundColor: purple_orange_gradient,
          borderSkipped: "middle",
        },
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          display: true,
          ticks: {
            color: "white",
            font: {
              family: "Inter, sans-serif",
            },
          },
          border: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  });
})();
