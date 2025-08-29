export type ItemTypeGPSData = {
  id: number;
  user: string;
  userGPS?: {
    state: string;
    substate: string;
    rented: boolean;
    nopol: string;
    datetime: string;
    kecepatan: number;
    lokasi: string;
    odometer: number;
    mileage?: number;
    parkingDuration?: string;
    batteryLevel?: number;
  }[];
};

{/* GAREK NGISI IKI YAK */ }
export const DataGPS: ItemTypeGPSData[] = [
  {
    id: 1,
    user: 'Randy',
    userGPS: [
      {
        state: 'On',
        nopol: 'B 1234 XYZ',
        datetime: '2024-06-10 08:30',
        kecepatan: 60,
        lokasi: 'Jl. Mampang Prapatan Raya No. 100, RT.2/RW.5, Tegal Parang, Kec. Mampang Prapatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790',
        odometer: 12000,
        rented: false,
        substate: 'Park',
        mileage: 120,
        parkingDuration: '1h 30m',
        batteryLevel: 100,
      },
      {
        state: 'On',
        nopol: 'B 12 XYJ',
        datetime: '2024-06-10 09:30',
        kecepatan: 46,
        lokasi: 'Jl. DI Panjaitan No. 5, RT.7/RW.10, Cipinang Cempedak, Kec. Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13340',
        odometer: 1200,
        rented: true,
        substate: 'Move',
        mileage: 80,
        parkingDuration: '',
        batteryLevel: 72,
      },
      {
        state: 'Off',
        nopol: 'B 1234 XYZ',
        datetime: '2024-06-10 12:00',
        kecepatan: 0,
        lokasi: 'Jl. S. Parman Kav. 21, RT.12/RW.6, Slipi, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11480',
        odometer: 12500,
        rented: false,
        substate: '',
        mileage: 50,
        parkingDuration: '',
        batteryLevel: 40,
      },
    ],
  },
  {
    id: 2,
    user: 'Wito',
    userGPS: [
      {
        state: 'On',
        nopol: 'B 5678 ABC',
        datetime: '2024-06-10 09:00',
        kecepatan: 50,
        lokasi: 'Jl. Matraman Raya No. 30, RT.3/RW.2, Palmeriam, Kec. Matraman, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13140',
        odometer: 15000,
        rented: false,
        substate: 'Move',
        mileage: 100,
        parkingDuration: '',
        batteryLevel: 90,
      },
      {
        state: 'Off',
        nopol: 'B 5678 ABC',
        datetime: '2024-06-10 13:30',
        kecepatan: 0,
        lokasi: 'Jl. Danau Sunter Selatan Blok O, RT.12/RW.16, Sunter Agung, Kec. Tj. Priok, Kota Jakarta Utara, Daerah Khusus Ibukota Jakarta 14350',
        odometer: 15200,
        rented: false,
        substate: '',
        mileage: 30,
        parkingDuration: '',
        batteryLevel: 55,
      },
    ],
  },
  {
    id: 3,
    user: 'Andi',
    userGPS: [
      {
        state: 'On',
        nopol: 'B 9101 DEF',
        datetime: '2024-06-10 10:15',
        kecepatan: 45,
        lokasi: 'Jl. Pemuda No. 1, RT.9/RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220',
        odometer: 18000,
        rented: true,
        substate: 'Move',
        mileage: 90,
        parkingDuration: '',
        batteryLevel: 67,
      },
      {
        state: 'On',
        nopol: 'B 9101 DEF',
        datetime: '2024-06-10 14:00',
        kecepatan: 30,
        lokasi: 'Jl. Medan Merdeka Barat No. 3, RT.2/RW.3, Gambir, Kec. Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110',
        odometer: 18200,
        rented: true,
        substate: 'Park',
        mileage: 60,
        parkingDuration: '45m',
        batteryLevel: 33,
      },
    ],
  },
  {
    id: 3,
    user: 'BudiSpeed',
    userGPS: [
      {
        state: 'On',
        nopol: 'W 4769 KN',
        datetime: '2024-06-10 10:15',
        kecepatan: 45,
        lokasi: 'Jl. Pemuda No. 1, RT.9/RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220',
        odometer: 18000,
        rented: false,
        substate: 'Move',
        mileage: 110,
        parkingDuration: '',
        batteryLevel: 95,
      },
      {
        state: 'On',
        nopol: 'L 9101 PP',
        datetime: '2024-06-10 14:00',
        kecepatan: 30,
        lokasi: 'Jl. Medan Merdeka Barat No. 3, RT.2/RW.3, Gambir, Kec. Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110',
        odometer: 18200,
        rented: true,
        substate: 'Park',
        mileage: 70,
        parkingDuration: '1h 10m',
        batteryLevel: 20,
      },
    ],
  },
];

export function CountStatus(data: ItemTypeGPSData[], status: string) {
  return data.reduce((total, user) => {
    const count = user.userGPS
      ? user.userGPS.filter(gps => {
        if (status === 'On') return gps.state === 'On';
        if (status === 'Off') return gps.state === 'Off';
        if (status === 'Move') return gps.substate === 'Move';
        if (status === 'Park') return gps.substate === 'Park';
        if (status === 'Rent') return gps.rented === true;
        return false;
      }).length
      : 0;
    return total + count;
  }, 0);
}

export function CountStatusByName(data: ItemTypeGPSData[], status: string, UserName: string) {
  const filteredData = UserName
    ? data.filter(user => user.user.toLowerCase() === UserName.toLowerCase())
    : data;

  return filteredData.reduce((total, user) => {
    const count = user.userGPS
      ? user.userGPS.filter(gps => {
        if (status === 'On') return gps.state === 'On';
        if (status === 'Off') return gps.state === 'Off';
        if (status === 'Move') return gps.substate === 'Move';
        if (status === 'Park') return gps.substate === 'Park';
        if (status === 'Rent') return gps.rented === true;
        return false;
      }).length
      : 0;
    return total + count;
  }, 0);
}

export function CountAll(data: ItemTypeGPSData[]) {
  return data.reduce((total, user) => total + (user.userGPS ? user.userGPS.length : 0), 0);
}
