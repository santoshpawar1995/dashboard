// export const usercolumn=[
//     {feild:'id',headerName:'ID',width:70},
// ]

// export const userRow=[
// {
//   id:1,
//   username:'santosh',
//   img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//   status:"active",
//   email:"adaw34@gmai.com",
//   age:43

// },
// {
//     id:2,
//     username:'manoj',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"pending",
//     email:"hfswddwaxa34@gmai.com",
//     age:35
  
//   },
//   {
//     id:3,
//     username:'parameshwar',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"passive",
//     email:"devata34@gmai.com",
//     age:45
  
//   },
//   {
//     id:4,
//     username:'aditya',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"pending",
//     email:"adaw34@gmai.com",
//     age:54
  
//   },
//   {
//     id:5,
//     username:'aradhya',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"active",
//     email:"fwds34@gmai.com",
//     age:23
  
//   },
//   {
//     id:6,
//     username:'krishnaa',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"pending",
//     email:"krshna4@gmai.com",
//     age:76
  
//   },
//   {
//     id:7,
//     username:'pawar',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"passive",
//     email:"santk4@gmai.com",
//     age:54
  
//   },
//   {
//     id:8,
//     username:'ajay',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"pending",
//     email:"adaw34@gmai.com",
//     age:54
  
//   },
//   {
//     id:9,
//     username:'ashoke',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"active",
//     email:"asokr34@gmai.com",
//     age:65
  
//   },
//   {
//     id:10,
//     username:'arjun',
//     img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
//     status:"passive",
//     email:"arjun34@gmai.com",
//     age:54
  
//   },

// ]
export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'username', width: 180 ,
     renderCell:(params)=>{
        return(
            <div className="cellwithimg" style={{height:32, width:'32'}}>
                <img className="cellimg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
     }
},
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'status',
      headerName: 'status',
     width:90,
     renderCell:(params)=>{
        return(
            <div className={`cellwithstatus ${params.row.status}`}>
            {params.row.status}
            </div>
        )
     }

    },
  ];
  
  export const rows =[
    {
      id:1,
      username:'santosh',
      img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
      status:"active",
      email:"adaw34@gmai.com",
      age:43
    
    },
    {
        id:2,
        username:'manoj',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"pending",
        email:"hfswddwaxa34@gmai.com",
        age:35
      
      },
      {
        id:3,
        username:'parameshwar',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"passive",
        email:"devata34@gmai.com",
        age:45
      
      },
      {
        id:4,
        username:'aditya',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"pending",
        email:"adaw34@gmai.com",
        age:54
      
      },
      {
        id:5,
        username:'aradhya',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"active",
        email:"fwds34@gmai.com",
        age:23
      
      },
      {
        id:6,
        username:'krishnaa',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"pending",
        email:"krshna4@gmai.com",
        age:76
      
      },
      {
        id:7,
        username:'pawar',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"passive",
        email:"santk4@gmai.com",
        age:54
      
      },
      {
        id:8,
        username:'ajay',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"pending",
        email:"adaw34@gmai.com",
        age:54
      
      },
      {
        id:9,
        username:'ashoke',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"active",
        email:"asokr34@gmai.com",
        age:65
      
      },
      {
        id:10,
        username:'arjun',
        img:"https://e1.pxfuel.com/desktop-wallpaper/88/870/desktop-wallpaper-pin-on-indian-army-para-special-forces-thumbnail.jpg",
        status:"passive",
        email:"arjun34@gmai.com",
        age:54
      
      },
    
    ]