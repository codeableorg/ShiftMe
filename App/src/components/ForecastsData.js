const forecastsData = () => {
  const forecasts = [
    {
      id: 1,
      month: "Agosto",
      typeForecast: "Max-Occupancy",
      dataDays: [
        { date: "2019-08-01", data: 77.78 },
        { date: "2019-08-02", data: 79.23 },
        { date: "2019-08-03", data: 93.72 },
        { date: "2019-08-04", data: 87.92 },
        { date: "2019-08-05", data: 74.88 },
        { date: "2019-08-06", data: 54.42 },
        { date: "2019-08-07", data: 29.95 },
        { date: "2019-08-08", data: 77.78 },
        { date: "2019-08-09", data: 79.23 },
        { date: "2019-08-10", data: 93.72 },
        { date: "2019-08-11", data: 87.92 },
        { date: "2019-08-12", data: 74.88 },
        { date: "2019-08-13", data: 59.42 },
        { date: "2019-08-14", data: 29.95 },
        { date: "2019-08-15", data: 77.78 },
        { date: "2019-08-16", data: 79.23 },
        { date: "2019-08-17", data: 93.72 },
        { date: "2019-08-18", data: 87.92 },
        { date: "2019-08-19", data: 74.88 },
        { date: "2019-08-20", data: 54.42 },
        { date: "2019-08-21", data: 29.95 },
        { date: "2019-08-22", data: 59.42 },
        { date: "2019-08-23", data: 29.95 },
        { date: "2019-08-24", data: 87.92 },
        { date: "2019-08-25", data: 54.42 },
        { date: "2019-08-26", data: 77.78 },
        { date: "2019-08-27", data: 54.42 },
        { date: "2019-08-28", data: 59.42 },
        { date: "2019-08-29", data: 87.92 },
        { date: "2019-08-30", data: 59.42 },
        { date: "2019-08-31", data: 77.78 }
      ],
      created_at: "2019-08-13T00:32:07.485Z",
      updated_at: "2019-08-13T00:32:07.485Z"
    },
    {
      id: 2,
      month: "Agosto",
      typeForecast: "Arrival-Rooms",
      dataDays: [
        { date: "2019-08-01", data: 36 },
        { date: "2019-08-02", data: 70 },
        { date: "2019-08-03", data: 60 },
        { date: "2019-08-04", data: 41 },
        { date: "2019-08-05", data: 31 },
        { date: "2019-08-06", data: 24 },
        { date: "2019-08-07", data: 10 },
        { date: "2019-08-08", data: 36 },
        { date: "2019-08-09", data: 70 },
        { date: "2019-08-10", data: 60 },
        { date: "2019-08-11", data: 41 },
        { date: "2019-08-12", data: 31 },
        { date: "2019-08-13", data: 24 },
        { date: "2019-08-14", data: 10 },
        { date: "2019-08-15", data: 31 },
        { date: "2019-08-16", data: 24 },
        { date: "2019-08-17", data: 36 },
        { date: "2019-08-18", data: 70 },
        { date: "2019-08-19", data: 60 },
        { date: "2019-08-20", data: 41 },
        { date: "2019-08-21", data: 31 },
        { date: "2019-08-22", data: 24 },
        { date: "2019-08-23", data: 10 },
        { date: "2019-08-24", data: 60 },
        { date: "2019-08-25", data: 41 },
        { date: "2019-08-26", data: 24 },
        { date: "2019-08-27", data: 60 },
        { date: "2019-08-28", data: 30 },
        { date: "2019-08-29", data: 41 },
        { date: "2019-08-30", data: 24 },
        { date: "2019-08-31", data: 31 }
      ],
      created_at: "2019-08-13T00:32:07.499Z",
      updated_at: "2019-08-13T00:32:07.499Z"
    },
    {
      id: 3,
      month: "Agosto",
      typeForecast: "Departure-Rooms",
      dataDays: [
        { date: "2019-08-01", data: 80 },
        { date: "2019-08-02", data: 68 },
        { date: "2019-08-03", data: 60 },
        { date: "2019-08-04", data: 34 },
        { date: "2019-08-05", data: 66 },
        { date: "2019-08-06", data: 75 },
        { date: "2019-08-07", data: 35 },
        { date: "2019-08-08", data: 90 },
        { date: "2019-08-09", data: 76 },
        { date: "2019-08-10", data: 55 },
        { date: "2019-08-11", data: 88 },
        { date: "2019-08-12", data: 78 },
        { date: "2019-08-13", data: 65 },
        { date: "2019-08-14", data: 45 },
        { date: "2019-08-15", data: 34 },
        { date: "2019-08-16", data: 45 },
        { date: "2019-08-17", data: 36 },
        { date: "2019-08-18", data: 70 },
        { date: "2019-08-19", data: 67 },
        { date: "2019-08-20", data: 45 },
        { date: "2019-08-21", data: 67 },
        { date: "2019-08-22", data: 45 },
        { date: "2019-08-23", data: 34 },
        { date: "2019-08-24", data: 89 },
        { date: "2019-08-25", data: 56 },
        { date: "2019-08-26", data: 56 },
        { date: "2019-08-27", data: 67 },
        { date: "2019-08-28", data: 70 },
        { date: "2019-08-29", data: 56 },
        { date: "2019-08-30", data: 36 },
        { date: "2019-08-31", data: 36 }
      ],
      created_at: "2019-08-13T00:32:08.499Z",
      updated_at: "2019-08-13T00:32:07.499Z"
    },
    {
      id: 4,
      month: "September",
      typeForecast: "Max-Occupancy",
      dataDays: [
        { date: "2019-09-01", data: 77.78 },
        { date: "2019-09-02", data: 79.23 },
        { date: "2019-09-03", data: 93.72 },
        { date: "2019-09-04", data: 87.92 },
        { date: "2019-09-05", data: 74.88 },
        { date: "2019-09-06", data: 54.42 },
        { date: "2019-09-07", data: 29.95 },
        { date: "2019-09-08", data: 77.78 },
        { date: "2019-09-09", data: 79.23 },
        { date: "2019-09-10", data: 93.72 },
        { date: "2019-09-11", data: 87.92 },
        { date: "2019-09-12", data: 74.88 },
        { date: "2019-09-13", data: 59.42 },
        { date: "2019-09-14", data: 29.95 },
        { date: "2019-09-15", data: 77.78 },
        { date: "2019-09-16", data: 79.23 },
        { date: "2019-09-17", data: 93.72 },
        { date: "2019-09-18", data: 87.92 },
        { date: "2019-09-19", data: 74.88 },
        { date: "2019-09-20", data: 54.42 },
        { date: "2019-09-21", data: 29.95 },
        { date: "2019-09-22", data: 59.42 },
        { date: "2019-09-23", data: 29.95 },
        { date: "2019-09-24", data: 87.92 },
        { date: "2019-09-25", data: 54.42 },
        { date: "2019-09-26", data: 77.78 },
        { date: "2019-09-27", data: 54.42 },
        { date: "2019-09-28", data: 59.42 },
        { date: "2019-09-29", data: 87.92 },
        { date: "2019-09-30", data: 59.42 }
      ],
      created_at: "2019-09-13T00:32:07.485Z",
      updated_at: "2019-09-13T00:32:07.485Z"
    },
    {
      id: 5,
      month: "September",
      typeForecast: "Arrival-Rooms",
      dataDays: [
        { date: "2019-09-01", data: 36 },
        { date: "2019-09-02", data: 70 },
        { date: "2019-09-03", data: 60 },
        { date: "2019-09-04", data: 41 },
        { date: "2019-09-05", data: 31 },
        { date: "2019-09-06", data: 24 },
        { date: "2019-09-07", data: 10 },
        { date: "2019-09-08", data: 36 },
        { date: "2019-09-09", data: 70 },
        { date: "2019-09-10", data: 60 },
        { date: "2019-09-11", data: 41 },
        { date: "2019-09-12", data: 31 },
        { date: "2019-09-13", data: 24 },
        { date: "2019-09-14", data: 10 },
        { date: "2019-09-15", data: 31 },
        { date: "2019-09-16", data: 24 },
        { date: "2019-09-17", data: 36 },
        { date: "2019-09-18", data: 70 },
        { date: "2019-09-19", data: 60 },
        { date: "2019-09-20", data: 41 },
        { date: "2019-09-21", data: 31 },
        { date: "2019-09-22", data: 24 },
        { date: "2019-09-23", data: 10 },
        { date: "2019-09-24", data: 60 },
        { date: "2019-09-25", data: 41 },
        { date: "2019-09-26", data: 24 },
        { date: "2019-09-27", data: 60 },
        { date: "2019-09-28", data: 30 },
        { date: "2019-09-29", data: 41 },
        { date: "2019-09-30", data: 24 }
      ],
      created_at: "2019-09-13T00:32:07.499Z",
      updated_at: "2019-09-13T00:32:07.499Z"
    },
    {
      id: 6,
      month: "September",
      typeForecast: "Departure-Rooms",
      dataDays: [
        { date: "2019-09-01", data: 80 },
        { date: "2019-09-02", data: 68 },
        { date: "2019-09-03", data: 60 },
        { date: "2019-09-04", data: 34 },
        { date: "2019-09-05", data: 66 },
        { date: "2019-09-06", data: 75 },
        { date: "2019-09-07", data: 35 },
        { date: "2019-09-08", data: 90 },
        { date: "2019-09-09", data: 76 },
        { date: "2019-09-10", data: 55 },
        { date: "2019-09-11", data: 88 },
        { date: "2019-09-12", data: 78 },
        { date: "2019-09-13", data: 65 },
        { date: "2019-09-14", data: 45 },
        { date: "2019-09-15", data: 34 },
        { date: "2019-09-16", data: 45 },
        { date: "2019-09-17", data: 36 },
        { date: "2019-09-18", data: 70 },
        { date: "2019-09-19", data: 67 },
        { date: "2019-09-20", data: 45 },
        { date: "2019-09-21", data: 67 },
        { date: "2019-09-22", data: 45 },
        { date: "2019-09-23", data: 34 },
        { date: "2019-09-24", data: 89 },
        { date: "2019-09-25", data: 56 },
        { date: "2019-09-26", data: 56 },
        { date: "2019-09-27", data: 67 },
        { date: "2019-09-28", data: 70 },
        { date: "2019-09-29", data: 56 },
        { date: "2019-09-30", data: 36 }
      ],
      created_at: "2019-09-13T00:32:08.499Z",
      updated_at: "2019-09-13T00:32:07.499Z"
    }
  ];
  return forecasts;
};

export default forecastsData;
