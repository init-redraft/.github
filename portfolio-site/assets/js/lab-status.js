const statusMap = {
  "active": "green",
  "inactive": "yellow",
  "failed": "red",
  "unknown": "red"
};

const systems = [
  {
    name: "Raspberry Pi",
    endpoint: "http://lab.init-redraft.com:9000/services",
    services: ["dns_updater", "wireguard", "pi_exporter", "ufw"]
  },
  {
    name: "Dell Server",
    endpoint: "http://lab.init-redraft.com:9000/services",
    services: ["dns_updater", "wireguard", "pi_exporter", "ufw"]
  }
];

function buildTable() {
  const table = document.getElementById("status-table");
  systems.forEach((system, sysIndex) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${system.name}</td>`;

    system.services.forEach((service) => {
      const span = document.createElement("span");
      span.classList.add("status-circle", "red");
      span.setAttribute("data-system", sysIndex);
      span.setAttribute("data-service", service);
      span.setAttribute("title", `${service}: unknown`);

      const cell = document.createElement("td");
      cell.appendChild(span);
      row.appendChild(cell);
    });

    table.appendChild(row);
  });
}

async function updateStatuses() {
  systems.forEach(async (system, sysIndex) => {
    try {
      const response = await fetch(system.endpoint);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      system.services.forEach((service) => {
        const selector = `.status-circle[data-system="${sysIndex}"][data-service="${service}"]`;
        const circle = document.querySelector(selector);
        if (!circle) return;

        const status = data[service] || "unknown";
        const colorClass = statusMap[status] || "red";

        circle.classList.remove("green", "yellow", "red");
        circle.classList.add(colorClass);
        circle.setAttribute("title", `${service}: ${status}`);
      });
    } catch (error) {
      console.error(`Failed to fetch ${system.name} from ${system.endpoint}:`, error);
    }
  });
}

// Initialize
buildTable();
updateStatuses();
setInterval(updateStatuses, 30000);