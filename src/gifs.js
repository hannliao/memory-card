const gifs = [
  {
    id: 'elvis',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGUwZWVlbXNiMXNzcDg0Y2h1ZDA0ZW9hNWR5ZjcwNXNoY29yN290OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KiZ6kV683kPaU/giphy.gif',
  },
  {
    id: 'squirt',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3cyMTRwdnM3YmJxZ3ZhdnlidTdqb24yN29iYTY5emxiOHYzaDlvZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BCvA8CUtfsHbW/giphy.gif',
  },
  {
    id: 'dancing',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3Fpc3Q5bDNxeWFrZzFtM3hya3Jubmxvb256NXA4dDVxaXo1aXdocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nIaOeW31UgFMs/giphy.gif',
  },
  {
    id: 'crying',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmtmd2Y5NTVkM21xeGN4OWw1Mmh1bTNvZTRmeXdpeXRxZHF0bXBpYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/i0lZAPw40F212/giphy.gif',
  },
  {
    id: 'falling',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2w0Z2ZndjVjaW01eXQyaDR2ZHNhODhodjA1M3JhNW1zbTRiNnNtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11CteqsbhVy3V6/giphy.gif',
  },
  {
    id: 'laundry',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWpodXAwOWh1bGk1Z2Q5ejl4ZHg5d3RhcGk1cnVjdnl5M2YxOHFtYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QSLtvOL02ggyA/giphy.gif',
  },
  {
    id: 'breakfast',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2FveTZ3eWtzY2FqMXpuNXA4bHc3cnlkYW9vdGVldjYxNTQ2Z3BwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BRAinyY5JCJOM/giphy.gif',
  },
  {
    id: 'surfing',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGkwbXd6Z3RhdzZ6NTAwbjA2ejJ0NWRsMTF6bHhiYms3ZTJ5dWoxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nyRYg8RXdnaso/giphy.gif',
  },
  {
    id: 'hugging',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExazh4YjcyMXkxeWloZmw1eHdrbXo3cWlkeXg0d203cjJkMnRzNHp1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ck27cNlAHxveU/giphy.gif',
  },
  {
    id: 'flowers',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dzaDI2enYzYzRqY2F5dm8zMmc2ZDF5eDlwYjZyNjFtdGZ6ejRuMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/smkHMM0SR2eCk/giphy.gif',
  },
  {
    id: 'feral',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXJrbnJ1OW53bWhpZnV4dzN0N3I0NGM3M2djN2xtaHYyaTA0eWV0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKPkImQoc6mAbwvrbg/giphy.gif',
  },
  {
    id: 'bed',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXNydmg0a3FjMjZiZzl3ZG40NmlxMWJkdnl3YWdmNTBvOW9mZHZhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u8PnFQdDTglXi/giphy.gif',
  },
  {
    id: 'please',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDRybTNsbmhucHU1OHgzaHRwbTczdm0zcHJqdTF1N2g1NzhmcmYwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f42N2PQhjDpWU/giphy.gif',
  },
  {
    id: 'postcard',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3llM3F5cGx2bHd3cm81YnhlbTdkcTltdWJrNW9waGs1MXZ3cDloOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RvIgkT1a9g5Ta/giphy.gif',
  },
  {
    id: 'sand',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWZ5cDdia3M4cHE5NGI5dTQ5ZDYycW52ajF3NGR4YjNocWU2aGg3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vhzQqiAS0T71u/giphy.gif',
  },
  {
    id: 'bike',
    src: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjRodHFjZXo3aHNueWM5cnNxbzg2YTVicHlvNzZvYndlZXk1enpyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jisl24Dwj8pNe/giphy.gif',
  },
];

export default gifs;
