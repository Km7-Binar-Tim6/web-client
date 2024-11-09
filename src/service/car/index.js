export const getCars = async (
    plate,
    rentPerDay,
    capacity,
    description,
    availableAt,
    available,
    year,
    image
) => {
    const token = localStorage.getItem("token");

    let params = {};
    if (plate) params.plate = plate;
    if (rentPerDay) params.rentperday = rentPerDay;
    if (capacity) params.capacity = capacity;
    if (description) params.description = description;
    if (availableAt) params.availableat = availableAt;
    if (available) params.available = available;
    if (year) params.year = year;
    if (image) params.image = image;

    let url = `${import.meta.env.VITE_API_URL}/cars?` + new URLSearchParams(params);

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    const result = await response.json();
    return result;
}

export const getDetailCar = async (id) => {
    const token = localStorage.getItem("token");

    let url = `${import.meta.env.VITE_API_URL}/cars/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    // get data
    const result = await response.json();
    return result;
};

export const deleteCar = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/cars/${id}`;

    const response = await fetch(url, {
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    const result = await response.json();
    return result;
}
