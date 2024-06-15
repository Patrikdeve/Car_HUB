
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  

  export interface FilterProps  {
    manufacturer?: string 
    year?: number 
    fuel?: string
    limit?: number 
    model?: string
    pageNumber?:number
  }

export async function fetchCars(filters: FilterProps) {
    const {manufacturer, model, year, fuel, limit} = filters
    const headers = {
        'x-rapidapi-key': '71f23109f1msh33c6f95f7bb157fp1911c4jsn5fdf5c580bfb',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
        {
          headers: headers,
        }
      );

    const result = await response.json(); 
    return result; 
}


type CarProps = {
    city_mpg:number
        class:string
        combination_mpg:number
        cylinders:number
        displacement:number
        drive:string
        fuel_type:string
        highway_mpg:number
        make:string
        model:string
        transmission:string
        year:number
}
export const generateImageUrl = (car:CarProps, angle?:string) => {

    const url = new URL('https://cdn.imagin.studio/getimage'); 
    const {make, model, year} = car; 
    
    url.searchParams.append('customer', make)
    url.searchParams.append('make', make)
    url.searchParams.append('modelFamily', model.split(" ")[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modelYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)
    return `${url}`;
}

export const updateSearchParams = (type:string, value:string) => {
    const searchParams = new URLSearchParams(window.location.search); 

    searchParams.set(type, value)
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname; 
}