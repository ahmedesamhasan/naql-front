export type SummaryCard = {
  label: string;
  value: string;
  hint: string;
};

export type TripItem = {
  id: number;
  rider: string;
  driver: string;
  from: string;
  to: string;
  status: 'Completed' | 'In progress' | 'Pending' | 'Cancelled';
  amount: string;
  vehicle: string;
};

export type DriverItem = {
  id: number;
  name: string;
  phone: string;
  city: string;
  rating: number;
  status: 'Active' | 'Review' | 'Offline';
  trips: number;
};

export type UserItem = {
  id: number;
  name: string;
  email: string;
  joined: string;
  city: string;
  status: 'Active' | 'Blocked';
};

export type VehicleItem = {
  id: number;
  plate: string;
  type: string;
  model: string;
  driver: string;
  status: 'Ready' | 'Maintenance' | 'Pending';
};

export type CouponItem = {
  id: number;
  code: string;
  discount: string;
  usage: string;
  expiresAt: string;
  status: 'Running' | 'Draft' | 'Expired';
};

export type NotificationItem = {
  id: number;
  title: string;
  audience: string;
  sentAt: string;
  channel: string;
  status: 'Sent' | 'Scheduled';
};

export const summaryCards: SummaryCard[] = [
  { label: 'Total trips', value: '12,480', hint: '+8.4% this month' },
  { label: 'Active drivers', value: '312', hint: '24 ready right now' },
  { label: 'Registered users', value: '5,421', hint: '182 new this week' },
  { label: 'Monthly revenue', value: '$48,200', hint: 'Average ticket $18.7' },
];

export const trips: TripItem[] = [
  { id: 1001, rider: 'Sara Ahmed', driver: 'Mohamed Adel', from: 'Nasr City', to: 'Heliopolis', status: 'Completed', amount: '$14', vehicle: 'Toyota Corolla' },
  { id: 1002, rider: 'Omar Samir', driver: 'Youssef Khaled', from: 'Maadi', to: 'Zamalek', status: 'In progress', amount: '$11', vehicle: 'Hyundai Elantra' },
  { id: 1003, rider: 'Mona Tarek', driver: 'Ibrahim Wael', from: 'Dokki', to: 'Mohandessin', status: 'Pending', amount: '$9', vehicle: 'Nissan Sunny' },
  { id: 1004, rider: 'Kareem Mostafa', driver: 'Ahmed Galal', from: 'Sheikh Zayed', to: 'October', status: 'Cancelled', amount: '$0', vehicle: 'Kia Cerato' },
  { id: 1005, rider: 'Nour Hany', driver: 'Mahmoud Atef', from: 'Smouha', to: 'Stanley', status: 'Completed', amount: '$13', vehicle: 'BYD F3' },
  { id: 1006, rider: 'Salma Fathy', driver: 'Ali Hassan', from: 'Mansoura Center', to: 'Talkha', status: 'Completed', amount: '$7', vehicle: 'Chevrolet Optra' },
];

export const drivers: DriverItem[] = [
  { id: 1, name: 'Mohamed Adel', phone: '+20 100 222 3344', city: 'Cairo', rating: 4.9, status: 'Active', trips: 312 },
  { id: 2, name: 'Youssef Khaled', phone: '+20 101 567 8890', city: 'Giza', rating: 4.8, status: 'Active', trips: 287 },
  { id: 3, name: 'Ibrahim Wael', phone: '+20 109 555 4411', city: 'Alexandria', rating: 4.5, status: 'Review', trips: 141 },
  { id: 4, name: 'Ahmed Galal', phone: '+20 111 333 2211', city: 'Ismailia', rating: 4.2, status: 'Offline', trips: 96 },
];

export const users: UserItem[] = [
  { id: 1, name: 'Sara Ahmed', email: 'sara@example.com', joined: '2026-02-10', city: 'Cairo', status: 'Active' },
  { id: 2, name: 'Omar Samir', email: 'omar@example.com', joined: '2026-02-18', city: 'Giza', status: 'Active' },
  { id: 3, name: 'Mona Tarek', email: 'mona@example.com', joined: '2026-02-27', city: 'Alexandria', status: 'Blocked' },
  { id: 4, name: 'Kareem Mostafa', email: 'kareem@example.com', joined: '2026-03-02', city: 'Mansoura', status: 'Active' },
];

export const vehicles: VehicleItem[] = [
  { id: 1, plate: 'ق ج س 1284', type: 'Sedan', model: 'Toyota Corolla 2024', driver: 'Mohamed Adel', status: 'Ready' },
  { id: 2, plate: 'س ر م 4481', type: 'Sedan', model: 'Hyundai Elantra 2023', driver: 'Youssef Khaled', status: 'Ready' },
  { id: 3, plate: 'د ن ل 5503', type: 'SUV', model: 'Kia Sportage 2022', driver: 'Ibrahim Wael', status: 'Maintenance' },
  { id: 4, plate: 'ب ع ف 9071', type: 'Sedan', model: 'Chevrolet Optra 2021', driver: 'Ahmed Galal', status: 'Pending' },
];

export const coupons: CouponItem[] = [
  { id: 1, code: 'WELCOME20', discount: '20%', usage: '182 / 500', expiresAt: '2026-04-01', status: 'Running' },
  { id: 2, code: 'WEEKEND15', discount: '15%', usage: '74 / 300', expiresAt: '2026-03-28', status: 'Running' },
  { id: 3, code: 'RAMADAN10', discount: '10%', usage: 'Draft', expiresAt: '2026-03-20', status: 'Draft' },
  { id: 4, code: 'NEWYEAR25', discount: '25%', usage: '500 / 500', expiresAt: '2026-01-10', status: 'Expired' },
];

export const notifications: NotificationItem[] = [
  { id: 1, title: 'Peak hour pricing update', audience: 'Drivers', sentAt: '2026-03-13 09:00', channel: 'Push', status: 'Sent' },
  { id: 2, title: 'Weekend discount campaign', audience: 'Users', sentAt: '2026-03-14 14:30', channel: 'Email', status: 'Sent' },
  { id: 3, title: 'Required vehicle inspection', audience: 'Drivers', sentAt: '2026-03-16 10:00', channel: 'In-app', status: 'Scheduled' },
];

export const revenueTrend = [18, 22, 25, 24, 28, 31, 35];
export const tripStatusShare = [56, 24, 12, 8];
export const quickNotes = [
  'Static demo build. All data in this version is local and safe for GitHub Pages.',
  'Routes work directly without backend calls or login checks.',
  'You can keep this version for portfolio, review, and quick client demos.',
];
