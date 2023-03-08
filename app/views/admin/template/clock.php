<?php
$isset_clock_version_1 = true;
?>
<link href="public/css/codehim-clock-1.css" rel="stylesheet"/>
<div data-intro="<?= $help['t_help_txt'] ?>" class="box box-primary">
    <!-- /.box-header -->
    <div class="box-body">
        <div class="row">
            <div class="col-md-12">
                <div class="clock-place mt-1 mb-1">
                    <h2 class="mb-3" style="text-align: center;font-size: 20px;direction: ltr;">
                        <span id="time">00:00:00</span> - <?= jdate("l, j F Y") ?>
                    </h2>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- ./box-body -->
</div>