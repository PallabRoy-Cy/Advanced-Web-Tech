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
		@foreach($products as $product)
		<tr>
			<td>{{$product->id}}</td>
			<td>{{$product->name}}</td>
			<td>{{$product->price}}</td>
			<td>{{$product->qty}}</td>
			<td>{{$product->description}}</td>
			<td><a href="/delete/{{$product->id}}" class="btn btn-danger">delete</a></td>
			<td><a href="/edit/{{$product->id}}" class="btn btn-success">edit</a></td>
		</tr>
		@endforeach
	</table>
</div>

</body>
</html>