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
                    @guest
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register-user') }}">Register</a>
                    </li>
                    @else
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('signout') }}">Logout</a>
                    </li>
                    @endguest
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
		@foreach($products as $product)
		<tr>
			<td>{{$product->id}}</td>
			<td>{{$product->name}}</td>
			<td>{{$product->price}}</td>
			
			<td>{{$product->description}}</td>
			<td><a href="/delete/{{$product->id}}" class="btn btn-danger">Completed</a></td>
			<!-- <td><a href="/edit/{{$product->id}}" class="btn btn-success">edit</a></td> -->
		</tr>
		@endforeach
	</table>
</div>

</body>
</html>