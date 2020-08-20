$( document ).ready(function() {
    function dynamicTable(positionPage){
        // create table
        $.get( "Api/users.php", {page:positionPage} )
            .done(function( data ) {
                var dataUser = JSON.parse(data);
        
                var $table = $('<table>');
                $table.addClass('table table-striped bordertoptableusers')
                //tbody
                var $tbody = $table.append('<tbody />').children('tbody');

                $.each(dataUser.records, function( index, value ) {
                    // add row
                    $tbody.append('<tr />').children('tr:last')
                    .append('<td style="text-align: center; min-width: 10rem; font-size: 25px;"><i class="fa fa-check-circle" style="color:green"></i></td>')
                    .append('<td class="w-50">'+value.user+'<br/>'+value.name+'</td>')
                    .append('<td class="w-50"><i class="fa fa-ellipsis-h"></i><br/>'+value.group_name+'</td>');
                });

                var $ul = $('<ul>');
                $ul.addClass('pagination')

                var i;
                if (dataUser.pageNow != 1) {
                    $ul.append('<li data-info="'+(dataUser.pageNow-1)+'" class="page-item"><a class="page-link page-user userlink" href="#"><i class="fa fa-angle-double-left" style="font-size: 15px;"></i> Previous</a></li>');
                }
                for (i = 0; i < dataUser.pages; i++) {
                    if (dataUser.pageNow == (i+1)) {
                        $ul.append('<li data-info="'+(i+1)+'" class="page-item"><a class="page-link page-user userlinkactive" >'+(i+1)+'</a></li>');
                    } else {
                        $ul.append('<li data-info="'+(i+1)+'" class="page-item"><a class="page-link page-user userlink" >'+(i+1)+'</a></li>');
                    }
                }
                if (dataUser.pageNow != dataUser.pages) {
                    $ul.append('<li data-info="'+(dataUser.pageNow+1)+'" class="page-item"><a class="page-link page-user userlink" href="#">Next <i class="fa fa-angle-double-right" style="font-size: 15px;"></i></a></li>');
                }

                // add table to dom
                $('#table-users').children('table').remove();
                $table.appendTo('#table-users');

                $('#pagesUsers').children('ul').remove();
                $ul.appendTo('#pagesUsers');
        });
    }

    $(document).on('click', "a.page-user", function() {
        var liId = $(this).parent("li").attr("data-info");
        dynamicTable(liId);     
    });

    $(".log-out").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        
        Cookies.remove('token');
        Cookies.remove('remember');
        window.location.href="index";
    });


    var token = Cookies.get('token');
    var remember = Cookies.get('remember');

    if (token == null) {
        window.location.href="index";
    }else{
        if (remember == 0) {
            Cookies.remove('token');
            Cookies.remove('remember');
        }
        dynamicTable(1);
    }

    // validar si token existe si existe enviar un post con el token para validar si esta en la base
    //si no esta en la base boorar el token enviar al login
    //no hacer nada
    //si remember es 1 no hacer nada si es 0 borrar el token
});