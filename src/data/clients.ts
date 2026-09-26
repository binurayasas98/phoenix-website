// Client references, names only. Never add logos.

export interface ClientGroup {
  title: string;
  names: string[];
}

export const clientGroups: ClientGroup[] = [
  {
    title: 'Waterproofing',
    names: [
      'Monarch Residencies, Colombo 3',
      'DHPL Building, Nawam Mawatha',
      'Empire Residencies, Colombo 2',
      'Dialog Head Office, Union Place',
      'Hemas Hospital, Wattala',
      'Hemas Hospital, Thalawathugoda',
      'Aitken Spence Head Office, Colombo 2',
      'Browns Capital Building, Colombo 8',
      'Suncity Residencies, Malabe',
      'Colombo Sea Port, Rapiscan Building',
      'Luminex (Pvt) Ltd',
      'One Galle Face Residence, Colombo 2',
      'Cinnamon Garden Residence, Colombo 7',
      'Survey Department, Narahenpita',
      'Marine City Residence, Dehiwala',
    ],
  },
  {
    title: 'Painting',
    names: [
      'Aitken Spence Head Office, Colombo 2',
      'NDB Bank, Dharmapala Mawatha',
      'Browns Capital Building, Colombo 8',
      'Suncity Residencies, Malabe',
      'Altair Residencies, Colombo 2',
      'Kandy City Center',
      'Sethma Hospital, Gampaha',
      'Dialog Head Office',
      'Hakmana Primary School (with MAGA Engineering)',
      "People's Leasing Building, Colombo 5",
      'Hemas Hospital, Wattala',
      'VFS Global, Dematagoda',
      'HSBC Head Office, Colombo 1',
      'One Galle Face Office Tower and Mall',
      'Monarch Residence, Colombo 3',
      'Access West Port Terminal, Colombo',
      'Access Towers, Colombo 2',
      'Marine City Residence, Dehiwala',
      'Airport Garden Hotel, Seeduwa',
      'District Secretariat Office, Galle',
      'Summer Season Hotel, Mirissa',
      'Empire Residence, Colombo 2',
    ],
  },
  {
    title: 'Glass and facade cleaning',
    names: [
      'World Trade Center (annual)',
      '7 Sense, Colombo 7 (annual)',
      'Civil Aviation Authority, Katunayake (every three months)',
      'Western Province Building, Battaramulla (annual)',
      'Shangri-La Hotel (monthly)',
      'One Galle Face Residence (annual)',
      'Cinnamon Suites and Residence (facade cleaning)',
      'Siyapatha Building, D S Senanayake Mawatha',
      'ICONIC Building, Rajagiriya',
      'Kandy City Center (roof washing)',
      'RIU Hotel, Ahungalla',
      'Ceylinco Life, Colombo 3',
      'HSBC, Colombo 1',
      'Browns Capital, D S Senanayake Mawatha',
      'Marriott Hotel, Weligama',
      'Grand Bell Hotel, Colombo 3',
      'BMS Building, Colombo 6',
      'Monarch Residence, Colombo 3',
      'Access Tower 1, Colombo 2',
      'Cinnamon Life, Colombo 2',
      'DHPL Building, Nawam Mawatha',
      'M2M, Colombo 2',
    ],
  },
  {
    title: 'Glass replacement',
    names: ['Siyapatha Building, D S Senanayake Mawatha', 'Sampath Bank, Nawam Mawatha'],
  },
  {
    title: 'Sealant application',
    names: [
      'Monarch Residence, Galle Road',
      'Empire City Residence, Braybrooke Place, Colombo 2',
      'Hemas Hospital, Wattala',
      'Hemas Hospital, Thalawathugoda',
      'Browns Capital, D S Senanayake Mawatha',
      'Hemas Pharmaceuticals, Colombo 3',
      'World Trade Center',
      'Dialog Head Office, Union Place',
    ],
  },
  {
    title: 'Crack repair',
    names: [
      'Empire Residencies, Colombo 2',
      'Aitken Spence, Vauxhall Street',
      '77th on Fourth Residence, Old Nawala Road',
      'VFS Global, Dematagoda',
      'Hemas Hospital, Thalawathugoda',
      'NTB Head Office, Nawam Mawatha',
      'Marine City Residence, Dehiwala',
      'One Galle Face Office Tower, Colombo 2',
    ],
  },
];

export const otherClients: string[] = ['Havelock City, Colombo', 'City of Dreams, Colombo'];

export interface TrustedClient {
  name: string;
  /** Short descriptor shown under the name. */
  type: string;
}

/** The "trusted by" client wall on the home page. Names only, never logos. */
export const trustedBy: TrustedClient[] = [
  { name: 'Bandaranaike International Airport', type: 'Airport' },
  { name: 'Shangri-La', type: 'Hotel' },
  { name: 'World Trade Center', type: 'Offices' },
  { name: 'One Galle Face', type: 'Residences and mall' },
  { name: 'Cinnamon Life', type: 'Hotel' },
  { name: 'HSBC', type: 'Bank' },
  { name: 'Dialog', type: 'Head office' },
  { name: 'NDB Bank', type: 'Bank' },
  { name: 'Hemas Hospitals', type: 'Hospitals' },
  { name: 'Aitken Spence', type: 'Head office' },
  { name: 'Marriott Weligama', type: 'Hotel' },
  { name: 'Civil Aviation Authority', type: 'Aviation authority' },
];
