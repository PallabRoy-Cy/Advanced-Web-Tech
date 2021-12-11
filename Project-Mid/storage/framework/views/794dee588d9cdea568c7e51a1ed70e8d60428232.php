<!DOCTYPE html>
<html>
<head>
    <title>ES</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
<nav class="navbar navbar-light navbar-expand-lg mb-5" style="background-color: #e3f2fd;">
        <div class="container">
            <a class="navbar-brand mr-auto" href="#">Shoppers</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <?php if(auth()->guard()->guest()): ?>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo e(route('login')); ?>">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo e(route('register-user')); ?>">Register</a>
                    </li>
                    <?php else: ?>
                    <li class="nav-item">
                        <a class="nav-link" href="<?php echo e(route('signout')); ?>">Logout</a>
                    </li>
                    <?php endif; ?>
                </ul>
            </div>
        </div>
    </nav>
    
<div class="container">
    <h2>Pending Orders<h2>
	<table class="table table-bordered shadow text-center table-striped">
		<tr>
			<th>id</th>
			<th>name</th>
			<th>price</th>
			
			<th>description</th>
			<th>Delivery status</th>
			<!-- <th>edit</th> -->
		</tr>
		<?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
		<tr>
			<td><?php echo e($product->id); ?></td>
			<td><?php echo e($product->name); ?></td>
			<td><?php echo e($product->price); ?></td>
			
			<td><?php echo e($product->description); ?></td>
			<td><a href="/delete/<?php echo e($product->id); ?>" class="btn btn-danger">Completed</a></td>
			<!-- <td><a href="/edit/<?php echo e($product->id); ?>" class="btn btn-success">edit</a></td> -->
		</tr>
		<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
	</table>
</div>

</body>
</html><?php /**PATH C:\xampp\htdocs\delivery_boy\resources\views/list.blade.php ENDPATH**/ ?>