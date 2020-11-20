    // $(document).ready(function () {
    //     $.fn.DataTable.ext.errMode = 'throw';
    //     table = $('#ajaxtagihan').DataTable({
    //         "order": [],
    //         "processing": true,
    //         "serverSide": true,
    //         "ajax": {
    //             "url": "<?php echo site_url('dashboard/datatables'); ?>",
    //             "type": "POST"
    //         },
    //         headers: {
    //             'X-Requested-With': 'XMLHttpRequest'
    //         },
    //         "columnDefs": [{
    //             "targets": [0],
    //             "orderable": false
    //         }],
    //         language: {
    //             paginate: {
    //                 previous: "<i class='mdi mdi-chevron-left'>",
    //                 next: "<i class='mdi mdi-chevron-right'>"
    //             }
    //         },
    //         drawCallback: function () {
    //             $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    //         }
    //     });
    // });

    $(document).ready(function () {

        $('#show_data').on('click', '.hapus', function () {
            var id = $(this).attr('data');
            $('#hapus').modal('show');
            $('[name="id_tagihan"]').val(id);
        });

        $('#show_data').on('click', '.diskon', function () {
            var id = $(this).attr('data');
            $.ajax({
                type: "GET",
                url: "<?php echo base_url('pelanggan/getdiskon') ?>",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                dataType: "JSON",
                data: {
                    id: id
                },
                success: function (data) {
                    $.each(data, function (ket, id_tagihan, diskon) {
                        $('#diskon').modal('show');
                        $('#keterangan').html(data.ket);
                        $('[name="idtagihan"]').val(data.id_tagihan);
                        $('[name="nomdiskon"]').val(data.diskon);

                    });
                }
            });
            return false;
        });

        $('#show_data').on('click', '.edittagih', function () {
            var id = $(this).attr('data');
            $.ajax({
                type: "GET",
                url: "<?php echo base_url('pelanggan/get_tagih_edit') ?>",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                dataType: "JSON",
                data: {
                    id: id
                },
                success: function (data) {
                    $.each(data, function (ket, id_tagihan, nominal, tgl_tagihan) {
                        $('#EditTagih').modal('show');
                        // $('#keterangan').html(data.ket);
                        $('[name="tgl_tagihan"]').val(data.tgl_tagihan);
                        $('[name="nominal"]').val(data.nominal);
                        $('[name="ket"]').val(data.ket);
                        $('[name="id_tagih"]').val(data.id_tagihan);

                    });
                }
            });
            return false;
        });

        //Update diskon
        $('#diskon_simpan').on('click', function () {
            var nomdiskon = $('#nom').val();
            var id_tagihan = $('#idtag').val();
            var id_pel = $('#idpel').val();
            $.ajax({
                type: "POST",
                url: "<?php echo base_url('pelanggan/adddiskon') ?>",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                dataType: "JSON",
                data: {
                    nomdiskon: nomdiskon,
                    id_tagihan: id_tagihan,
                    id_pelang: id_pel
                },
                success: function (data) {

                    $('#diskon').modal('hide');
                }
            });
            return false;
        });

        // DIBAYAR
        $('#show_data').on('click', '.dibayar', function () {
            var id = $(this).attr('data');
            $.ajax({
                type: "GET",
                url: "<?php echo base_url('pelanggan/dibayar') ?>",
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                },
                dataType: "JSON",
                data: {
                    id: id
                },
                success: function (data) {
                    $.each(data, function (ket, id_tagihan, nominal) {
                        $('#dibayar').modal('show');
                        // converter ke rupiah
                        var bilangan = data.nominal;

                        var number_string = bilangan.toString(),
                            sisa = number_string.length % 3,
                            rupiah = number_string.substr(0, sisa),
                            ribuan = number_string.substr(sisa).match(/\d{3}/g);

                        if (ribuan) {
                            separator = sisa ? '.' : '';
                            rupiah += separator + ribuan.join('.');
                        }

                        $('#ketdibayar').html(data.ket);
                        $('#nominal').html(rupiah);
                        $('#btn_cicil').html("<button type='button' class='btn btn-warning cicil' data='" + data.id_tagihan + "'>Dibayar Cicil</button>");

                        $('[name="idtagihan"]').val(data.id_tagihan);
                        $('[name="nominal"]').val(data.nominal);

                    });
                }
            });
            return false;
        });
        $('#dibayar').on('click', '.cicil', function () {
            var id = $(this).attr('data');
            $('#dibayar_cicil').modal('show');
            $('[name="id_tagihan"]').val(id);
        });

    });