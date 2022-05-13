export const throttleAndBrakeOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 1,
    },
    x: {
      display: false,
      ticks: {
        maxTicksLimit: 0,
      },
    },
  },
}

export const speedOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      display: false,
      ticks: {
        maxTicksLimit: 0,
      },
    },
    y: {
      min: 0,
      max: 350,
    },
  },
}

export const steeringOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      min: -1,
      max: 1,
    },
    x: {
      display: false,
      ticks: {
        maxTicksLimit: 0,
      },
    },
  },
}

export const timeDeltaOptions = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      display: false,
      ticks: {
        maxTicksLimit: 0,
      },
    },
  },
}
