$("#myTable").DataTable({ajax:"/songs.txt",columns:[{data:"Title"},{data:"Artist"},{data:"Year"},{data:"Duo"},{data:"Explicit"},{data:"SongId"}],order:[[0,"asc"]],columnDefs:[{target:5,visible:!1,searchable:!1}],lengthMenu:[25,50,100,250],return:!0});