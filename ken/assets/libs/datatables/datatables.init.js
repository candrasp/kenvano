$(document).ready(function () {
    // $.fn.dataTable.moment('DD-MM-YYYY');
    $("#basic-datatable").DataTable({
        lengthMenu: [
            [10, 25, 50, -1],
            ['10', '25', '50', 'Semua']
        ],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    

    $("#tagihan").DataTable({
        "searching": false,
        "lengthChange": false,
        "paging": false,
        "info": false,
        "order": [
            [0, "asc"]
        ],

    });
  
    var a = $("#datatable-buttons").DataTable({
        lengthMenu: [
            [10, 25, 50, -1],
            ['10', '25', '50', 'Semua']
        ],
        buttons: [{
            extend: "copy",
            className: "btn-primary btn-sm"
        }, {
            extend: "print",
            className: "btn-primary btn-sm"
        }, {
            extend: "excelHtml5",
            className: "btn-primary btn-sm"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    var b = $("#buttons").DataTable({
        lengthMenu: [
            [10, 25, 50, -1],
            ['10', '25', '50', 'Semua']
        ],
        buttons: [{
            extend: "copy",
            className: "btn-info"
        }, {
            extend: "print",
            className: "btn-black"
        }, {
            extend: "excelHtml5",
            className: "btn-success"
        }],
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    });
    $("#selection-datatable").DataTable({
        select: {
            style: "multi"
        },
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), $("#key-datatable").DataTable({
        keys: !0,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $("#alternative-page-datatable").DataTable({
        pagingType: "full_numbers",
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
        b.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $("#alternative-page-datatable").DataTable({
        pagingType: "full_numbers",
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }),
        $("#scroll-vertical-datatable").DataTable({
        scrollY: "350px",
        scrollCollapse: !0,
        paging: !1,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), $("#scroll-horizontal-datatable").DataTable({
        scrollX: !0,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    }), $("#complex-header-datatable").DataTable({
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        columnDefs: [{
            visible: !1,
            targets: -1
        }]
    }), $("#row-callback-datatable").DataTable({
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        createdRow: function (a, e, i) {
            15e4 < +e[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
        }
    }), $("#state-saving-datatable").DataTable({
        stateSave: !0,
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function () {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        }
    })
});