// Map pins for "Where we have worked" on /projects. Approximate coordinates for a country-scale map.
export interface Location {
  name: string;
  lat: number;
  lng: number;
  projects: string[];
}

export const locations: Location[] = [
  {
    name: 'Colombo',
    lat: 6.9271,
    lng: 79.8612,
    projects: [
      'Aitken Spence Head Office',
      'Shangri-La Hotel',
      'World Trade Center',
      'One Galle Face',
      'Cinnamon Life',
      'HSBC Head Office',
      'Dialog Head Office',
      'Grand Bell Hotel',
      'Monarch Residence',
      'Empire Residencies',
      'Cinnamon Garden Residence',
      'Survey Department',
      'Access Towers',
      'Browns Capital',
      'Altair Residencies',
      'NDB Bank',
      'Ceylinco Life',
      'NTB Head Office',
      'VFS Global',
      'Havelock City',
      'Access West Port Terminal',
    ],
  },
  { name: 'Katunayake', lat: 7.1808, lng: 79.8841, projects: ['Bandaranaike International Airport', 'Civil Aviation Authority'] },
  { name: 'Seeduwa', lat: 7.1281, lng: 79.88, projects: ['Airport Garden Hotel'] },
  { name: 'Wattala', lat: 6.9897, lng: 79.8918, projects: ['Hemas Hospital'] },
  { name: 'Gampaha', lat: 7.0917, lng: 79.9997, projects: ['Sethma Hospital'] },
  { name: 'Rajagiriya', lat: 6.9094, lng: 79.896, projects: ['ICONIC Building'] },
  { name: 'Battaramulla', lat: 6.899, lng: 79.918, projects: ['Western Province Building'] },
  { name: 'Kotte', lat: 6.8868, lng: 79.9187, projects: ['77th on Fourth Residence'] },
  { name: 'Thalawathugoda', lat: 6.8723, lng: 79.931, projects: ['Hemas Hospital'] },
  { name: 'Malabe', lat: 6.9046, lng: 79.9585, projects: ['Suncity Residencies'] },
  { name: 'Dehiwala', lat: 6.8511, lng: 79.8656, projects: ['Marine City Residence'] },
  { name: 'Kandy', lat: 7.2906, lng: 80.6337, projects: ['Kandy City Center'] },
  { name: 'Ahungalla', lat: 6.316, lng: 80.0342, projects: ['RIU Hotel'] },
  { name: 'Galle', lat: 6.0535, lng: 80.221, projects: ['District Secretariat Office'] },
  { name: 'Weligama', lat: 5.9749, lng: 80.4297, projects: ['Marriott Hotel'] },
  { name: 'Mirissa', lat: 5.9483, lng: 80.4716, projects: ['Summer Season Hotel'] },
  { name: 'Hakmana', lat: 6.0823, lng: 80.66, projects: ['Hakmana Primary School'] },
];
