@extends('layouts.app')

@section('content')
    <h2>Contact Form</h2>
    <form action="{{route('contact')}}" class="col-md-6" method="post">
        <!-- Cross Site Request Forgery-->
        {{csrf_field()}}

        <div class="col-md-4 form-group">
            <span>Name</span>
            <input type="text" name="name" value="{{old('name')}}" class="form-control">
            @error('name')
                <span class="text-danger">{{$message}}</span>
            @enderror
        </div>
        
        <div class="col-md-4 form-group">
            <span>Email Address</span>
            <input type="text" name="email" value="{{old('email')}}" class="form-control">
            @error('email')
                <span class="text-danger">{{$message}}</span>
            @enderror
        </div>
        <div class="col-md-4 form-group">
            <span>Phone Number</span>
            <input type="text" name="phone" value="{{old('phone')}}" class="form-control">
            @error('phone')
                <span class="text-danger">{{$message}}</span>
            @enderror
        </div>
        <div class="col-md-4 form-group">
            <span>Message</span>
            <textarea type="date" name="textarea" value="{{old('textarea')}}" class="form-control"></textarea>
            @error('textarea')
                <span class="text-danger">{{$message}}</span>
            @enderror
        </div>
        <br>
        <input type="submit" class="btn btn-success" value="Submit" >
    </form>
@endsection