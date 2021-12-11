@extends('layouts.app')
@section('content')
    <table class="table table-borded">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Dob</th>
            <th></th>
        </tr>
        @foreach($registrations as $registration)
            <tr>
                <td>{{$registration->id}}</td>
                <td>{{$registration->name}}</td>
                <td>{{$registration->username}}</td>
                <td>{{$registration->email}}</td>
                <td>{{$registration->phone}}</td>
                <td>{{$registration->dob}}</td>
                <td><a href="/registration/edit/{{$registration->id}}/{{$registration->name}}">Edit</a></td>
            </tr>
        @endforeach
    </table>
@endsection