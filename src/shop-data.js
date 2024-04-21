const SHOP_DATA = [
  {
    title: 'Hammers',
    items: [
      {
        id: 1,
        name: 'Dougs Claw Hammer',
        imageUrl: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 25,
      },
      {
        id: 2,
        name: 'Smiths Wedge',
        imageUrl: 'https://images.unsplash.com/photo-1566937169390-7be4c63b8a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtbWVyfGVufDB8fDB8fHww',
        price: 18,
      },
      {
        id: 3,
        name: 'Dickies Mallet',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676901918792-f6e04df8b7b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtbWVyfGVufDB8fDB8fHww',
        price: 35,
      },
      {
        id: 4,
        name: 'Stainless Steel Claw Hammer',
        imageUrl: 'https://images.unsplash.com/photo-1607870411590-d5e9e06da09a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 25,
      },
      {
        id: 5,
        name: 'Money Cruncher',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1677108530122-2e35f2a0c6c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhhbW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 18,
      },
      {
        id: 6,
        name: 'Old Faithful',
        imageUrl: 'https://images.unsplash.com/photo-1624382085340-6df4bfc36cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhhbW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 14,
      },
      {
        id: 7,
        name: 'Craftmans Hammer',
        imageUrl: 'https://images.pexels.com/photos/5691537/pexels-photo-5691537.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 18,
      },
      {
        id: 8,
        name: 'Judges Mallet',
        imageUrl: 'https://images.unsplash.com/photo-1589307904488-7d60ff29c975?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhhbW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 14,
      },
      {
        id: 9,
        name: 'Mjolnir',
        imageUrl: 'https://images.unsplash.com/photo-1579445710183-f9a816f5da05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        price: 100000000,
      },
    ],
  },
  {
    title: 'ScrewDrivers',
    items: [
      {
        id: 10,
        name: '1/4 inch Phillips',
        imageUrl: 'https://images.pexels.com/photos/914913/pexels-photo-914913.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 8,
      },
      {
        id: 11,
        name: 'Screwdriver with anti slip handle',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/04/20/12/40/screwdriver-1341081_640.jpg',
        price: 28,
      },
      {
        id: 12,
        name: 'Magnetic Interchangable Screwdriver',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/05/23/22/screwdriver-798948_640.jpg',
        price: 110,
      },
      {
        id: 13,
        name: 'Roses Screwdriver',
        imageUrl: 'https://images.unsplash.com/photo-1524224313114-ebd9c49dde82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NyZXdkcml2ZXJ8ZW58MHx8MHx8fDA%3D',
        price: 60,
      },
      {
        id: 14,
        name: 'Surgeons Screwdriver',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/03/06/13/08/tester-280806_640.jpg',
        price: 160,
      },
      {
        id: 15,
        name: 'Three Anti Slip Magnetic Screwdrivers',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/05/16/18/screwdriver-708130_640.jpg',
        price: 160,
      },
      {
        id: 16,
        name: 'Philips Three Sizes ',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/01/22/20/48/screwdriver-608318_640.jpg',
        price: 190,
      },
      {
        id: 17,
        name: 'Screwdriver Kit',
        imageUrl: 'https://images.pexels.com/photos/4792511/pexels-photo-4792511.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 200,
      },
    ],
  },
  {
    title: 'Drills',
    items: [
      {
        id: 18,
        name: 'Fixed Point Stabby Drill',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1676760960823-cca1c4943504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJpbGx8ZW58MHx8MHx8fDA%3D',
        price: 15,
      },
      {
        id: 19,
        name: 'Multipurpose Drill',
        imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHJpbGx8ZW58MHx8MHx8fDA%3D',
        price: 9,
      },
      {
        id: 20,
        name: 'Heavy Duty Metal Drill',
        imageUrl: 'https://images.unsplash.com/photo-1592054286113-649ba108e968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RHJpbGx8ZW58MHx8MHx8fDA%3D',
        price: 90,
      },
      {
        id: 21,
        name: 'Precison Bow Drill',
        imageUrl: 'https://images.pexels.com/photos/5973861/pexels-photo-5973861.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 16,
      },
      {
        id: 22,
        name: 'Stainless Steel Mutli Purpose Drill',
        imageUrl: 'https://images.pexels.com/photos/8821015/pexels-photo-8821015.jpeg?auto=compress&cs=tinysrgb&w=600',
        price: 15,
      },
    ],
  },
  {
    title: 'Wrenches',
    items: [
      {
        id: 23,
        name: 'Adjustable Wrench',
        imageUrl: 'https://images.unsplash.com/photo-1611288870280-4a322b8ec7ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V3JlbmNofGVufDB8fDB8fHww',
        price: 25,
      },
      {
        id: 24,
        name: 'Adjustable And Torque Wrenches',
        imageUrl: 'https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V3JlbmNofGVufDB8fDB8fHww',
        price: 20,
      },
      {
        id: 25,
        name: 'Torque Wrench Kit',
        imageUrl: 'https://images.unsplash.com/photo-1580402427914-a6cc60d7d44f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRvb2xzfGVufDB8fDB8fHww',
        price: 80,
      },
      {
        id: 26,
        name: 'Pincer Wrench',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1666670725323-60e650bf9171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V3JlbmNofGVufDB8fDB8fHww',
        price: 80,
      },
      {
        id: 27,
        name: 'Mechanics Friend Wrench Pack',
        imageUrl: 'https://images.unsplash.com/photo-1580403596202-f8dac5d780c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFdyZW5jaHxlbnwwfHwwfHx8MA%3D%3D',
        price: 45,
      },
      {
        id: 28,
        name: 'Ten Wrenches',
        imageUrl: 'https://images.unsplash.com/photo-1623055659540-42475c90e3c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fFdyZW5jaHxlbnwwfHwwfHx8MA%3D%3D',
        price: 135,
      },
      {
        id: 29,
        name: 'Plier',
        imageUrl: 'https://images.unsplash.com/photo-1643702544078-04bdf2b761e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fFdyZW5jaHxlbnwwfHwwfHx8MA%3D%3D',
        price: 20,
      },
    ],
  },
  {
    title: 'Other Tools',
    items: [
      {
        id: 30,
        name: 'Pliers',
        imageUrl: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VG9vbHN8ZW58MHx8MHx8fDA%3D',
        price: 25,
      },
      {
        id: 31,
        name: 'Five Chisels',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1677702162621-f61d44e676eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRvb2xzfGVufDB8fDB8fHww',
        price: 20,
      },
      {
        id: 32,
        name: 'Shellac',
        imageUrl: 'https://images.unsplash.com/photo-1503791036301-091e845a5113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHx0b29sc3xlbnwwfHwwfHx8MA%3D%3D',
        price: 75,
      },
      {
        id: 33,
        name: 'Three Foot Hand Saw',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1680288884564-42ee6b3feb9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRvb2xzfGVufDB8fDB8fHww',
        price: 25,
      },
      {
        id: 34,
        name: 'Crafting Knives',
        imageUrl: 'https://images.unsplash.com/photo-1613206485477-34b2b17fa93f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRvb2xzfGVufDB8fDB8fHww',
        price: 40,
      },
      {
        id: 35,
        name: 'Staple Gun',
        imageUrl: 'https://images.unsplash.com/photo-1596213812335-ac67c2d653d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHRvb2xzfGVufDB8fDB8fHww',
        price: 25,
      },
    ],
  },
];


export default SHOP_DATA;