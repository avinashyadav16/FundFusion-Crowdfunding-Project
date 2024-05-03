<div class="container">
    <?php switch ($mode): 
        case 'succeeded': 
            // TODO: Auto login
            header('Location: ' . APP_URL);
            exit;
            
        case 'failed': 
            // TODO: Show error message
            if (isset($errors)) { 
                extract($errors); 
            } 
            // Fall through to the 'login' case
            
        case 'login': 
            // Show login form 
    ?>
            <form class="jumbotron center-block" style="max-width: 600px;" action="<?php echo APP_URL ?>/user/login" method="post">
                <div class="form-group <?php if (isset($error)) { echo 'has-error'; } ?>">
                    <h2><?php echo $title ?></h2>
                    <?php if (isset($error)): ?>
                        <span class="help-block"><?php echo $error ?></span>
                    <?php endif ?>
                </div>
                <div class="form-group <?php if (isset($error)) { echo 'has-error'; } ?>">
                    <label class="control-label">Username</label>
                    <input type="text" class="form-control" name="usrname" required="required" placeholder="Username">
                </div>
                <div class="form-group <?php if (isset($error)) { echo 'has-error'; } ?>">
                    <label class="control-label">Password</label>
                    <input type="password" class="form-control" name="pwd" required="required" placeholder="Password">
                </div>
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember" value="true"> Remember Me
                    </label>
                </div>
                <button type="submit" role="button" class="btn btn-default btn-lg">Log in</button>
            </form>
    <?php endswitch ?>
</div>
