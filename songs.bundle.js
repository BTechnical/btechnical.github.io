$("#myTable").DataTable({ajax:"/songs.txt",columns:[{data:"Title"},{data:"Artist"},{data:"Year"},{data:"Duo"},{data:"Explicit"},{data:"SongId"}]});