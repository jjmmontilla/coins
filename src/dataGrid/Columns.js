

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const columns = [
  { field: 'market_cap_rank', headerName: '#', width: 70 },
  { field: 'name', headerName: 'Name', width: 160, renderCell: (params) => (
    <div className='d-flex'>
      <img src={params.row.image} height={20}  alt='icon' />
      <strong className='ml-2'>{params.row.name}</strong>
    </div>
  ), },
  { field: 'current_price', headerName: 'Price', width: 130, renderCell: (params) => (
      <span>
        { dollarUS.format(params.row.current_price) }
      </span>
    )
  },
  { field: 'price_change_percentage_1h_in_currency', headerName: '1h %', width: 130, renderCell: (params) => (
    <span className={(params.row.price_change_percentage_1h_in_currency < 0)? 'text-red' : 'text-green'}>
      { `${params.row.price_change_percentage_1h_in_currency.toFixed(2)}%` }
    </span>
  ) },
  { field: 'price_change_percentage_24h', headerName: '24h %', width: 130, renderCell: (params) => (
    <span className={(params.row.price_change_percentage_24h < 0)? 'text-red' : 'text-green'}>
      { `${params.row.price_change_percentage_24h.toFixed(2)}%` }
    </span>
  )},
  //{ field: 'price_change_percentage_7d_in_currency', headerName: '7d %', width: 130 },
  { field: 'market_cap', headerName: 'Market Cap', width: 150, renderCell: (params) => (
      <span>
        { dollarUS.format(params.row.market_cap) }
      </span>
    ) 
  },
  { field: 'total_volume', headerName: 'Valumen', width: 140, renderCell: (params) => (
    <span>
      { dollarUS.format(params.row.total_volume) }
    </span>
  )},
  { field: 'circulating_supply', headerName: 'Circulating Supply', width: 130 },
  { field: '', headerName: 'Last 7 Days', width: 180 }  
];


