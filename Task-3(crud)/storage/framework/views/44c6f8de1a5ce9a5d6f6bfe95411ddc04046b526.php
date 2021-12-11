<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>

<div class="container">
	<table class="table table-bordered shadow text-center table-striped">
		<tr>
			<th>id</th>
			<th>name</th>
			<th>price</th>
			<th>qty</th>
			<th>description</th>
			<th>delete</th>
			<th>edit</th>
		</tr>
		<?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
		<tr>
			<td><?php echo e($product->id); ?></td>
			<td><?php echo e($product->name); ?></td>
			<td><?php echo e($product->price); ?></td>
			<td><?php echo e($product->qty); ?></td>
			<td><?php echo e($product->description); ?></td>
			<td><a href="/delete/<?php echo e($product->id); ?>" class="btn btn-danger">delete</a></td>
			<td><a href="/edit/<?php echo e($product->id); ?>" class="btn btn-success">edit</a></td>
		</tr>
		<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
	</table>
</div>

</body>
</html><?php /**PATH C:\xampp\htdocs\crud\resources\views/list.blade.php ENDPATH**/ ?>