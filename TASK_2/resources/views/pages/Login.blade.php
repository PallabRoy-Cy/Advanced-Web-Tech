@extends('layouts.app')

@section('content')
    <h2>Login</h2>
    <form action="{{route('login')}}" class="col-md-6" method="post">
        <!-- Cross Site Request Forgery-->
        {{csrf_field()}}
        
        <div class="col-md-4 form-group">
            <span>Username</span>
            <input type="text" name="username" value="{{old('username')}}" class="form-control">
            @error('username')
                <span class="text-danger">{{$message}}</span>
            @enderror
        </div>
        <div class="col-md-4 form-group">
            <span>Password</span>
            <input type="text" name="pass" value="{{old('password')}}" class="form-control">
            @error('pass')
                <span class="text-danger">{{$message}}</span>
            @enderror
        </div>
       
        <br>
        <input type="submit" class="btn btn-success" value="Login" >
    </form>
@endsection