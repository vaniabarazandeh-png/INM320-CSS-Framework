

const salesCanvas = document.getElementById("salesChart");
const salesContext = salesCanvas.getContext("2d");

// Turquoise gradient
const tealGradient = salesContext.createLinearGradient(0, 0, 0, 300);

tealGradient.addColorStop(0, "rgba(79, 209, 197, 0.55)");
tealGradient.addColorStop(1, "rgba(79, 209, 197, 0.02)");

// Dark gradient
const darkGradient = salesContext.createLinearGradient(0, 0, 0, 300);

darkGradient.addColorStop(0, "rgba(45, 55, 72, 0.35)");
darkGradient.addColorStop(1, "rgba(45, 55, 72, 0.02)");

new Chart(salesCanvas, {
    type: "line",

    data: {
        labels: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],

        datasets: [
            {
                label: "Sales",
                data: [
                    180, 220, 210, 350,
                    360, 470, 390, 300,
                    360, 220, 410, 430
                ],
                borderColor: "#4FD1C5",
                backgroundColor: tealGradient,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 5,
                tension: 0.4,
                fill: true
            },
            {
                label: "Previous Sales",
                data: [
                    500, 180, 190, 270,
                    220, 220, 260, 210,
                    120, 150, 170, 130
                ],
                borderColor: "#2D3748",
                backgroundColor: darkGradient,
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 5,
                tension: 0.4,
                fill: true
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        interaction: {
            mode: "index",
            intersect: false
        },

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: "#A0AEC0",
                    font: {
                        size: 10
                    }
                }
            },

            y: {
                min: 0,
                max: 500,

                ticks: {
                    stepSize: 100,
                    color: "#A0AEC0",
                    font: {
                        size: 10
                    }
                },

                grid: {
                    color: "#EDF2F7"
                },

                border: {
                    display: false
                }
            }
        }
    }
});




const usersCanvas = document.getElementById("usersChart");

new Chart(usersCanvas, {
    type: "bar",

    data: {
        labels: [
            "1", "2", "3", "4", "5",
            "6", "7", "8", "9"
        ],

        datasets: [
            {
                label: "Active Users",

                data: [
                    330, 230, 120,
                    300, 520, 420,
                    480, 290, 160
                ],

                backgroundColor: "#FFFFFF",
                borderRadius: 10,
                borderSkipped: false,
                barThickness: 6
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                },
                border: {
                    display: false
                }
            },

            y: {
                min: 0,
                max: 600,

                ticks: {
                    stepSize: 100,
                    color: "#FFFFFF",
                    font: {
                        size: 10
                    }
                },

                grid: {
                    display: false
                },

                border: {
                    display: false
                }
            }
        }
    }
});

