<div class="container">
  <div class="center-block jumbotron text-center" style="max-width: 600px;">
    <?php switch ($mode):
      case 'succeeded': ?>
        <h4>Unfollowed <a href="<?php echo APP_URL . "/user/view/" . $uname2; ?>"><?php echo $uname2; ?></a></h4>
      <?php break;
      case 'notfollowed': ?>
        <h4>You have not followed <a href="<?php echo APP_URL . "/user/view/" . $uname2; ?>"><?php echo $uname2; ?></a> yet</h4>
    <?php break;
    endswitch; ?>
  </div>
</div>