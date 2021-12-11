<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>
<body>

<div class="container">
	<h1 class="text-center">Update Data</h1>
	<form method="POST" action="/update/{{$products->id}}">
		@csrf
		<div class="mb-3">
			<label><b>Name:</b></label>
			<input type="text" name="name"  class="form-control" value="{{$products->name}}">
		</div>
		<div class="mb-3">
			<label><b>Price:</b></label>
			<input type="text" name="price"  class="form-control" value="{{$products->price}}">
		</div>
		<div class="mb-3">
			<label><b>Quntity:</b></label>
			<input type="text" name="qty"  class="form-control" value="{{$products->qty}}">
		</div>
		<div class="mb-3">
			<label><b>Description:</b></label>
			<input type="text" name="description"  class="form-control" value="{{$products->description}}">
		</div>
		<input type="submit" name="update" value="Update" class="btn btn-success">
	</form>
</div>

</body>
</html>